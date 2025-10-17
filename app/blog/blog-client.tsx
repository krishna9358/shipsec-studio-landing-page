'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import type { BlogPost } from '@/lib/blog';

export function BlogPageClient({ posts }: { posts: BlogPost[] }) {
  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      {posts.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-slate-600 text-lg">No blog posts yet. Check back soon!</p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-3xl border-2 border-slate-200 overflow-hidden hover:shadow-2xl hover:border-emerald-300 transition-all duration-300"
            >
              {post.coverImage && (
                <Link href={`/blog/${post.slug}`}>
                  <div className="aspect-video overflow-hidden bg-slate-100">
                    <img
                      src={post.coverImage}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </Link>
              )}

              <div className="p-8">
                <div className="flex items-center gap-3 text-xs text-slate-500 mb-4">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </time>
                  </div>
                  <span>•</span>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    <span>5 min read</span>
                  </div>
                </div>

                {post.tags && post.tags.length > 0 && (
                  <div className="flex items-center gap-2 flex-wrap mb-4">
                    {post.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                <Link href={`/blog/${post.slug}`}>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                </Link>

                <p className="text-slate-600 mb-6 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <p className="text-sm text-slate-600">
                    By <span className="font-semibold text-slate-900">{post.author}</span>
                  </p>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-semibold text-sm group/link"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      )}
    </div>
  );
}

