import { useState } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  SlidersHorizontal,
  Flame,
  Check
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
    <section id="packages" className="py-20 bg-white relative overflow-hidden border-b border-slate-200">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4 font-display">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-orange-900 text-xs font-bold shadow-xs">
            <Flame className="w-4 h-4 text-orange-500 fill-orange-500" />
            <span>High-Speed Optical Broadband Plans</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight font-heading">
            Choose Your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-600 to-orange-500">
              Internet Package
            </span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg font-normal">
            No speed throttling or FUP limits. Unmetered symmetric fiber speed with all 5% government VAT included in transparent monthly pricing.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-3.5 rounded-2xl bg-slate-50 border border-slate-200 mb-12 shadow-xs font-display">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: 'all', label: 'All Packages' },
              { id: 'popular', label: '🔥 Most Popular' },
              { id: 'starter', label: 'Budget & Starter' },
              { id: 'pro', label: 'High Speed & Pro' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeCategory === tab.id
                    ? 'bg-orange-600 text-white shadow-xs'
                    : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Speed Filter Dropdown */}
          <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
            <SlidersHorizontal className="w-4 h-4 text-orange-600" />
            <span>Min Speed:</span>
            <select
              value={speedFilter}
              onChange={(e) => setSpeedFilter(Number(e.target.value))}
              className="bg-white border border-slate-300 text-slate-900 text-xs rounded-xl px-3 py-1.5 outline-none focus:border-orange-500 font-mono cursor-pointer"
            >
              <option value={0}>All Speeds</option>
              <option value={50}>50+ Mbps</option>
              <option value={80}>80+ Mbps</option>
              <option value={100}>100+ Mbps</option>
              <option value={150}>150+ Mbps</option>
            </select>
          </div>

        </div>

        {/* Packages Grid with Rainbow Waving Border & Just Speed and Price */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch font-display">
          {filteredPackages.map((pkg) => {
            const isPopular = pkg.isPopular;

            return (
              <div
                key={pkg.id}
                className="p-[3px] rounded-3xl animate-rainbow-wave transition-all duration-300 hover:scale-[1.02] shadow-md hover:shadow-xl group"
              >
                {/* Clean Inner Card Container */}
                <div className="bg-white rounded-[calc(1.5rem-2px)] p-7 sm:p-8 h-full flex flex-col justify-between relative">
                  
                  {/* Popular Tag Badge */}
                  {pkg.tag && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                      <span className={`px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-sm text-white ${
                        isPopular ? 'bg-orange-600' : 'bg-slate-900'
                      }`}>
                        <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
                        <span>{pkg.tag}</span>
                      </span>
                    </div>
                  )}

                  {/* Top: Package Name & Speed */}
                  <div className="space-y-6 pt-1">
                    
                    <div className="text-center">
                      <h3 className="text-2xl sm:text-3xl font-black text-slate-900 font-heading">
                        {pkg.name}
                      </h3>
                      <p className="text-xs text-slate-500 mt-1">
                        Symmetric Optical Fiber Connection
                      </p>
                    </div>

                    {/* Big Package Speed Display */}
                    <div className="p-6 rounded-2xl bg-orange-50/80 border border-orange-200/80 text-center shadow-xs">
                      <div className="text-xs uppercase font-bold text-orange-700 tracking-wider">
                        Dedicated Bandwidth
                      </div>
                      <div className="text-5xl sm:text-6xl font-black font-mono text-orange-600 tracking-tight my-1">
                        {pkg.speed}
                      </div>
                      <div className="text-xs uppercase font-extrabold text-orange-800 font-mono">
                        {pkg.speedUnit} Real-Time Speed
                      </div>
                    </div>

                    {/* Price Section */}
                    <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-1.5">
                      <div className="text-xs text-slate-500 font-medium">Monthly Charge:</div>
                      <div className="flex items-baseline justify-center gap-1">
                        <span className="text-2xl font-bold text-slate-700">৳</span>
                        <span className="text-4xl sm:text-5xl font-black font-mono text-slate-900">
                          {pkg.price}
                        </span>
                        <span className="text-xs text-slate-500 font-medium">/ month</span>
                      </div>
                      <div className="text-[11px] text-emerald-700 font-bold flex items-center justify-center gap-1 pt-1">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                        <span>5% Government Regulatory VAT Included</span>
                      </div>
                    </div>

                  </div>

                  {/* Bottom: Select Package Action Button */}
                  <div className="pt-6">
                    <button
                      onClick={() => onSelectPackage(pkg)}
                      className={`w-full py-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all cursor-pointer shadow-sm active:scale-98 ${
                        isPopular 
                          ? 'bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white shadow-orange-600/20' 
                          : 'bg-slate-900 hover:bg-orange-600 text-white'
                      }`}
                    >
                      <span>Choose Package</span>
                      <ArrowRight className="w-4 h-4" />
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
