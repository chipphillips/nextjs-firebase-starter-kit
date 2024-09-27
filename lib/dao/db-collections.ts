// lib/dao/db-collections.ts

export const DB_COLLECTIONS = {
  USERS: 'users',
  POSTS: 'posts',
} as const;

// Type for the values of DB_COLLECTIONS
export type DBCollectionType = typeof DB_COLLECTIONS[keyof typeof DB_COLLECTIONS];