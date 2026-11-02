import { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Clock, 
  Building, 
  Copy, 
  Check,
  ShieldCheck,
  Navigation
} from 'lucide-react';
import { ISP_OFFICES } from '../data/ispData';

export default function OfficesSection() {
  const [selectedOfficeId, setSelectedOfficeId] = useState<string>('speednet-noc');
  const [copiedPhone, setCopiedPhone] = useState<string | null>(null);

  const currentOffice = ISP_OFFICES.find((o) => o.id === selectedOfficeId) || ISP_OFFICES[0];

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedPhone(text);
    setTimeout(() => setCopiedPhone(null), 2000);
  };

  return (
    <section id="offices" className="py-24 bg-white relative overflow-hidden border-b border-slate-200 font-display">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-orange-900 text-xs font-bold shadow-xs">
            <Building className="w-4 h-4 text-orange-600" />
            <span>Official Service Centers & Branch Hubs</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight font-heading">
            SpeedNet Central NOC &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-600 to-orange-500">
              Branch Offices
            </span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg font-normal">
            Visit our Central NOC at Gagon Babu Road or your nearest branch for direct optical line booking, billing, and rapid on-site assistance.
          </p>
        </div>

        {/* 4 Branch Selection Pills */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {ISP_OFFICES.map((office) => {
            const isSelected = selectedOfficeId === office.id;

            return (
              <button
                key={office.id}
                onClick={() => setSelectedOfficeId(office.id)}
                className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 flex items-center gap-2 cursor-pointer shadow-xs ${
                  isSelected
                    ? 'bg-orange-600 text-white shadow-md shadow-orange-600/20 scale-[1.02]'
                    : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                <MapPin className={`w-4 h-4 ${isSelected ? 'text-white' : 'text-orange-600'}`} />
                <span>{office.name}</span>
                {office.isNOC && (
                  <span className={`px-1.5 py-0.2 rounded-full text-[10px] font-mono ${
                    isSelected ? 'bg-white/20 text-white' : 'bg-orange-100 text-orange-700'
                  }`}>
                    HQ
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Main Office Card + Map Embed Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Office Detailed Card */}
          <div className="lg:col-span-6 p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm flex flex-col justify-between">
            <div className="space-y-6">
              
              {/* Office Header */}
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="inline-block text-xs font-bold text-orange-700 bg-orange-100 border border-orange-200 px-3 py-1 rounded-full mb-2">
                    {currentOffice.type}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900 font-heading">
                    {currentOffice.name}
                  </h3>
                  <div className="text-xs text-slate-500 font-medium mt-1">
                    Landmark: {currentOffice.landmark}
                  </div>
                </div>

                <div className="w-12 h-12 rounded-2xl bg-orange-100 text-orange-600 border border-orange-200 flex items-center justify-center shrink-0">
                  <Building className="w-6 h-6" />
                </div>
              </div>

              {/* Exact Physical Address */}
              <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-1">
                <div className="text-xs text-slate-500 flex items-center gap-1.5 font-bold">
                  <MapPin className="w-3.5 h-3.5 text-orange-600" />
                  <span>Physical Address:</span>
                </div>
                <div className="text-sm sm:text-base font-bold text-slate-900">
                  {currentOffice.address}
                </div>
              </div>

              {/* Direct Branch Phone Numbers */}
              <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-2">
                <div className="text-xs text-slate-500 font-bold flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-orange-600" />
                  <span>Direct Branch Contact:</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {currentOffice.phones.map((ph, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-bold font-mono text-slate-800"
                    >
                      <a href={`tel:${ph.replace(/\s+/g, '')}`} className="hover:text-orange-600 transition-colors">
                        {ph}
                      </a>
                      <button
                        onClick={() => handleCopy(ph)}
                        className="p-1 rounded hover:bg-slate-200 text-slate-400 hover:text-slate-700 cursor-pointer"
                        title="Copy phone"
                      >
                        {copiedPhone === ph ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Operating Hours */}
              <div className="flex items-center gap-3 p-4 rounded-2xl bg-white border border-slate-200 text-xs text-slate-700">
                <Clock className="w-4 h-4 text-orange-600 shrink-0" />
                <div>
                  <strong className="text-slate-900">Hours of Operation:</strong> 24/7 Optical NOC Monitoring & Daytime Customer Service Desk (9:00 AM - 9:00 PM).
                </div>
              </div>

            </div>

            {/* Bottom Actions */}
            <div className="pt-6 border-t border-slate-200 flex flex-wrap gap-3">
              <a
                href={currentOffice.mapEmbedUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-orange-600 text-white font-bold text-xs transition-colors cursor-pointer"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Get Driving Directions</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 font-bold text-xs transition-colors"
              >
                <span>Book Line in This Area</span>
              </a>
            </div>

          </div>

          {/* Right: Embedded Interactive Map */}
          <div className="lg:col-span-6 rounded-3xl overflow-hidden border border-slate-200 shadow-sm min-h-[380px] bg-slate-100 relative">
            <iframe
              src={currentOffice.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '380px' }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`${currentOffice.name} Google Map Location`}
              className="w-full h-full"
            ></iframe>
          </div>

        </div>

      </div>
    </section>
  );
}
