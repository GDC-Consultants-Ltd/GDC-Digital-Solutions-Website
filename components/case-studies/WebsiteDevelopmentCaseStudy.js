import CaseStudiesHero from './web-development/CaseStudiesHero';
import ChallengesSection from './web-development/ChallengesSection';
import ClientOverview from './ClientOverview';
import OurApproachSection from './web-development/OurApproachSection';
import KeyAchievements from './web-development/KeyAchievements';
import GallerySection from './web-development/GallerySection';

const WebsiteDevelopmentCaseStudy = () => {
  return (
    <section>
      {/* Title Section */}
      <CaseStudiesHero />

      {/* Case Study Content */}    
      <ClientOverview />
      <ChallengesSection />
      <OurApproachSection />
      <GallerySection />
      <KeyAchievements />  
    </section>
  );
};

export default WebsiteDevelopmentCaseStudy;
