import React from 'react';
import { AppProvider } from './context/AppContext';
import TopBanner from './components/TopBanner';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PhilosophyAndMetrics from './components/PhilosophyAndMetrics';
import ProcessSteps from './components/ProcessSteps';
import FrameworkGrid from './components/FrameworkGrid';
import SignatureShowcase from './components/SignatureShowcase';
import OurCraftBento from './components/OurCraftBento';
import VibeMatcher from './components/VibeMatcher';
import WhyUsMetrics from './components/WhyUsMetrics';
import CuratedMenuCarousel from './components/CuratedMenuCarousel';
import PricingAndPackages from './components/PricingAndPackages';
import ContinuousCrafting from './components/ContinuousCrafting';
import LetUsFeastAndBanner from './components/LetUsFeastAndBanner';
import StudioFooter from './components/StudioFooter';
import ReservationModal from './components/ReservationModal';
import OrderDrawer from './components/OrderDrawer';
import Toast from './components/Toast';

export default function App() {
  return (
    <AppProvider>
      <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-[#a3e635] selection:text-[#0a0a0a]">
        <TopBanner />

        {/* Hero Section with Pure White Padding Background (Exact match to reference image) */}
        <div className="bg-[#ffffff] p-2 sm:p-4 md:p-6 lg:p-8">
          <div className="relative bg-[#0a0a0a] rounded-[2rem] sm:rounded-[2.5rem] md:rounded-[3rem] overflow-hidden border border-[#222222] shadow-2xl">
            <Navbar />
            <Hero />
          </div>
        </div>

        <main>
          <PhilosophyAndMetrics />
          <ProcessSteps />
          <FrameworkGrid />
          <SignatureShowcase />
          <OurCraftBento />
          <VibeMatcher />
          <WhyUsMetrics />
          <CuratedMenuCarousel />
          <PricingAndPackages />
          <ContinuousCrafting />
          <LetUsFeastAndBanner />
        </main>
        <StudioFooter />

        {/* Global Overlays */}
        <ReservationModal />
        <OrderDrawer />
        <Toast />
      </div>
    </AppProvider>
  );
}
