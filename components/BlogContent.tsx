'use client'

import React from 'react'

interface BlogContentProps {
  content: string
}

export function BlogContent({ content }: BlogContentProps) {
  return <div dangerouslySetInnerHTML={{ __html: content }} />
} 