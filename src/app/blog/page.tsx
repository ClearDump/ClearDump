import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock, Calendar } from "lucide-react";
import { blogPosts } from "@/data/blog";

export const metadata: Metadata = {
  title: "Blog & Tips | Clear Dump Atlanta – Trash Bin Cleaning",
  description: "Expert tips on pest prevention, sanitation, and the benefits of professional trash bin cleaning in Atlanta. Learn how to keep your home safe and odor-free.",
  keywords: [
    "trash bin cleaning tips Atlanta",
    "garbage can sanitation advice",
    "pest prevention trash bins",
    "Atlanta bin cleaning blog",
    "recycling bin cleaning guide",
    "how to clean trash bins",
  ],
  alternates: {
    canonical: "https://cleardump.com/blog",
  },
  openGraph: {
    title: "Blog & Tips | Clear Dump Atlanta – Trash Bin Cleaning",
    description: "Expert tips on pest prevention, sanitation, and professional trash bin cleaning in Atlanta.",
    type: "website",
    url: "https://cleardump.com/blog",
    siteName: "Clear Dump",
    locale: "en_US",
    images: [
      {
        url: "/images/colorful-recycling-bins-atlanta-cleaning-service.png",
        width: 1200,
        height: 630,
        alt: "Colorful recycling bins – Clear Dump Atlanta trash bin cleaning service blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog & Tips | Clear Dump Atlanta",
    description: "Expert advice on pest prevention, sanitation & professional bin cleaning in Atlanta.",
    images: [{ url: "/images/colorful-recycling-bins-atlanta-cleaning-service.png", alt: "Colorful recycling bins – Clear Dump Atlanta cleaning service blog" }],
  },
};

export default function BlogListingPage() {
  return (
    <div className="pt-24 pb-20 bg-cd-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-cd-green font-semibold text-sm uppercase tracking-wider">
            Clear Dump Blog
          </span>
          <h1 className="mt-3 text-4xl sm:text-5xl font-bold text-cd-gray-900">
            Sanitation &amp; Pest Tips
          </h1>
          <p className="mt-4 text-lg text-cd-gray-600 max-w-2xl mx-auto">
            Expert advice on keeping your home clean, safe, and pest-free starting from the curb.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article 
              key={post.slug} 
              className="bg-white rounded-3xl shadow-sm border border-cd-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col"
            >
              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-center gap-3 text-xs text-cd-gray-500 mb-4 font-medium">
                  <span className="bg-cd-green-light text-cd-green px-2.5 py-1 rounded-md uppercase tracking-wider">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {post.date}
                  </span>
                </div>
                
                <h2 className="text-xl font-bold text-cd-gray-900 mb-3 line-clamp-2 leading-snug">
                  <Link href={`/blog/${post.slug}`} className="hover:text-cd-green transition-colors">
                    {post.title}
                  </Link>
                </h2>
                
                <p className="text-cd-gray-600 mb-6 line-clamp-3 leading-relaxed flex-1">
                  {post.description}
                </p>
                
                <div className="flex items-center justify-between mt-auto pt-6 border-t border-cd-gray-100">
                  <span className="flex items-center gap-1.5 text-sm text-cd-gray-500 font-medium">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </span>
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="text-cd-green hover:text-cd-green-dark font-semibold text-sm flex items-center gap-1 group"
                  >
                    Read More 
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
