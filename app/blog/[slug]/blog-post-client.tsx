'use client';

// animations removed
import type { BlogPost } from '@/lib/blog';
import { Calendar, Clock, User } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

export function BlogPostClient({ post }: { post: BlogPost }) {
  return (
    <article className="pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-12">
          <div className="flex items-center gap-4 text-sm text-slate-500 mb-6">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
            </div>
            <span>•</span>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>5 min read</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span className="font-medium">{post.author}</span>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            {post.title}
          </h1>

          {post.tags && post.tags.length > 0 && (
            <div className="flex items-center gap-2 flex-wrap">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-sm px-4 py-1.5 bg-blue-50 text-blue-700 rounded-full font-medium border border-blue-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {post.coverImage && (
          <div className="aspect-video rounded-3xl overflow-hidden mb-12 border-2 border-slate-200 shadow-xl">
            <img
              src={post.coverImage}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        <div className="prose prose-lg prose-slate max-w-none prose-headings:font-bold prose-headings:text-slate-900 prose-p:text-slate-700 prose-p:leading-relaxed prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-slate-900 prose-code:text-blue-600 prose-code:bg-blue-50 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-pre:bg-slate-900 prose-pre:border-2 prose-pre:border-slate-200">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>
      </div>
    </article>
  );
}
