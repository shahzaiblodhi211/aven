import Hero from '../components/Hero';
import TechMarquee from '../components/TechMarquee';
import WorkProcess from '../components/WorkProcess';
import AboutPreview from '../components/AboutPreview';
import MonetaServices from '../components/MonetaServices';
import PromoBanner from '../components/PromoBanner';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main style={{ paddingTop: 'var(--header-height)' }}>
      <Hero />
      <TechMarquee />
      <AboutPreview />
      <WorkProcess />
      <MonetaServices />
      <PromoBanner />
      <Footer />
    </main>
  );
}
