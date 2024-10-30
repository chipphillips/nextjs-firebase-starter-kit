'use client';

import { useState } from 'react';
import { storage } from '@/lib/config/firebase-client';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

interface ImageUploadProps {
  onUploadComplete: (url: string) => void;
}

export function ImageUpload({ onUploadComplete }: ImageUploadProps) {
  const [isUploading, setIsUploading] = useState(false);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      setIsUploading(true);
      
      // Create a unique filename
      const filename = `${Date.now()}-${file.name}`;
      const storageRef = ref(storage, `blog-images/${filename}`);
      
      // Upload the file
      await uploadBytes(storageRef, file);
      
      // Get the download URL
      const downloadUrl = await getDownloadURL(storageRef);
      
      // Call the callback with the URL
      onUploadComplete(downloadUrl);
    } catch (error) {
      console.error('Error uploading image:', error);
      alert('Failed to upload image. Please try again.');
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="mt-2">
      <label className="block">
        <span className="sr-only">Choose image</span>
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          disabled={isUploading}
          className="block w-full text-sm text-gray-500
            file:mr-4 file:py-2 file:px-4
            file:rounded-full file:border-0
            file:text-sm file:font-semibold
            file:bg-indigo-50 file:text-indigo-700
            hover:file:bg-indigo-100
            disabled:opacity-50 disabled:cursor-not-allowed"
        />
      </label>
      {isUploading && (
        <p className="mt-2 text-sm text-gray-500">Uploading...</p>
      )}
    </div>
  );
} 