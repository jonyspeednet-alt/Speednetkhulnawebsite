import { useState } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  SlidersHorizontal,
  Flame,
  Check,
  Zap,
  ShieldCheck,
  Wifi,
  Tv
} from 'lucide-react';
import { ISP_PACKAGES } from '../data/ispData';
import { PackageItem } from '../types';

interface PackagesSectionProps {
  onSelectPackage: (pkg: PackageItem) => void;
}

export default function PackagesSection({ onSelectPackage }: PackagesSectionProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [speedFilter, setSpeedFilter] = useState<number>(0);

  const filteredPackages = ISP_PACKAGES.filter((pkg) => {
    const matchCategory = activeCategory === 'all' || 
      (activeCategory === 'popular' && pkg.isPopular) ||
      (activeCategory === 'starter' && pkg.speed <= 65) ||
      (activeCategory === 'pro' && pkg.speed > 65);
    const matchSpeed = speedFilter === 0 || pkg.speed >= speedFilter;
    return matchCategory && matchSpeed;
  });

  return (
    <section id="packages" className="py-24 relative overflow-hidden border-b border-slate-200 bg-mesh-orange">
      
      {/* Ambient Glass Glow Orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-orange-400/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 font-display">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-orange-200/80 text-orange-900 text-xs font-bold shadow-xs">
            <Flame className="w-4 h-4 text-orange-500 fill-orange-500 animate-pulse" />
            <span>High-Speed Optical Broadband Plans</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight font-heading">
            Choose Your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-600 to-orange-500">
              Broadband Package
            </span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg font-normal">
            No speed throttling or FUP limits. True unmetered symmetric fiber speed with 5% government regulatory VAT included in transparent monthly pricing.
          </p>
        </div>

        {/* Glass Filter Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-3 rounded-2xl bg-white/70 backdrop-blur-xl border border-white/60 mb-14 shadow-sm">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5">
            {[
              { id: 'all', label: 'All Packages' },
              { id: 'popular', label: '🔥 Most Popular' },
              { id: 'starter', label: 'Budget & Starter' },
              { id: 'pro', label: 'High Speed & Pro' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                  activeCategory === tab.id
                    ? 'bg-orange-600 text-white shadow-sm shadow-orange-600/30'
                    : 'bg-white/60 hover:bg-white text-slate-700 border border-slate-200/60'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Speed Filter Dropdown */}
          <div className="flex items-center gap-2 text-xs font-bold text-slate-700 bg-white/60 px-3 py-1.5 rounded-xl border border-slate-200/60">
            <SlidersHorizontal className="w-4 h-4 text-orange-600" />
            <span>Min Speed:</span>
            <select
              value={speedFilter}
              onChange={(e) => setSpeedFilter(Number(e.target.value))}
              className="bg-transparent text-slate-900 text-xs font-bold font-mono outline-none cursor-pointer"
            >
              <option value={0}>All Speeds</option>
              <option value={50}>50+ Mbps</option>
              <option value={80}>80+ Mbps</option>
              <option value={100}>100+ Mbps</option>
              <option value={150}>150+ Mbps</option>
            </select>
          </div>

        </div>

        {/* Portrait Package Cards Grid with Glass Blur UI & Smooth Visual Transitions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {filteredPackages.map((pkg) => {
            const isPopular = pkg.isPopular;

            return (
              <div
                key={pkg.id}
                className={`group relative rounded-3xl transition-all duration-300 ease-out hover:-translate-y-2.5 flex flex-col justify-between ${
                  isPopular 
                    ? 'p-[2px] bg-gradient-to-b from-orange-500 via-amber-400 to-orange-600 shadow-xl shadow-orange-500/20' 
                    : 'p-[1px] bg-gradient-to-b from-white/90 via-slate-200/60 to-orange-200/40 shadow-lg shadow-slate-200/50 hover:shadow-xl hover:shadow-orange-500/10'
                }`}
              >
                {/* Frosted Glass Portrait Card Body */}
                <div className="h-full rounded-[calc(1.5rem-2px)] bg-white/80 backdrop-blur-2xl p-7 sm:p-8 flex flex-col justify-between relative overflow-hidden border border-white/60">
                  
                  {/* Subtle Glass Highlight Gradient Shine */}
                  <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white/60 to-transparent pointer-events-none"></div>

                  {/* Top Badge */}
                  <div className="flex items-center justify-between gap-2 mb-4 relative z-10">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-orange-600 bg-orange-50/90 border border-orange-200/70 px-3 py-1 rounded-full">
                      {pkg.category.toUpperCase()} TIER
                    </span>

                    {pkg.tag && (
                      <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-1 shadow-xs text-white ${
                        isPopular ? 'bg-gradient-to-r from-orange-600 to-amber-600' : 'bg-slate-900'
                      }`}>
                        <Sparkles className="w-3 h-3 text-yellow-300" />
                        <span>{pkg.tag}</span>
                      </span>
                    )}
                  </div>

                  {/* Portrait Information Block */}
                  <div className="space-y-6 relative z-10">
                    
                    {/* Package Name & Subtitle */}
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-black text-slate-900 font-heading tracking-tight">
                        {pkg.name}
                      </h3>
                      <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                        {pkg.summary || 'Symmetric Optical Fiber Connection with dedicated throughput.'}
                      </p>
                    </div>

                    {/* Portrait Big Speed Display with Frosted Glass Plate */}
                    <div className="p-5 rounded-2xl bg-gradient-to-b from-orange-500/10 to-amber-500/5 border border-orange-200/80 text-center relative overflow-hidden backdrop-blur-md transition-all duration-300 group-hover:border-orange-400 group-hover:shadow-inner">
                      <div className="text-[11px] uppercase font-bold text-orange-700 tracking-wider">
                        Symmetrical Fiber Bandwidth
                      </div>
                      
                      <div className="flex items-baseline justify-center gap-1 my-1">
                        <span className="text-5xl sm:text-6xl font-black font-mono text-orange-600 tracking-tight transition-transform duration-300 group-hover:scale-105 inline-block">
                          {pkg.speed}
                        </span>
                        <span className="text-base font-extrabold text-orange-800 font-mono">
                          {pkg.speedUnit}
                        </span>
                      </div>

                      <div className="text-[11px] font-bold text-orange-900/80">
                        Equal Upload & Download Speed
                      </div>
                    </div>

                    {/* Price Block */}
                    <div className="p-4 rounded-2xl bg-white/60 backdrop-blur-md border border-slate-200/80 text-center space-y-1">
                      <div className="text-xs text-slate-500 font-medium">Monthly Subscription:</div>
                      <div className="flex items-baseline justify-center gap-1">
                        <span className="text-xl font-bold text-slate-700">৳</span>
                        <span className="text-4xl sm:text-5xl font-black font-mono text-slate-900">
                          {pkg.price}
                        </span>
                        <span className="text-xs text-slate-500 font-medium">/ month</span>
                      </div>
                      <div className="text-[11px] text-emerald-700 font-bold flex items-center justify-center gap-1 pt-0.5">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                        <span>5% Government VAT Included</span>
                      </div>
                    </div>

                    {/* Portrait Feature Checklist */}
                    <div className="space-y-2.5 pt-1 text-xs text-slate-700 font-medium">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                        <span>Bufferless 4K & Ultra-HD Streaming</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                        <span>Low-Ping Competitive Esports Gaming</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                        <span>100% Dedicated Optical Fiber Core</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                        <span>Free Dual-Band Wi-Fi 6 Router Setup</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                        <span>24/7 Dedicated Rapid Technical Care</span>
                      </div>
                    </div>

                  </div>

                  {/* Bottom Action Button */}
                  <div className="pt-6 relative z-10">
                    <button
                      onClick={() => onSelectPackage(pkg)}
                      className={`w-full py-3.5 px-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer shadow-md active:scale-98 ${
                        isPopular 
                          ? 'bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white shadow-orange-600/25' 
                          : 'bg-slate-900 hover:bg-orange-600 text-white shadow-slate-900/10'
                      }`}
                    >
                      <span>Choose {pkg.name}</span>
                      <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                    </button>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
