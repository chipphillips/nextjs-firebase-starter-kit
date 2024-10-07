import { getDatabase, ref, set, get, push, remove, query, orderByChild, equalTo, Database } from 'firebase/database';
import { db } from '../config/firebase-client';

/**
 * RealtimeDB DAO class to interact with Firebase Realtime Database
 * @class
 * @classdesc This class is used to interact with Firebase Realtime Database
 * @export
 */
export class RealtimeDbDao<T extends { id?: string }> {
  private dbRef;
  private database: Database;

  constructor(path: string) {
    this.database = getDatabase();
    this.dbRef = ref(this.database, path);
  }

  /**
   * Create a new item in the database
   * @param data - The data to be added
   * @returns Promise<string> - The id of the newly created item
   */
  async create(data: Omit<T, 'id'>): Promise<string> {
    const newRef = push(this.dbRef);
    await set(newRef, data);
    return newRef.key as string;
  }

  /**
   * Read an item from the database by id
   * @param id - The id of the item to read
   * @returns Promise<T | null> - The item data or null if not found
   */
  async read(id: string): Promise<T | null> {
    const snapshot = await get(ref(this.database, `${this.dbRef.key}/${id}`));
    return snapshot.exists() ? { id: snapshot.key, ...snapshot.val() } as T : null;
  }

  /**
   * Update an item in the database
   * @param id - The id of the item to update
   * @param data - The new data to update
   * @returns Promise<void>
   */
  async update(id: string, data: Partial<T>): Promise<void> {
    return set(ref(this.database, `${this.dbRef.key}/${id}`), data);
  }

  /**
   * Delete an item from the database
   * @param id - The id of the item to delete
   * @returns Promise<void>
   */
  async delete(id: string): Promise<void> {
    return remove(ref(this.database, `${this.dbRef.key}/${id}`));
  }

  /**
   * List all items in the database
   * @returns Promise<T[]> - An array of all items
   */
  async list(): Promise<T[]> {
    const snapshot = await get(this.dbRef);
    const items: T[] = [];
    snapshot.forEach((childSnapshot) => {
      items.push({ id: childSnapshot.key, ...childSnapshot.val() } as T);
    });
    return items;
  }

  /**
   * Query items based on a specific field and value
   * @param field - The field to query on
   * @param value - The value to match
   * @returns Promise<T[]> - An array of matching items
   */
  async queryByField(field: keyof T, value: any): Promise<T[]> {
    const queryRef = query(this.dbRef, orderByChild(field as string), equalTo(value));
    const snapshot = await get(queryRef);
    const items: T[] = [];
    snapshot.forEach((childSnapshot) => {
      items.push({ id: childSnapshot.key, ...childSnapshot.val() } as T);
    });
    return items;
  }
}
