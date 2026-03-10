import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Agenda from '@/components/Agenda';
// import Speakers from '@/components/Speakers';
import Sponsors from '@/components/Sponsors';
import Location from '@/components/Location';
import AboutBERC from '@/components/AboutBERC';
import OrganizingTeam from '@/components/OrganizingTeam';
import Register from '@/components/Register';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <div className="section-divider" />
      <About />
      <div className="section-divider" />
      <Agenda />
      <div className="section-divider" />
      {/* <Speakers /> */}
      {/* <div className="section-divider" /> */}
      <Sponsors />
      <div className="section-divider" />
      <Location />
      <div className="section-divider" />
      <AboutBERC />
      <OrganizingTeam />
      <Register />
      <Footer />
    </main>
  );
}
