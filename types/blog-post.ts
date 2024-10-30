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
    tags: string[];
    readingTime: number;
    seoTitle?: string;
    seoDescription?: string;
    lastModified: string;
    categories: string[];
    metaKeywords: string[];
}

// Add this new interface for the AdminPageClient props
export interface AdminPageProps {
    initialPosts: BlogPost[];
}
