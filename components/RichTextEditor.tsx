'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';

const QuillEditor = dynamic(() => import('react-quill'), {
  ssr: false,
  loading: () => <p>Loading editor...</p>,
});

interface RichTextEditorProps {
  value: string;
  onChange: (value: string) => void;
}

const modules = {
  toolbar: [
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    ['bold', 'italic', 'underline', 'strike'],
    [{ list: 'ordered' }, { list: 'bullet' }],
    ['link', 'image'],
    ['clean'],
  ],
};

export default function RichTextEditor({ value, onChange }: RichTextEditorProps) {
  return (
    <div className="rich-text-editor">
      <QuillEditor
        value={value}
        onChange={onChange}
        modules={modules}
        theme="snow"
        className="min-h-[200px]"
      />
    </div>
  );
} 