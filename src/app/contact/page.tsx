import { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | Clear Dump Atlanta",
  description: "Get in touch with Clear Dump. Call us at 678-558-4327 or email cleardump@proton.me for professional trash bin cleaning in Atlanta.",
};

export default function ContactPage() {
  return (
    <div className="pt-24 pb-20 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-cd-green font-semibold text-sm uppercase tracking-wider">
            We're Here to Help
          </span>
          <h1 className="mt-3 text-4xl sm:text-5xl font-bold text-cd-gray-900">
            Contact Clear Dump
          </h1>
          <p className="mt-4 text-lg text-cd-gray-600 max-w-2xl mx-auto">
            Have a question about our service area? Need a custom quote? Reach out to us directly.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-cd-gray-900 mb-6">Get In Touch</h2>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-cd-green-light flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6 text-cd-green" />
              </div>
              <div>
                <h3 className="font-semibold text-cd-gray-900 mb-1">Phone (Call or Text)</h3>
                <a href="tel:6785584327" className="text-lg text-cd-gray-600 hover:text-cd-green transition-colors">
                  678-558-4327
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-cd-green-light flex items-center justify-center shrink-0">
                <Mail className="w-6 h-6 text-cd-green" />
              </div>
              <div>
                <h3 className="font-semibold text-cd-gray-900 mb-1">Email</h3>
                <a href="mailto:cleardump@proton.me" className="text-lg text-cd-gray-600 hover:text-cd-green transition-colors">
                  cleardump@proton.me
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-cd-green-light flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-cd-green" />
              </div>
              <div>
                <h3 className="font-semibold text-cd-gray-900 mb-1">Service Area</h3>
                <p className="text-lg text-cd-gray-600">
                  Greater Atlanta Metro Area
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-cd-green-light flex items-center justify-center shrink-0">
                <Clock className="w-6 h-6 text-cd-green" />
              </div>
              <div>
                <h3 className="font-semibold text-cd-gray-900 mb-1">Business Hours</h3>
                <p className="text-lg text-cd-gray-600">
                  Mon-Wed: 9:00 AM – 8:00 PM<br/>
                  Thu-Sun: Closed
                </p>
              </div>
            </div>
          </div>

          {/* Simple Contact Form */}
          <div className="bg-cd-gray-50 p-8 rounded-3xl border border-cd-gray-200 shadow-sm">
            <h2 className="text-2xl font-bold text-cd-gray-900 mb-6">Send a Message</h2>
            <form className="space-y-4" action="#" method="POST">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-cd-gray-700 mb-1">Name</label>
                <input type="text" id="name" className="w-full px-4 py-3 rounded-xl border border-cd-gray-300 focus:ring-2 focus:ring-cd-green focus:border-cd-green outline-none transition-all" placeholder="John Doe" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-cd-gray-700 mb-1">Email</label>
                <input type="email" id="email" className="w-full px-4 py-3 rounded-xl border border-cd-gray-300 focus:ring-2 focus:ring-cd-green focus:border-cd-green outline-none transition-all" placeholder="john@example.com" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-cd-gray-700 mb-1">Message</label>
                <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-xl border border-cd-gray-300 focus:ring-2 focus:ring-cd-green focus:border-cd-green outline-none transition-all resize-none" placeholder="How can we help?"></textarea>
              </div>
              <button type="submit" className="w-full bg-cd-green hover:bg-cd-green-dark text-white font-bold py-4 rounded-xl transition-colors mt-4">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
