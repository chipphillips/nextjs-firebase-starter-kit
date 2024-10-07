// lib/dao/db-collections.ts

export enum DB_COLLECTIONS {
  POSTS = 'posts', // Updated to match the collection name in the image
  USERS = 'users', // Add the new users collection
  TEST_COLLECTION = 'test-collection', // Add the new test-collection
  // Add other collection names here as needed
}

// Type for the values of DB_COLLECTIONS
export type DBCollectionType = typeof DB_COLLECTIONS[keyof typeof DB_COLLECTIONS];

// Define the structure for a user document
export interface UserDocument {
  companyName: string;
  createdAt: string;
  email: string;
  firstName: string;
  isBetaUser: boolean;
  jobTitle: string;
  lastName: string;
}

// Define the structure for a test-collection document
export interface TestCollectionDocument {
  message: string;
  timestamp: string;
  userId: string;
}

// Define the structure for a post document
export interface PostDocument {
  author: string;
  content: string;
  coverImage: string;
  date: string; // Using string type for timestamp
  excerpt: string;
  id: string;
  slug: string;
  status: 'published' | 'draft'; // Using a union type for status
  tags: string[]; // Assuming tags are stored as an array of strings
  title: string;
}