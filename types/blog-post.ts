// lib/types/blog-post.ts
export interface BlogPost {
    id: string;
    title: string;
    content: string;
    slug: string;
    date: string; // ISO string format
    author: string;
    status: 'draft' | 'published';
    excerpt: string;
    coverImage?: string;
}
