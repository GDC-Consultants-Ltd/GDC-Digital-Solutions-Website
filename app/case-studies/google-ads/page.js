import GoogleAdsCaseStudyCard from '@/components/case-studies/GoogleAdsCaseStudy';

export const generateMetadata = async () => {
  // Base metadata
  const metadata = {
    title: "Google Ads Case Studies | Proven Campaign Success by GDC Digital Solutions",
    description: "Explore GDC Digital Solutions' Google Ads case studies. See how we drive ROI, boost visibility, and deliver targeted campaigns for businesses in New Zealand.",
    keywords: "Google Ads case studies, PPC success stories, digital marketing ROI, Google Ads agency NZ, paid advertising case studies, Google Ads campaigns, New Zealand digital marketing",
    robots: "index, follow",
    viewport: "width=device-width, initial-scale=1",
    authors: [{ name: "GDC Digital Solutions" }],
    
    // Open Graph
    openGraph: {
      title: "Google Ads Case Studies | Proven Campaign Success by GDC Digital Solutions",
      description: "Explore GDC Digital Solutions' Google Ads case studies. See how we drive ROI, boost visibility, and deliver targeted campaigns for businesses in New Zealand.",
      type: "article",
      url: "https://gdcdigital.net/case-studies/google-ads",
      images: [
        {
          url: "https://gdcdigital.net/assets/images/google-ads-case-study.jpg",
          width: 1200,
          height: 630,
          alt: "Google Ads Case Study",
        },
      ],
    },
    
    // Twitter
    twitter: {
      card: "summary_large_image",
      title: "Google Ads Case Studies | Proven Campaign Success by GDC Digital Solutions",
      description: "Explore GDC Digital Solutions' Google Ads case studies. See how we drive ROI, boost visibility, and deliver targeted campaigns for businesses in New Zealand.",
      images: ["https://gdcdigital.net/assets/images/google-ads-case-study.jpg"],
    },
    
    // Canonical URL
    alternates: {
      canonical: "https://gdcdigital.net/case-studies/google-ads",
    },
  };

  // Article structured data
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Google Ads Case Studies | Proven Campaign Success",
    "publisher": {
      "@type": "Organization",
      "name": "GDC Digital Solutions",
      "url": "https://gdcdigital.net"
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://gdcdigital.net/case-studies/google-ads"
    },
    "description": "Explore GDC Digital Solutions' Google Ads case studies. See how we drive ROI, boost visibility, and deliver targeted campaigns for businesses in New Zealand.",
    "author": {
      "@type": "Organization",
      "name": "GDC Digital Solutions"
    },
    "image": "https://gdcdigital.net/assets/images/google-ads-case-study.jpg",
    "datePublished": "2024-01-01", // Update with actual publication date
    "dateModified": "2024-04-21", // Update with actual modification date
    "articleSection": "Case Studies",
    "articleBody": "Website traffic increased from August to September after the implementation of Google Ads, showcasing a significant improvement in online visibility and engagement."
  };

  return {
    ...metadata,
    other: {
      'script:ld+json': [
        JSON.stringify(articleSchema)
      ]
    }
  };
};

export default function GoogleAdsCaseStudyPage() {
  return (
    <div>
      <GoogleAdsCaseStudyCard />
    </div>
  );
}