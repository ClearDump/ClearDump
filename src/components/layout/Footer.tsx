import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";

const serviceAreas = [
  "Atlanta", "Buckhead", "Sandy Springs", "Dunwoody", "Alpharetta",
  "Johns Creek", "Marietta", "Roswell", "Decatur", "Peachtree City",
];

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Book a Cleaning", href: "/book" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
  { label: "Shop", href: "/shop" },
];

const legalLinks = [
  { label: "Terms of Service", href: "/terms-of-service" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Cookie Policy", href: "/cookie-policy" },
];

export default function Footer() {
  return (
    <footer className="bg-cd-gray-900 text-white">
      {/* Main Footer */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Image
                src="/images/clear-dump-atlanta-trash-bin-cleaning-logo.png"
                alt="Clear Dump – Professional Trash Bin Cleaning Service Atlanta GA Logo"
                width={40}
                height={40}
                className="w-10 h-10 object-contain"
              />
              <span className="font-bold text-lg">
                Clear<span className="text-cd-green">Dump</span>
              </span>
            </Link>
            <p className="text-cd-gray-400 text-sm leading-relaxed mb-4">
              Professional trash &amp; recycling bin cleaning for Atlanta homes.
              Clean trash. Clear space. Pest-free living.
            </p>
            <div className="space-y-2">
              <a
                href="tel:6785584327"
                className="flex items-center gap-2 text-sm text-cd-gray-300 hover:text-cd-green transition-colors"
              >
                <Phone className="w-4 h-4 shrink-0" />
                678-558-4327
              </a>
              <a
                href="mailto:cleardump@proton.me"
                className="flex items-center gap-2 text-sm text-cd-gray-300 hover:text-cd-green transition-colors"
              >
                <Mail className="w-4 h-4 shrink-0" />
                cleardump@proton.me
              </a>
              <div className="flex items-start gap-2 text-sm text-cd-gray-300">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                Greater Atlanta, GA
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-cd-gray-400 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-cd-gray-300 hover:text-cd-green transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-cd-gray-400 mb-4">
              Service Areas
            </h3>
            <ul className="space-y-1.5">
              {serviceAreas.map((area) => (
                <li key={area} className="text-sm text-cd-gray-300">
                  {area}, GA
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-cd-gray-400 mb-4">
              Legal
            </h3>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-cd-gray-300 hover:text-cd-green transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-cd-gray-800">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-cd-gray-500">
          <p>&copy; {new Date().getFullYear()} Clear Dump. All rights reserved.</p>
          <p>
            Created by{" "}
            <a
              href="https://stackmode.net"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cd-green hover:text-cd-green-dark transition-colors font-medium"
            >
              stackmode.net
            </a>{" "}
            &mdash; StackMode Network LLC
          </p>
        </div>
      </div>
    </footer>
  );
}
