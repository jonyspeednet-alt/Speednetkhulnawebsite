import { useState } from 'react';
import { 
  Home, 
  Building2, 
  Wifi, 
  Server, 
  Zap, 
  CheckCircle2, 
  ArrowRight, 
  Layers,
  Sparkles,
  Activity,
  ShieldCheck,
  Check
} from 'lucide-react';
import { ISP_SERVICES } from '../data/ispData';

interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void;
}

export default function ServicesSection({ onSelectService }: ServicesSectionProps) {
  const [selectedServiceId, setSelectedServiceId] = useState<string>('enterprise-fiber');

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Building2':
        return <Building2 className="w-6 h-6 text-orange-600" />;
      case 'Home':
        return <Home className="w-6 h-6 text-amber-600" />;
      case 'Wifi':
        return <Wifi className="w-6 h-6 text-orange-500" />;
      case 'Server':
        return <Server className="w-6 h-6 text-emerald-600" />;
      case 'Zap':
        return <Zap className="w-6 h-6 text-rose-500" />;
      default:
        return <Zap className="w-6 h-6 text-orange-600" />;
    }
  };

  const activeService = ISP_SERVICES.find(s => s.id === selectedServiceId) || ISP_SERVICES[0];

  return (
    <section id="services" className="py-20 bg-slate-50 relative overflow-hidden border-b border-slate-200">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4 font-display">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-orange-200 text-orange-900 text-xs font-bold shadow-xs">
            <Layers className="w-4 h-4 text-orange-600" />
            <span>Carrier-Grade Telecom Infrastructure</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight font-heading">
            Enterprise & Residential{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-600 to-orange-500">
              Broadband Services
            </span>
          </h2>
          
          <p className="text-slate-600 text-base sm:text-lg font-normal">
            From low-latency home FTTH fiber connections to 1:1 symmetrical enterprise leased circuits backed by strict SLA guarantees.
          </p>
        </div>

        {/* Professional Two-Column Service Interactive Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          
          {/* Left Column: Service Selector Tabs */}
          <div className="lg:col-span-5 space-y-3 font-display">
            {ISP_SERVICES.map((service) => {
              const isSelected = selectedServiceId === service.id;

              return (
                <div
                  key={service.id}
                  onClick={() => setSelectedServiceId(service.id)}
                  className={`p-4 sm:p-5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between group ${
                    isSelected
                      ? 'bg-white border-orange-500 shadow-md ring-2 ring-orange-100'
                      : 'bg-white/70 hover:bg-white border-slate-200 hover:border-orange-300 shadow-xs'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                      isSelected ? 'bg-orange-50' : 'bg-slate-100 group-hover:bg-orange-50/60'
                    }`}>
                      {getIcon(service.icon)}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-orange-600 transition-colors">
                          {service.title}
                        </h4>
                      </div>
                      <div className="text-xs text-slate-500 font-medium">
                        {service.subtitle}
                      </div>
                    </div>
                  </div>

                  <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full shrink-0 border ${
                    isSelected 
                      ? 'bg-orange-600 text-white border-orange-600' 
                      : 'bg-slate-100 text-slate-600 border-slate-200'
                  }`}>
                    {service.badge}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Right Column: Detailed High-Grade Specifications & SLA Metrics */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200 p-6 sm:p-9 shadow-sm relative overflow-hidden font-display">
            <div className="space-y-6">
              
              {/* Header */}
              <div className="flex items-start justify-between gap-4 pb-5 border-b border-slate-100">
                <div>
                  <span className="inline-block text-xs font-bold text-orange-700 bg-orange-50 border border-orange-200 px-3 py-1 rounded-full mb-2">
                    {activeService.badge}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900 font-heading">
                    {activeService.title}
                  </h3>
                  <p className="text-sm text-slate-500 mt-1 font-medium">
                    {activeService.subtitle}
                  </p>
                </div>

                <div className="w-14 h-14 rounded-2xl bg-orange-50 border border-orange-100 flex items-center justify-center shrink-0 shadow-xs">
                  {getIcon(activeService.icon)}
                </div>
              </div>

              {/* Description */}
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {activeService.description}
              </p>

              {/* Technical Telemetry / Spec Badges */}
              <div className="grid grid-cols-3 gap-3">
                {activeService.specs.map((sp, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-center">
                    <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                      {sp.label}
                    </div>
                    <div className="text-base sm:text-lg font-black text-slate-900 font-mono mt-0.5">
                      {sp.value}
                    </div>
                  </div>
                ))}
              </div>

              {/* Key Features List */}
              <div className="space-y-3 pt-2">
                <div className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                  Key Service Standards:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeService.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-700 font-medium p-2 rounded-lg bg-slate-50/70 border border-slate-100">
                      <div className="p-0.5 rounded-full bg-emerald-100 text-emerald-700 shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                      <span className="leading-snug">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Action */}
              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center gap-3">
                <button
                  onClick={() => onSelectService(activeService.title)}
                  className="w-full sm:flex-1 py-3.5 px-5 rounded-xl bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer active:scale-98"
                >
                  <span>Inquire for {activeService.title}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href="#contact"
                  className="w-full sm:w-auto py-3.5 px-5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs sm:text-sm text-center transition-colors"
                >
                  Talk to Engineer
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
