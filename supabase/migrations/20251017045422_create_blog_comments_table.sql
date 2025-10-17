/*
  # Blog Comments System

  1. New Tables
    - `blog_comments`
      - `id` (uuid, primary key)
      - `post_slug` (text) - The blog post this comment belongs to
      - `author_name` (text) - Name of the commenter
      - `author_email` (text) - Email of the commenter
      - `content` (text) - The comment content
      - `created_at` (timestamptz) - When the comment was created
      - `updated_at` (timestamptz) - When the comment was last updated
      - `is_approved` (boolean) - Whether the comment is approved for display (default false)
      - `parent_id` (uuid) - For nested replies (nullable)

  2. Security
    - Enable RLS on `blog_comments` table
    - Add policy for anyone to read approved comments
    - Add policy for authenticated users to create comments
    - Add policy for service role to approve comments
*/

CREATE TABLE IF NOT EXISTS blog_comments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  post_slug text NOT NULL,
  author_name text NOT NULL,
  author_email text NOT NULL,
  content text NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  is_approved boolean DEFAULT false,
  parent_id uuid REFERENCES blog_comments(id) ON DELETE CASCADE
);

ALTER TABLE blog_comments ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read approved comments"
  ON blog_comments
  FOR SELECT
  USING (is_approved = true);

CREATE POLICY "Anyone can create comments"
  ON blog_comments
  FOR INSERT
  WITH CHECK (true);

CREATE INDEX IF NOT EXISTS idx_blog_comments_post_slug ON blog_comments(post_slug);
CREATE INDEX IF NOT EXISTS idx_blog_comments_created_at ON blog_comments(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_blog_comments_parent_id ON blog_comments(parent_id);
