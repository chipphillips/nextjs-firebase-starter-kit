// lib/types/blog-post.ts
import { Timestamp } from 'firebase/firestore';

export interface BlogPost {
    id: string;
    slug: string;
    title: string;
    date: Timestamp;
    author: string;
    excerpt: string;
    content: string;
    coverImage: string;
    tags: string[];
    status: 'published' | 'draft';
}