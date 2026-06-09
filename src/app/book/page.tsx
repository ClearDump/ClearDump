import { Metadata } from "next";
import CalendlyEmbed from "@/components/booking/CalendlyEmbed";

export const metadata: Metadata = {
  title: "Book a Cleaning | Clear Dump Atlanta",
  description: "Schedule your professional trash bin cleaning service in Atlanta today. Choose your day and get started for just $150/month.",
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
