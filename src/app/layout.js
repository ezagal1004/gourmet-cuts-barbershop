import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";

// Fonts
const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: 'swap',
});

// Enhanced Metadata for SEO & sharing
export const metadata = {
  title: "Gourmet Cuts Barbershop | Professional Haircuts & Beard Trims | Torrance, CA",
  description:
    "Expert haircuts, beard trims, and grooming services in Torrance, CA since 2020. Book online for professional barbering with attention to detail. Located at 4626 Del Amo Blvd.",
  keywords: "barbershop Torrance, haircut Torrance CA, beard trim, men's grooming, professional barber, Del Amo Boulevard, Gourmet Cuts",
  viewport: "width=device-width, initial-scale=1, viewport-fit=cover",
  robots: "index, follow",
  
  // Open Graph for social sharing
  openGraph: {
    title: "Gourmet Cuts Barbershop | Professional Haircuts | Torrance, CA",
    description:
      "Expert haircuts and beard trims in Torrance, CA since 2020. Book your appointment online for professional grooming with attention to detail.",
    siteName: "Gourmet Cuts Barbershop",
    images: [
      {
        url: "/og-image.jpg", // You'll add this image
        width: 1200,
        height: 630,
        alt: "Gourmet Cuts Barbershop - Professional Haircuts in Torrance, CA",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  
  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Gourmet Cuts Barbershop | Torrance, CA",
    description: "Expert haircuts and beard trims in Torrance, CA. Book online today!",
    images: ["/og-image.jpg"],
  },
};

// Layout with basic structured data
export default function RootLayout({ children }) {
  // Simple Local Business Structured Data
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "HairSalon",
    "name": "Gourmet Cuts Barbershop",
    "description": "Professional barbershop in Torrance, CA offering expert haircuts, beard trimming, and grooming services since 2020.",
    "telephone": "+1-310-504-0691",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "4626 Del Amo Blvd",
      "addressLocality": "Torrance",
      "addressRegion": "CA",
      "postalCode": "90503",
      "addressCountry": "US"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Tuesday", "Wednesday", "Thursday"],
        "opens": "12:00",
        "closes": "19:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Friday",
        "opens": "11:00",
        "closes": "19:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "10:00",
        "closes": "16:00"
      }
    ],
    "priceRange": "$$",
    "sameAs": [
      "https://www.instagram.com/gourmetcuts/"
    ]
  };

  return (
    <html lang="en">
      <head>
        {/* Structured Data for Google */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        
        {/* Favicon - Standard */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        
        {/* Apple Touch Icons for iPhone/iPad */}
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        
        {/* Web App Manifest */}
        <link rel="manifest" href="/manifest.json" />
        
        {/* iOS Safari specific meta tags */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Gourmet Cuts" />
        
        {/* Theme colors for different browsers */}
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
        
        {/* iOS Safari status bar and notch handling */}
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover, user-scalable=no" />
        
        {/* Disable automatic phone number detection */}
        <meta name="format-detection" content="telephone=no" />
        
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}