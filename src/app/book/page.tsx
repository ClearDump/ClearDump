import { Metadata } from "next";
import CalendlyEmbed from "@/components/booking/CalendlyEmbed";

export const metadata: Metadata = {
  title: "Book a Cleaning | Clear Dump Atlanta – $150/mo Weekly Service",
  description: "Schedule your professional trash bin cleaning service in Atlanta today. Choose your preferred day and get started for just $150/month. Fast, easy online booking.",
  keywords: [
    "book trash bin cleaning Atlanta",
    "schedule bin cleaning Atlanta",
    "trash can cleaning appointment",
    "Clear Dump booking",
    "Atlanta garbage can cleaning signup",
  ],
  alternates: {
    canonical: "https://cleardump.com/book",
  },
  openGraph: {
    title: "Book a Cleaning | Clear Dump Atlanta",
    description: "Schedule your weekly professional trash bin cleaning in Atlanta. Just $150/month. Easy online booking.",
    type: "website",
    url: "https://cleardump.com/book",
    siteName: "Clear Dump",
    locale: "en_US",
    images: [
      {
        url: "/images/clear-dump-atlanta-trash-bin-cleaning-logo.png",
        width: 1200,
        height: 630,
        alt: "Clear Dump Atlanta – Book your professional trash bin cleaning service online",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Book a Cleaning | Clear Dump Atlanta",
    description: "Schedule your weekly trash bin cleaning in Atlanta. $150/mo. Book online now!",
    images: [{ url: "/images/clear-dump-atlanta-trash-bin-cleaning-logo.png", alt: "Clear Dump Atlanta – book trash bin cleaning online" }],
  },
};

export default function BookPage() {
  return (
    <div className="pt-24 pb-12 bg-cd-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-cd-gray-900 mb-4">
            Schedule Your First Cleaning
          </h1>
          <p className="text-lg text-cd-gray-600">
            Select a day below to start your weekly $150/month service.
          </p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-sm border border-cd-gray-200 overflow-hidden">
          <CalendlyEmbed />
        </div>
      </div>
    </div>
  );
}
