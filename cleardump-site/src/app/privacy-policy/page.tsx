import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Clear Dump Atlanta",
};

export default function PrivacyPage() {
  return (
    <div className="pt-24 pb-20 bg-white min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg prose-green">
        <h1 className="text-3xl font-bold text-cd-gray-900 mb-8">Privacy Policy</h1>
        <p className="text-cd-gray-500 mb-8">Last updated: {new Date().toLocaleDateString()}</p>
        
        <div className="space-y-6 text-cd-gray-700">
          <section>
            <h2 className="text-xl font-semibold text-cd-gray-900 mb-3">1. Information We Collect</h2>
            <p>We collect information you provide directly to us, such as when you request a quote, book a service, or contact us. This may include your name, email address, phone number, and physical address.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-cd-gray-900 mb-3">2. How We Use Your Information</h2>
            <p>We use the information we collect to provide, maintain, and improve our services, process payments, and communicate with you about your account and our services.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-cd-gray-900 mb-3">3. Tracking and Analytics</h2>
            <p>We use Facebook Pixel and other analytics tools to understand how users interact with our website and to deliver targeted advertisements. You can opt out of targeted advertising through your browser settings or ad network platforms.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-cd-gray-900 mb-3">4. Information Sharing</h2>
            <p>We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties except to trusted third parties who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
