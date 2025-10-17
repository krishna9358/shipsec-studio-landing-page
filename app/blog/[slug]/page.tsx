import { getAllPosts, getPostBySlug, getAdjacentPosts } from '@/lib/blog';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { BlogComments } from '@/components/blog-comments';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { BlogPostClient } from './blog-post-client';

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  const { previous, next } = getAdjacentPosts(params.slug);

  if (!post) {
    return (
      <main className="min-h-screen bg-white">
        <Navbar />
        <div className="max-w-4xl mx-auto px-6 py-32 text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Post Not Found</h1>
          <p className="text-lg text-slate-600 mb-8">
            The blog post you're looking for doesn't exist.
          </p>
          <Link href="/blog" className="text-emerald-600 hover:text-emerald-700 font-semibold">
            <ArrowLeft className="w-4 h-4 mr-2 inline" />
            Back to Blog
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <div className="max-w-4xl mx-auto px-6 pt-24">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-slate-600 hover:text-emerald-600 mb-8 group font-medium"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Blog
        </Link>
      </div>

      <BlogPostClient post={post} />

      <div className="max-w-4xl mx-auto px-6">
        <div className="mt-16 pt-8 border-t border-slate-200 flex items-center justify-between gap-4">
          {previous ? (
            <Link
              href={`/blog/${previous.slug}`}
              className="flex-1 group bg-slate-50 hover:bg-slate-100 rounded-xl p-6 border border-slate-200 transition-colors"
            >
              <div className="flex items-center gap-2 text-sm text-slate-600 mb-2">
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                <span>Previous Post</span>
              </div>
              <p className="font-semibold text-slate-900 group-hover:text-emerald-600 transition-colors">
                {previous.title}
              </p>
            </Link>
          ) : (
            <div className="flex-1" />
          )}

          {next ? (
            <Link
              href={`/blog/${next.slug}`}
              className="flex-1 group bg-slate-50 hover:bg-slate-100 rounded-xl p-6 border border-slate-200 transition-colors text-right"
            >
              <div className="flex items-center justify-end gap-2 text-sm text-slate-600 mb-2">
                <span>Next Post</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
              <p className="font-semibold text-slate-900 group-hover:text-emerald-600 transition-colors">
                {next.title}
              </p>
            </Link>
          ) : (
            <div className="flex-1" />
          )}
        </div>

        <BlogComments postSlug={params.slug} />
      </div>

      <Footer />
    </main>
  );
}
