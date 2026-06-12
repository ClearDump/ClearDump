import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Clock, Calendar, ChevronRight } from "lucide-react";
import { blogPosts, getPostBySlug } from "@/data/blog";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  
  if (!post) {
    return { title: "Post Not Found" };
  }

  const ogImage = post.ogImage ?? "/images/clear-dump-atlanta-trash-bin-cleaning-logo.png";
  const ogImageAlt = post.ogImageAlt ?? `${post.title} | Clear Dump Atlanta`;

  return {
    title: `${post.title} | Clear Dump Blog`,
    description: post.description,
    keywords: post.keywords ?? [
      "trash bin cleaning Atlanta",
      "garbage can cleaning service",
      "Clear Dump Atlanta",
    ],
    alternates: {
      canonical: `https://cleardump.com/blog/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      url: `https://cleardump.com/blog/${slug}`,
      siteName: "Clear Dump",
      locale: "en_US",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: ogImageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [{ url: ogImage, alt: ogImageAlt }],
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="pt-24 pb-20 bg-white min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-sm text-cd-gray-500 font-medium mb-8">
          <Link href="/" className="hover:text-cd-green transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <Link href="/blog" className="hover:text-cd-green transition-colors">Blog</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-cd-gray-900 truncate max-w-[200px] sm:max-w-none">{post.title}</span>
        </nav>

        {/* Header */}
        <header className="mb-10">
          <div className="flex flex-wrap items-center gap-4 text-sm text-cd-gray-500 font-medium mb-6">
            <span className="bg-cd-green-light text-cd-green px-3 py-1 rounded-md uppercase tracking-wider">
              {post.category}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              {post.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-cd-gray-900 leading-tight mb-6">
            {post.title}
          </h1>
          <p className="text-xl text-cd-gray-600 leading-relaxed">
            {post.description}
          </p>
        </header>

        {/* Content */}
        <div 
          className="prose prose-lg prose-green max-w-none prose-headings:text-cd-gray-900 prose-p:text-cd-gray-700 prose-a:text-cd-green hover:prose-a:text-cd-green-dark"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Footer CTA */}
        <div className="mt-16 bg-cd-gray-50 rounded-3xl p-8 sm:p-10 border border-cd-gray-200 text-center">
          <h3 className="text-2xl font-bold text-cd-gray-900 mb-4">Don&apos;t wait for pests to find your bins.</h3>
          <p className="text-cd-gray-600 mb-8 max-w-lg mx-auto">
            Get professional, weekly trash bin cleaning for just $150/mo. Keep your home safe, clean, and odor-free.
          </p>
          <Link 
            href="/book"
            className="inline-flex items-center justify-center gap-2 bg-cd-green hover:bg-cd-green-dark text-white font-bold text-lg px-8 py-4 rounded-full transition-all shadow-lg active:scale-95 group"
          >
            Book Your Cleaning
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Back Link */}
        <div className="mt-12 text-center">
          <Link 
            href="/blog"
            className="inline-flex items-center justify-center gap-2 text-cd-gray-500 hover:text-cd-green font-medium transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to all articles
          </Link>
        </div>
      </div>
    </div>
  );
}
