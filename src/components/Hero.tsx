import { useState, useEffect } from 'react';
import { 
  ShieldCheck, 
  Server, 
  Headphones, 
  ArrowRight, 
  Network, 
  Sparkles, 
  ChevronLeft, 
  ChevronRight, 
  Play, 
  Pause, 
  Check, 
  Flame
} from 'lucide-react';
import { ISP_PACKAGES } from '../data/ispData';
import { PackageItem } from '../types';

interface HeroProps {
  onExplorePackages: () => void;
  onApplyConnection: () => void;
  onSelectPackage?: (pkg: PackageItem) => void;
}

export default function Hero({ 
  onExplorePackages, 
  onApplyConnection, 
  onSelectPackage 
}: HeroProps) {
  const [currentIndex, setCurrentIndex] = useState<number>(2); // Start with Turbo 80
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const totalPackages = ISP_PACKAGES.length;

  const currentPkg = ISP_PACKAGES[currentIndex] || ISP_PACKAGES[0];

  useEffect(() => {
    if (isPaused) return;

    const intervalTime = 3800;
    const stepTime = 50;
    const stepIncrement = (stepTime / intervalTime) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setCurrentIndex((curr) => (curr + 1) % totalPackages);
          return 0;
        }
        return prev + stepIncrement;
      });
    }, stepTime);

    return () => clearInterval(timer);
  }, [isPaused, totalPackages, currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPackages);
    setProgress(0);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPackages) % totalPackages);
    setProgress(0);
  };

  const handleSelectPackageIndex = (index: number) => {
    setCurrentIndex(index);
    setProgress(0);
  };

  const handleBookCurrentPackage = () => {
    if (onSelectPackage) {
      onSelectPackage(currentPkg);
    } else {
      onApplyConnection();
    }
  };

  const scrollToCoverage = () => {
    const el = document.getElementById('coverage');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-[85vh] flex items-center justify-center pt-8 pb-16 lg:py-20 overflow-hidden bg-mesh-orange border-b border-slate-200">
      
      {/* Warm Telecom Orange Ambient Glows */}
      <div className="absolute top-10 left-1/4 w-[450px] h-[450px] bg-orange-400/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-amber-400/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Value Proposition & CTAs */}
          <div className="lg:col-span-6 flex flex-col items-start text-left space-y-6">
            
            {/* Live Indicator Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-orange-200 text-orange-900 text-xs sm:text-sm font-bold shadow-xs">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-orange-600"></span>
              </span>
              <span>⚡ Khulna's #1 Ultrafast Fiber Network</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-black tracking-tight text-slate-900 leading-[1.18] font-heading">
              Khulna's Premier{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-600 to-orange-500">
                Ultrafast & Reliable
              </span>{' '}
              Broadband ISP
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl font-normal font-body">
              Empowering Khulna homes and enterprises with unmetered 4K streaming, zero-lag competitive gaming, and dedicated 100+ Mbps local optical media cache since 2015.
            </p>

            {/* Core Pillars */}
            <div className="flex flex-wrap gap-2.5 pt-1">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white border border-slate-200 text-slate-800 text-xs sm:text-sm font-semibold shadow-xs">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>99.9% Uptime Guarantee</span>
              </div>

              <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white border border-slate-200 text-slate-800 text-xs sm:text-sm font-semibold shadow-xs">
                <Server className="w-4 h-4 text-orange-600 shrink-0" />
                <span>100+ Mbps Optical Cloud</span>
              </div>

              <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white border border-slate-200 text-slate-800 text-xs sm:text-sm font-semibold shadow-xs">
                <Headphones className="w-4 h-4 text-amber-600 shrink-0" />
                <span>24/7 Dedicated NOC Support</span>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2 w-full sm:w-auto font-display">
              <button
                onClick={onApplyConnection}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white font-bold text-sm sm:text-base transition-all shadow-md shadow-orange-600/20 active:scale-95 cursor-pointer"
              >
                <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
                <span>Get Connected Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={scrollToCoverage}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 text-xs sm:text-sm font-bold border border-slate-300 transition-colors shadow-xs cursor-pointer"
              >
                <Network className="w-4 h-4 text-orange-600" />
                <span>View Coverage Map</span>
              </button>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-3 gap-3 pt-4 border-t border-slate-200 w-full font-display">
              <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-xs">
                <div className="text-xl sm:text-2xl font-black text-orange-600 font-heading">
                  10+ <span className="text-slate-500 text-xs font-normal">Years</span>
                </div>
                <div className="text-xs text-slate-600 font-body">Khulna Pioneer</div>
              </div>
              <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-xs">
                <div className="text-xl sm:text-2xl font-black text-slate-900 font-heading">
                  15,000+
                </div>
                <div className="text-xs text-slate-600 font-body">Happy Clients</div>
              </div>
              <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-xs">
                <div className="text-xl sm:text-2xl font-black text-emerald-600 font-heading">
                  5 <span className="text-slate-500 text-xs font-normal">Hubs</span>
                </div>
                <div className="text-xs text-slate-600 font-body">Branch Offices</div>
              </div>
            </div>

          </div>

          {/* Right Column: Live Package Showcase (Waving Outline & Clean Card) */}
          <div className="lg:col-span-6 relative">
            
            {/* Rainbow Outline Outer Frame */}
            <div 
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              className="p-[3px] rounded-3xl animate-rainbow-wave shadow-2xl transition-all duration-300 group"
            >
              <div className="bg-white rounded-[calc(1.5rem-2px)] p-6 sm:p-8">
                
                {/* Header Switcher & Progress */}
                <div className="flex flex-col gap-3 pb-5 border-b border-slate-100">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-orange-50 border border-orange-200 text-orange-800">
                        <Flame className="w-3.5 h-3.5 text-orange-500" />
                        <span>Featured Plan ({currentIndex + 1}/{totalPackages})</span>
                      </span>
                      {isPaused && (
                        <span className="text-[11px] text-slate-400 font-medium">
                          (Paused)
                        </span>
                      )}
                    </div>

                    {/* Navigation Controls */}
                    <div className="flex items-center gap-1.5 font-sans">
                      <button
                        onClick={() => setIsPaused(!isPaused)}
                        className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors cursor-pointer"
                        title={isPaused ? "Resume auto-play" : "Pause auto-play"}
                      >
                        {isPaused ? <Play className="w-3.5 h-3.5" /> : <Pause className="w-3.5 h-3.5" />}
                      </button>
                      <button
                        onClick={handlePrev}
                        className="p-1.5 rounded-lg bg-slate-100 hover:bg-orange-50 hover:text-orange-600 text-slate-700 transition-colors cursor-pointer"
                        title="Previous package"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>
                      <button
                        onClick={handleNext}
                        className="p-1.5 rounded-lg bg-slate-100 hover:bg-orange-50 hover:text-orange-600 text-slate-700 transition-colors cursor-pointer"
                        title="Next package"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Progress Indicator */}
                  <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                    <div 
                      className="bg-orange-500 h-full rounded-full transition-all duration-75"
                      style={{ width: `${progress}%` }}
                    ></div>
                  </div>

                  {/* Quick Speed Pills */}
                  <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pt-1 font-mono">
                    {ISP_PACKAGES.map((pkg, idx) => {
                      const isSelected = idx === currentIndex;
                      return (
                        <button
                          key={pkg.id}
                          onClick={() => handleSelectPackageIndex(idx)}
                          className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all shrink-0 cursor-pointer ${
                            isSelected
                              ? 'bg-orange-600 text-white shadow-xs scale-105'
                              : 'bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200'
                          }`}
                        >
                          {pkg.speed}M
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Clean Simplified Package View: Just Name, Speed & Price! */}
                <div key={currentPkg.id} className="pt-6 space-y-5 animate-in fade-in zoom-in-95 duration-200">
                  
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-2xl sm:text-3xl font-black text-slate-900 font-heading">
                          {currentPkg.name}
                        </h3>
                        {currentPkg.tag && (
                          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-orange-600 text-white uppercase tracking-wider">
                            {currentPkg.tag}
                          </span>
                        )}
                      </div>
                      <div className="text-xs text-slate-500 font-medium">
                        Fiber Optic Dedicated Line • 24/7 Support
                      </div>
                    </div>

                    {/* Big Speed Dial */}
                    <div className="p-3.5 rounded-2xl bg-orange-50 border border-orange-200 text-center shadow-xs">
                      <div className="text-3xl sm:text-4xl font-black font-mono text-orange-600 leading-none">
                        {currentPkg.speed}
                      </div>
                      <div className="text-[10px] uppercase font-bold text-orange-800 font-mono mt-0.5">
                        Mbps Speed
                      </div>
                    </div>
                  </div>

                  {/* Price Box */}
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                    <div>
                      <div className="text-xs text-slate-500 font-medium">Monthly Subscription:</div>
                      <div className="flex items-baseline gap-1 mt-0.5">
                        <span className="text-lg font-bold text-slate-700">৳</span>
                        <span className="text-3xl sm:text-4xl font-black font-mono text-slate-900">
                          {currentPkg.price}
                        </span>
                        <span className="text-xs text-slate-500">/ month</span>
                      </div>
                    </div>

                    <div className="text-right">
                      <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-lg">
                        <Check className="w-3.5 h-3.5" />
                        <span>All VAT Included</span>
                      </span>
                      <div className="text-[10px] text-slate-400 font-mono mt-1">
                        Zero Hidden Charges
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={handleBookCurrentPackage}
                      className="flex-1 py-3.5 px-4 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-md shadow-orange-600/20 active:scale-95 transition-all cursor-pointer font-display"
                    >
                      <span>Choose This Package</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    <button
                      onClick={onExplorePackages}
                      className="py-3.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 transition-colors cursor-pointer font-display"
                    >
                      <span>View All Packages</span>
                    </button>
                  </div>

                </div>

              </div>
            </div>

            {/* Bottom Note */}
            <div className="mt-3 flex items-center justify-center gap-1.5 text-xs text-slate-500">
              <Sparkles className="w-3.5 h-3.5 text-orange-500" />
              <span>Full optical line connected coverage across Khulna</span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
