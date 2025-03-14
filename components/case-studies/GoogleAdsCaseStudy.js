import CaseStudiesHero from '@/components/case-studies/google-ads/CaseStudiesHero';
import ObjectivesSection from './google-ads/ObjectivesSection';
import ChallengesSection from './google-ads/ChallengesSection';
import KeyAchievements from './google-ads/KeyAchievements ';
import GallerySection from './google-ads/GallerySection';
import CampaignStrategySection from './google-ads/CampaignStrategySection';
import ClientOverview from './ClientOverview';

const GoogleAdsCaseStudy = () => {
  return (
    <section>
      {/* Title Section */}
      <CaseStudiesHero />

      {/* Case Study Content */}    
      <ClientOverview />
      <ObjectivesSection />
      <ChallengesSection />
      <CampaignStrategySection />
      <GallerySection />
      <KeyAchievements />  
    </section>
  );
};

export default GoogleAdsCaseStudy;
