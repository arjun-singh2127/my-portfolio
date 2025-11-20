import { notFound } from 'next/navigation';
import { getProjectBlog } from '@/data/blogPosts';
import BlogPostList from '@/components/BlogPostList';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

interface PageProps {
  params: {
    slug: string;
  };
}

export default function ProjectBlogPage({ params }: PageProps) {
  const projectBlog = getProjectBlog(params.slug);

  if (!projectBlog) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-emerald-50/80 dark:bg-emerald-950/40">
      <Navigation />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 pt-24">
        <Link
          href="/#projects"
          className="inline-flex items-center text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 mb-6 sm:mb-8 transition-colors"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M15 19l-7-7 7-7" />
          </svg>
          Back to Projects
        </Link>

        <div className="mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {projectBlog.title}
          </h1>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300">
            {projectBlog.description}
          </p>
        </div>

        <div className="space-y-6 sm:space-y-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 dark:text-white mb-6">
            Project Updates
          </h2>
          <BlogPostList posts={projectBlog.posts} />
        </div>
      </div>
      <Footer />
    </main>
  );
}