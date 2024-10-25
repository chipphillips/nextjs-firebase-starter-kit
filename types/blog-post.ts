// lib/types/blog-post.ts
export interface BlogPost {
    id: string;
    title: string;
    content: string;
    author: string;
    category: string;
    createdAt: Date;
    date: Date;
    excerpt: string;
    coverImage: string;
    slug: string;
    status: 'published' | 'draft';
    tags: string[];
}
