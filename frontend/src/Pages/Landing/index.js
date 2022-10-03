import Header from './header'
import Footer from '../../Layouts/Footer';
import { 
  PrincipalAddressSection,
  AboutSection,
  AchievmentSection,
  MissionSection,
  NewsSection,
  GallerySection,
} from './sections';

const LandingPage = () => {
  return (
    <div>
      <Header />
      <main>
        <AboutSection />
        <PrincipalAddressSection />
        <MissionSection />
        <AchievmentSection /> 
        <NewsSection />
        <GallerySection />
      </main>
      <Footer />
    </div>
  )
}

export default LandingPage;