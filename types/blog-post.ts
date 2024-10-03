// lib/types/blog-post.ts
export interface BlogPost {
    id: string;
    title: string;
    content: string;
    author: {
        name: string;
        avatar: string;
        title: string;
    };
    createdAt: Date;
    date: Date;
    excerpt?: string;
    coverImage?: string;
    slug: string;
    published: boolean;
    category: string;
}