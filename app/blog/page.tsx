import { getAllPosts } from '@/lib/blog';
import Link from 'next/link';
import { Calendar, Clock, Tag, ArrowRight } from 'lucide-react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { BlogPageClient } from './blog-client';

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <div className="pt-24 pb-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMxMGI5ODEiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDE2YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00em0wIDQwYzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00ek0xNiAzNmMtMi4yMSAwLTQtMS43OS00LTRzMS43OS00IDQtNCA0IDEuNzkgNCA0LTEuNzkgNC00IDR6bTQwIDBjLTIuMjEgMC00LTEuNzktNC00czEuNzktNCA0LTQgNCAxLjc5IDQgNC0xLjc5IDQtNCA0eiIvPjwvZz48L2c+PC9zdmc+')] opacity-40"></div>
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="inline-block mb-6">
            <div className="bg-blue-50 text-blue-700 text-sm font-medium px-4 py-2 rounded-full border border-blue-200">
              Security Insights & Best Practices
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
            ShipSecAI Blog
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl">
            Learn about security automation, workflow best practices, and the latest updates from the ShipSecAI team.
          </p>
        </div>
      </div>

      <BlogPageClient posts={posts} />

      <Footer />
    </main>
  );
}
