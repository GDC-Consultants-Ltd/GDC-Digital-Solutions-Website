// pages/contact-us.js
import ContactUs from "@/components/ContactUs";

// Metadata Generation
export async function generateMetadata() {
  const siteUrl = 'https://gdcdigital.net';
  const pageUrl = `${siteUrl}/contact-us`;
  const imageUrl = `${siteUrl}/assets/images/contact-page.jpg`;
  const title = 'Contact GDC Digital Solutions - Digital Marketing Experts';
  const description = "Contact GDC Digital Solutions - New Zealand's digital marketing experts. Specialists in SEO, Google Ads & web development.";

  return {
    // Basic Meta Tags
    title,
    description,
    
    robots: 'index, follow',
    viewport: 'width=device-width, initial-scale=1',
    
    // Keywords and Author
    keywords: 'contact GDC Digital, digital marketing agency NZ, SEO services, Google Ads management, web development New Zealand, social media marketing, digital strategy consultation',
    author: 'GDC Digital Solutions',
    
    // Canonical URL
    alternates: {
      canonical: pageUrl,
    },
    
    // Open Graph
    openGraph: {
      title,
      description,
      url: pageUrl,
      siteName: 'GDC Digital Solutions',
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: 'Contact GDC Digital Solutions',
        },
      ],
      type: 'website',
    },
    
    // Twitter
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl],
    },
  };
}

// Main Component
export default function ContactUsPage() {
  return (
    <section className="relative bg-cover bg-center bg-no-repeat min-h-screen">
      <ContactUs />
    </section>
  );
}