import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Clear Dump Atlanta",
};

export default function TermsPage() {
  return (
    <div className="pt-24 pb-20 bg-white min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg prose-green">
        <h1 className="text-3xl font-bold text-cd-gray-900 mb-8">Terms of Service</h1>
        <p className="text-cd-gray-500 mb-8">Last updated: {new Date().toLocaleDateString()}</p>
        
        <div className="space-y-6 text-cd-gray-700">
          <section>
            <h2 className="text-xl font-semibold text-cd-gray-900 mb-3">1. Agreement to Terms</h2>
            <p>By accessing or using Clear Dump's services, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access the service.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-cd-gray-900 mb-3">2. Service Description</h2>
            <p>Clear Dump provides weekly trash and recycling bin cleaning, sanitization, and deodorization services for residential properties in the Greater Atlanta area.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-cd-gray-900 mb-3">3. Pricing and Payment</h2>
            <p>Our weekly service is billed at a flat rate of $150 per month. Payment is required to initiate service. Subscriptions auto-renew monthly unless cancelled.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-cd-gray-900 mb-3">4. Cancellation Policy</h2>
            <p>You may cancel your subscription at any time. There are no long-term contracts. Cancellations must be made at least 48 hours before your next scheduled cleaning to avoid being charged for that month.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-cd-gray-900 mb-3">5. Customer Responsibilities</h2>
            <p>Customers are responsible for ensuring bins are empty and accessible on their scheduled cleaning day. If bins are full or inaccessible, we may not be able to perform the service, and no refunds will be issued for that visit.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
