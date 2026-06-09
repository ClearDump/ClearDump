import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy | Clear Dump Atlanta",
};

export default function CookiePage() {
  return (
    <div className="pt-24 pb-20 bg-white min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg prose-green">
        <h1 className="text-3xl font-bold text-cd-gray-900 mb-8">Cookie Policy</h1>
        <p className="text-cd-gray-500 mb-8">Last updated: {new Date().toLocaleDateString()}</p>
        
        <div className="space-y-6 text-cd-gray-700">
          <section>
            <h2 className="text-xl font-semibold text-cd-gray-900 mb-3">What Are Cookies</h2>
            <p>Cookies are small pieces of text sent to your web browser by a website you visit. A cookie file is stored in your web browser and allows the Service or a third party to recognize you and make your next visit easier and the Service more useful to you.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-cd-gray-900 mb-3">How Clear Dump Uses Cookies</h2>
            <p>When you use and access our website, we may place a number of cookies files in your web browser. We use cookies for the following purposes:</p>
            <ul className="list-disc pl-5 mt-2 space-y-2">
              <li>To enable certain functions of the website</li>
              <li>To provide analytics (e.g., Google Analytics)</li>
              <li>To store your preferences</li>
              <li>To enable advertisement delivery, including behavioral advertising (e.g., Facebook Pixel)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-cd-gray-900 mb-3">Third-Party Cookies</h2>
            <p>In addition to our own cookies, we may also use various third-party cookies to report usage statistics of the website and deliver advertisements on and through the website.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-cd-gray-900 mb-3">What Are Your Choices Regarding Cookies</h2>
            <p>If you'd like to delete cookies or instruct your web browser to delete or refuse cookies, please visit the help pages of your web browser. Please note, however, that if you delete cookies or refuse to accept them, you might not be able to use all of the features we offer.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
