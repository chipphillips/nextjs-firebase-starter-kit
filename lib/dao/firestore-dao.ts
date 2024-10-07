import { collection, getDocs, addDoc, updateDoc, deleteDoc, query, where, orderBy, limit, QueryConstraint } from 'firebase/firestore';
import { db } from '../config/firebase-client';
import { DBCollectionType } from './db-collections';

/**
 * Firebase DAO class to interact with Firestore collections 
 * @class
 * @classdesc This class is used to interact with Firebase Firestore
 * @export
 */
export class FirestoreDao<T extends { id?: string }> {
  private collectionRef;

  constructor(collectionName: DBCollectionType) {
    this.collectionRef = collection(db, collectionName);
  }

  /**
   * Find all documents in a collection
   */
  async getAll(): Promise<T[]> {
    const snapshot = await getDocs(this.collectionRef);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as T));
  }

  /**
   * Add a document to a collection
   */
  async create(data: Omit<T, 'id'>): Promise<string> {
    const docRef = await addDoc(this.collectionRef, data);
    return docRef.id;
  }
  // Helper methods for common query operations
  whereEqual(field: string, value: any): QueryConstraint {
    return where(field, '==', value);
  }

  orderByField(field: string, direction: 'asc' | 'desc' = 'asc'): QueryConstraint {
    return orderBy(field, direction);
  }

  limitResults(n: number): QueryConstraint {
    return limit(n);
  }
}