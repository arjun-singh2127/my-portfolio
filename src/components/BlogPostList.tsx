'use client';

import { BlogPost } from '@/data/blogPosts';
import { useState } from 'react';

interface BlogPostListProps {
  posts: BlogPost[];
}

export default function BlogPostList({ posts }: BlogPostListProps) {
  const [expandedPost, setExpandedPost] = useState<string | null>(null);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const formatContent = (content: string) => {
    // Simple markdown-like formatting
    const lines = content.split('\n');
    return lines.map((line, index) => {
      // Headers
      if (line.startsWith('## ')) {
        return (
          <h3
            key={index}
            className="text-xl font-semibold text-gray-900 dark:text-white mt-4 mb-2"
          >
            {line.replace('## ', '')}
          </h3>
        );
      }
      if (line.startsWith('### ')) {
        return (
          <h4
            key={index}
            className="text-lg font-semibold text-gray-800 dark:text-gray-200 mt-3 mb-2"
          >
            {line.replace('### ', '')}
          </h4>
        );
      }
      // Bold text
      if (line.startsWith('**') && line.endsWith('**')) {
        return (
          <strong
            key={index}
            className="font-semibold text-gray-900 dark:text-white"
          >
            {line.replace(/\*\*/g, '')}
          </strong>
        );
      }
      // List items
      if (line.startsWith('- ')) {
        return (
          <li key={index} className="ml-4 list-disc text-gray-700 dark:text-gray-300">
            {line.replace('- ', '')}
          </li>
        );
      }
      // Empty lines
      if (line.trim() === '') {
        return <br key={index} />;
      }
      // Regular paragraphs
      return (
        <p key={index} className="text-gray-700 dark:text-gray-300 mb-3">
          {line}
        </p>
      );
    });
  };

  return (
    <div className="space-y-6 sm:space-y-8">
      {posts
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .map((post) => (
          <article
            key={post.id}
            className="bg-emerald-50/80 dark:bg-emerald-950/40 rounded-lg shadow-lg p-6 sm:p-8 hover:shadow-xl transition-shadow"
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-2 sm:mb-0">
                {post.title}
              </h3>
              <time
                dateTime={post.date}
                className="text-sm text-emerald-600 dark:text-emerald-400 font-medium"
              >
                {formatDate(post.date)}
              </time>
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              By {post.author}
            </div>
            <div className="prose prose-emerald dark:prose-invert max-w-none">
              {expandedPost === post.id ? (
                <div className="space-y-2">{formatContent(post.content)}</div>
              ) : (
                <div className="space-y-2">
                  {formatContent(
                    post.content.split('\n').slice(0, 5).join('\n') + '...'
                  )}
                </div>
              )}
            </div>
            <button
              onClick={() =>
                setExpandedPost(expandedPost === post.id ? null : post.id)
              }
              className="mt-4 text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 font-medium transition-colors"
            >
              {expandedPost === post.id ? 'Read Less' : 'Read More'}
            </button>
          </article>
        ))}
    </div>
  );
}

