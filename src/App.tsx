import { useState } from 'react';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServicesSection from './components/ServicesSection';
import PackagesSection from './components/PackagesSection';
import OfficesSection from './components/OfficesSection';
import CoverageMapSection from './components/CoverageMapSection';
import BookingFormSection from './components/BookingFormSection';
import AboutPage from './components/AboutPage';
import CareerPage from './components/CareerPage';
import SpeedNetChatbot from './components/SpeedNetChatbot';
import Footer from './components/Footer';
import { PackageItem } from './types';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'about' | 'career'>('home');
  const [selectedPackage, setSelectedPackage] = useState<PackageItem | null>(null);
  const [selectedArea, setSelectedArea] = useState<string>('');
  const [selectedServiceName, setSelectedServiceName] = useState<string>('');

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavigatePage = (page: 'home' | 'about' | 'career', targetSection?: string) => {
    setCurrentPage(page);
    if (page === 'home') {
      if (targetSection) {
        setTimeout(() => {
          scrollToSection(targetSection.replace(/^#/, ''));
        }, 100);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleBookClick = () => {
    handleNavigatePage('home', 'contact');
  };

  const handleSelectPackage = (pkg: PackageItem) => {
    setSelectedPackage(pkg);
    handleNavigatePage('home', 'contact');
  };

  const handleSelectService = (serviceName: string) => {
    setSelectedServiceName(serviceName);
    handleNavigatePage('home', 'contact');
  };

  const handleAreaSelected = (areaName: string) => {
    setSelectedArea(areaName);
    handleNavigatePage('home', 'contact');
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-display selection:bg-orange-500 selection:text-white flex flex-col">
      {/* 1. Top Bar */}
      <TopBar />

      {/* 2. Sticky Header / Navigation */}
      <Navbar 
        onBookClick={handleBookClick} 
        currentPage={currentPage}
        onNavigatePage={handleNavigatePage}
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {currentPage === 'home' && (
          <>
            {/* 3. Hero Section with Live Package Rotator */}
            <Hero
              onExplorePackages={() => scrollToSection('packages')}
              onApplyConnection={handleBookClick}
              onSelectPackage={handleSelectPackage}
            />

            {/* 4. Packages & Pricing Section (with Rainbow Waving Outline and simplified Speed & Price) */}
            <PackagesSection onSelectPackage={handleSelectPackage} />

            {/* 5. Professional Services Section */}
            <ServicesSection onSelectService={handleSelectService} />

            {/* 6. Connected Optical Line Coverage Map Section with Support & Customer Care Desks */}
            <CoverageMapSection onSelectArea={handleAreaSelected} />

            {/* 7. Branch Offices Section */}
            <OfficesSection />

            {/* 8. Lead Capture Booking Form & FAQ */}
            <BookingFormSection
              selectedPackage={selectedPackage}
              selectedArea={selectedArea}
              selectedServiceName={selectedServiceName}
            />
          </>
        )}

        {currentPage === 'about' && (
          <AboutPage 
            onNavigateHome={() => handleNavigatePage('home', 'home')}
            onExplorePackages={() => handleNavigatePage('home', 'packages')}
            onContact={() => handleNavigatePage('home', 'contact')}
          />
        )}

        {currentPage === 'career' && (
          <CareerPage 
            onNavigateHome={() => handleNavigatePage('home', 'home')}
          />
        )}
      </main>

      {/* Footer */}
      <Footer onNavigatePage={handleNavigatePage} />

      {/* SpeedNet Bangla Smart Support Chatbot (Assistant) */}
      <SpeedNetChatbot
        onSelectPackage={handleSelectPackage}
        onBookClick={handleBookClick}
      />
    </div>
  );
}
