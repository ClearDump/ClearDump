import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingContactButton from "@/components/layout/FloatingContactButton";
import BugSquasher from "@/components/ui/BugSquasher";
import Script from "next/script";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Trash Bin Cleaning Atlanta | Clear Dump – $150/mo Weekly Service",
    template: "%s | Clear Dump Atlanta",
  },
  description:
    "Professional trash & recycling bin cleaning in Atlanta. Eliminate odors, bacteria & pests. $150/mo weekly service. Book today! ☎ 678-558-4327",
  keywords: [
    "trash bin cleaning Atlanta",
    "garbage can cleaning service",
    "recycling bin cleaning Atlanta",
    "trash can sanitization",
    "bin cleaning near me",
    "Atlanta bin cleaning",
    "pest prevention trash bins",
    "Clear Dump Atlanta",
  ],
  authors: [{ name: "Clear Dump" }],
  creator: "StackMode Network LLC",
  publisher: "Clear Dump",
  metadataBase: new URL("https://cleardump.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://cleardump.com",
    siteName: "Clear Dump",
    title: "Trash Bin Cleaning Atlanta | Clear Dump – $150/mo Weekly Service",
    description:
      "Professional trash & recycling bin cleaning in Atlanta. Eliminate odors, bacteria & pests. Weekly service for just $150/mo.",
    images: [
      {
        url: "/images/clear-dump-atlanta-trash-bin-cleaning-logo.png",
        width: 1200,
        height: 630,
        alt: "Clear Dump – Atlanta Trash Bin Cleaning Service Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Trash Bin Cleaning Atlanta | Clear Dump",
    description:
      "Professional trash & recycling bin cleaning. Eliminate odors & pests. $150/mo. Book today!",
    images: ["/images/clear-dump-atlanta-trash-bin-cleaning-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://cleardump.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <head>
        {/* Facebook Pixel – replace YOUR_PIXEL_ID with actual ID */}
        <Script id="fb-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', 'YOUR_PIXEL_ID');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=YOUR_PIXEL_ID&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>

        {/* Calendly widget CSS */}
        <link
          href="https://assets.calendly.com/assets/external/widget.css"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col bg-cd-gray-50/30 text-cd-gray-900 selection:bg-cd-green selection:text-white">
        <BugSquasher />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingContactButton />

        {/* JSON-LD Schemas */}
        <Script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Clear Dump",
              description:
                "Professional trash and recycling bin cleaning service in Atlanta, GA. Weekly cleaning service to eliminate odors, bacteria, and pests.",
              url: "https://cleardump.com",
              telephone: "+1-678-558-4327",
              image:
                "https://cleardump.com/images/clear-dump-atlanta-trash-bin-cleaning-logo.png",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Atlanta",
                addressRegion: "GA",
                addressCountry: "US",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 33.749,
                longitude: -84.388,
              },
              areaServed: [
                { "@type": "City", name: "Atlanta" },
                { "@type": "City", name: "Buckhead" },
                { "@type": "City", name: "Sandy Springs" },
                { "@type": "City", name: "Dunwoody" },
                { "@type": "City", name: "Alpharetta" },
                { "@type": "City", name: "Roswell" },
                { "@type": "City", name: "Marietta" },
                { "@type": "City", name: "Decatur" },
                { "@type": "City", name: "Peachtree City" },
              ],
              priceRange: "$150/month",
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday"],
                  opens: "09:00",
                  closes: "20:00",
                },
              ],
              sameAs: [],
            }),
          }}
        />
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Clear Dump",
              url: "https://cleardump.com",
              logo: "https://cleardump.com/images/clear-dump-atlanta-trash-bin-cleaning-logo.png",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+1-678-558-4327",
                contactType: "customer service",
                areaServed: "US",
                availableLanguage: "English",
              },
              slogan: "Clean Trash. Clear Space.",
            }),
          }}
        />
        <Script
          id="faq-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "How much does trash bin cleaning cost in Atlanta?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Clear Dump offers weekly trash and recycling bin cleaning for $150/month. This includes both trash and recycling bins, pest prevention, and odor elimination with eco-friendly cleaning products.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What areas does Clear Dump serve in Atlanta?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "We serve the greater Atlanta metro area including Buckhead, Midtown, Sandy Springs, Dunwoody, Alpharetta, Johns Creek, Marietta, Roswell, Milton, Cumming, Decatur, Peachtree City, Fayetteville, and most areas within 30 minutes of Downtown Atlanta.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How often do you clean trash bins?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "We provide weekly cleaning service on your chosen day — Monday, Tuesday, or Wednesday — between 9:00 AM and 8:00 PM. We work around your schedule with early morning and evening slots available.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Does trash bin cleaning prevent pests and rodents?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes! Regular professional bin cleaning eliminates the food residue, bacteria, and odors that attract rats, raccoons, roaches, and other pests. Our cleaning kills 99.9% of bacteria and removes the scent trails that draw pests to your bins.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is your bin cleaning process eco-friendly?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Absolutely. Clear Dump uses eco-friendly, biodegradable cleaning solutions that are safe for your family, pets, and the environment while still eliminating 99.9% of bacteria and odors from your trash and recycling bins.",
                  },
                },
              ],
            }),
          }}
        />

      </body>
    </html>
  );
}
