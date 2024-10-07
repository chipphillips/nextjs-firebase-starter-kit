import type { NextApiRequest, NextApiResponse } from 'next';
import { addBlogPost } from '../../lib/dao/blog-post-dao';
import { BlogPost } from '@/types/blog-post';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const postData: Omit<BlogPost, 'id'> = req.body;
      const postId = await addBlogPost(postData);
      res.status(200).json({ success: true, postId });
    } catch (error) {
      console.error('Error adding blog post:', error);
      res.status(500).json({ success: false, error: 'Failed to add blog post' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}