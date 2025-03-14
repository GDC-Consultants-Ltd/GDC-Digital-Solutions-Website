import React from 'react';
import ScheduleConsultation from '@/components/booking/ScheduleConsultation';

export const generateMetadata = async () => {
  return {
    title: 'Consultation Booking | GDC Digital - Web & Ads Services',
    description: "Book a free consultation with GDC Digital Solutions. Expert digital marketing strategies in SEO & Google Ads.",
    keywords: 'digital marketing consultation, GDC Digital Solutions, web design consultation, Google Ads strategy, SEO consultation, digital marketing experts',
    openGraph: {
      title: 'Schedule a Consultation | GDC Digital Solutions',
      description: 'Book your free digital marketing consultation with our experts.',
      type: 'website',
      url: 'https://gdcdigital.net/schedule-consultation',
      siteName: 'GDC Digital Solutions',
      locale: 'en_NZ',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: 'https://gdcdigital.net/schedule-consultation',
    },
  };
};

const ConsultationPageClient = () => {
  return (
    <ScheduleConsultation />
  );
};

export default ConsultationPageClient;