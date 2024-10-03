// lib/dao/db-collections.ts

export enum DB_COLLECTIONS {
  POSTS = 'blogPosts',
  // Add other collection names here as needed
}

// Type for the values of DB_COLLECTIONS
export type DBCollectionType = typeof DB_COLLECTIONS[keyof typeof DB_COLLECTIONS];