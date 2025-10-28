"use client";

import { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { MessageCircle, Send } from 'lucide-react';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

interface Comment {
  id: string;
  post_slug: string;
  author_name: string;
  content: string;
  created_at: string;
  parent_id: string | null;
}

interface BlogCommentsProps {
  postSlug: string;
}

export function BlogComments({ postSlug }: BlogCommentsProps) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [authorName, setAuthorName] = useState('');
  const [authorEmail, setAuthorEmail] = useState('');
  const [content, setContent] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    fetchComments();
  }, [postSlug]);

  async function fetchComments() {
    try {
      const { data, error } = await supabase
        .from('blog_comments')
        .select('*')
        .eq('post_slug', postSlug)
        .eq('is_approved', true)
        .order('created_at', { ascending: true });

      if (error) throw error;
      setComments(data || []);
    } catch (error) {
      console.error('Error fetching comments:', error);
    } finally {
      setLoading(false);
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);

    try {
      const { error } = await supabase.from('blog_comments').insert({
        post_slug: postSlug,
        author_name: authorName,
        author_email: authorEmail,
        content,
      });

      if (error) throw error;

      setSubmitted(true);
      setAuthorName('');
      setAuthorEmail('');
      setContent('');

      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      console.error('Error submitting comment:', error);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="mt-16 pt-16 border-t border-slate-200 mb-16">
      <div className="flex items-center gap-3 mb-8">
        <MessageCircle className="w-6 h-6 text-blue-600" />
        <h2 className="text-3xl font-bold text-slate-900">
          Comments ({comments.length})
        </h2>
      </div>

      {loading ? (
        <p className="text-slate-600">Loading comments...</p>
      ) : (
        <>
          {comments.length > 0 ? (
            <div className="space-y-6 mb-12">
              {comments.map((comment) => (
                <div
                  key={comment.id}
                  className="bg-slate-50 rounded-xl p-6 border border-slate-200"
                >
                  <div className="flex items-center justify-between mb-3">
                    <p className="font-semibold text-slate-900">{comment.author_name}</p>
                    <time className="text-sm text-slate-500">
                      {new Date(comment.created_at).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                      })}
                    </time>
                  </div>
                  <p className="text-slate-700 leading-relaxed">{comment.content}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-slate-600 mb-12">
              No comments yet. Be the first to share your thoughts!
            </p>
          )}

          <div className="bg-white rounded-2xl border-2 border-slate-200 p-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">
              Leave a Comment
            </h3>

            {submitted ? (
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 text-center">
                <p className="text-blue-800 font-semibold mb-2">
                  Thank you for your comment!
                </p>
                <p className="text-blue-700">
                  Your comment has been submitted and will appear after moderation.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-slate-900 mb-2">
                      Name *
                    </label>
                    <Input
                      id="name"
                      type="text"
                      required
                      value={authorName}
                      onChange={(e) => setAuthorName(e.target.value)}
                      placeholder="Your name"
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-slate-900 mb-2">
                      Email *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={authorEmail}
                      onChange={(e) => setAuthorEmail(e.target.value)}
                      placeholder="your@email.com"
                      className="w-full"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="comment" className="block text-sm font-semibold text-slate-900 mb-2">
                    Comment *
                  </label>
                  <Textarea
                    id="comment"
                    required
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="Share your thoughts..."
                    className="w-full min-h-32"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={submitting}
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                >
                  {submitting ? (
                    'Submitting...'
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Submit Comment
                    </>
                  )}
                </Button>

                <p className="text-sm text-slate-500">
                  Your email will not be published. All comments are moderated before appearing.
                </p>
              </form>
            )}
          </div>
        </>
      )}
    </div>
  );
}
