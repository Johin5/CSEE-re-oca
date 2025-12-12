import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Platform from './components/Platform';
import DashboardPreview from './components/DashboardPreview';
import Impact from './components/Impact';
import Testimonials from './components/Testimonials';
import BrandAudit from './components/BrandAudit';
import CreativeWork from './components/CreativeWork';
import Footer from './components/Footer';
import Services from './components/Services';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-dark text-white selection:bg-accent selection:text-dark">
      <Navbar />
      <main>
        <Hero />
        <Impact />
        <CreativeWork />
        <Testimonials />
        <Services />
        <DashboardPreview />
        <Platform />
        <BrandAudit />
      </main>
      <Footer />
    </div>
  );
};

export default App;