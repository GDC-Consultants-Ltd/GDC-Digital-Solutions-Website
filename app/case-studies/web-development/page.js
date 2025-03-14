// pages/case-studies/web-development.js
import WebsiteDevelopmentCaseStudy from '@/components/case-studies/WebsiteDevelopmentCaseStudy';

// Metadata Generation
export async function generateMetadata() {
  // you can make this dynamic by fetching data
  const siteUrl = 'https://gdcdigital.net';
  const pageUrl = `${siteUrl}/case-studies/web-development`;
  const imageUrl = `${siteUrl}/assets/images/web-development-case-study.jpg`;
  
  return {
    title: 'Web Development Case Studies | GDC Digital Solutions',
    description: 'Explore our web development case studies at GDC Digital Solutions. See how our custom websites boost traffic, improve user experience, and drive business growth.',
    
    // Basic Meta Tags
    robots: 'index, follow',
    viewport: 'width=device-width, initial-scale=1',
    
    // Keywords and Author
    keywords: 'web development case studies, custom website development, web design portfolio, NZ web developers, website case studies, user experience design, business websites, web development projects, New Zealand web development',
    author: 'GDC Digital Solutions',
    
    // Canonical URL
    alternates: {
      canonical: pageUrl,
    },
    
    // Open Graph
    openGraph: {
      title: 'Web Development Case Studies | GDC Digital Solutions',
      description: 'Explore our web development case studies at GDC Digital Solutions. See how our custom websites boost traffic, improve user experience, and drive business growth.',
      url: pageUrl,
      siteName: 'GDC Digital Solutions',
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: 'Web Development Case Studies',
        },
      ],
      type: 'article',
    },
    
    // Twitter
    twitter: {
      card: 'summary_large_image',
      title: 'Web Development Case Studies | GDC Digital Solutions',
      description: 'Explore our web development case studies at GDC Digital Solutions. See how our custom websites boost traffic, improve user experience, and drive business growth.',
      images: [imageUrl],
    },
    
    // JSON-LD structured data
    other: {
      'application/ld+json': JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Web Development Case Studies | GDC Digital Solutions',
        description: 'Explore our web development case studies at GDC Digital Solutions. See how our custom websites boost traffic, improve user experience, and drive business growth.',
        publisher: {
          '@type': 'Organization',
          name: 'GDC Digital Solutions',
          url: siteUrl,
        },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': pageUrl,
        },
        articleSection: 'Case Studies',
        articleBody: 'Web development portfolio showcasing custom website development projects and their business impact.',
        about: {
          '@type': 'Service',
          name: 'Web Development',
          provider: {
            '@type': 'Organization',
            name: 'GDC Digital Solutions',
          },
        },
      }),
    },
  };
}

// Main Component
export default function WebDevelopmentCaseStudyPage() {
  return (
    <main>
      <WebsiteDevelopmentCaseStudy />
    </main>
  );
}