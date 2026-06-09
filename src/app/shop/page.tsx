import { Metadata } from "next";
import Link from "next/link";
import { ShoppingBag, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Shop | Clear Dump Atlanta",
  description: "Clear Dump merch and eco-friendly products coming soon.",
};

export default function ShopPage() {
  return (
    <div className="min-h-screen pt-24 pb-20 bg-cd-gray-50 flex items-center justify-center">
      <div className="max-w-md mx-auto px-4 text-center">
        <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-sm border border-cd-gray-200">
          <ShoppingBag className="w-12 h-12 text-cd-gray-400" />
        </div>
        
        <h1 className="text-4xl font-black text-cd-gray-900 mb-4">
          Coming Soon
        </h1>
        
        <p className="text-lg text-cd-gray-600 mb-8">
          We're working on some fresh merchandise and eco-friendly home products. Check back later!
        </p>

        <Link 
          href="/"
          className="inline-flex items-center justify-center gap-2 text-cd-green hover:text-cd-green-dark font-semibold transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Home
        </Link>
      </div>
    </div>
  );
}
