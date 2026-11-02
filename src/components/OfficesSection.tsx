import { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Clock, 
  Navigation, 
  ExternalLink, 
  Building, 
  Copy, 
  Check
} from 'lucide-react';
import { ISP_OFFICES } from '../data/ispData';

export default function OfficesSection() {
  const [selectedOfficeId, setSelectedOfficeId] = useState<string>('noc-office');
  const [copiedPhone, setCopiedPhone] = useState<string | null>(null);

  const currentOffice = ISP_OFFICES.find((o) => o.id === selectedOfficeId) || ISP_OFFICES[0];

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedPhone(text);
    setTimeout(() => setCopiedPhone(null), 2000);
  };

  return (
    <section id="offices" className="py-20 bg-white relative overflow-hidden border-b border-slate-200 font-display">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-orange-900 text-xs font-bold shadow-xs">
            <Building className="w-4 h-4 text-orange-600" />
            <span>Customer Service Centers & Branch Hubs</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight font-heading">
            5 Strategic Branch Offices in{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-600 to-orange-500">
              Khulna City
            </span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg font-normal">
            Visit your nearest Speed Net customer hub for direct account payments, on-site technical diagnostics, and connection inquiries.
          </p>
        </div>

        {/* 5 Branch Selection Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10">
          {ISP_OFFICES.map((office) => {
            const isSelected = selectedOfficeId === office.id;

            return (
              <button
                key={office.id}
                onClick={() => setSelectedOfficeId(office.id)}
                className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 cursor-pointer shadow-xs ${
                  isSelected
                    ? 'bg-orange-600 text-white shadow-sm'
                    : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                <MapPin className={`w-4 h-4 ${isSelected ? 'text-white' : 'text-orange-600'}`} />
                <span>{office.name}</span>
              </button>
            );
          })}
        </div>

        {/* Main Office Card + Map Embed Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Office Detailed Card */}
          <div className="lg:col-span-6 p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200 shadow-xs flex flex-col justify-between">
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
                  <div className="text-xs text-slate-500 font-medium mt-0.5">
                    {currentOffice.landmark}
                  </div>
                </div>

                <div className="w-12 h-12 rounded-xl bg-orange-100 text-orange-600 border border-orange-200 flex items-center justify-center shrink-0">
                  <Building className="w-6 h-6" />
                </div>
              </div>

              {/* Address */}
              <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-1">
                <div className="text-xs text-slate-500 flex items-center gap-1.5 font-bold">
                  <MapPin className="w-3.5 h-3.5 text-orange-600" />
                  <span>Physical Address:</span>
                </div>
                <div className="text-sm font-semibold text-slate-900 leading-relaxed">
                  {currentOffice.address}
                </div>
              </div>

              {/* Contact Phone Numbers with Copy Buttons */}
              <div className="space-y-2">
                <div className="text-xs text-slate-600 font-bold">Direct Phone Numbers (Click to call or copy):</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {currentOffice.phones.map((phone, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-white border border-slate-200 flex items-center justify-between group hover:border-orange-300 transition-colors"
                    >
                      <a
                        href={`tel:${phone.replace(/\s+/g, '')}`}
                        className="flex items-center gap-2 text-sm font-bold text-orange-700 font-mono hover:text-orange-900 transition-colors"
                      >
                        <Phone className="w-3.5 h-3.5 text-emerald-600" />
                        <span>{phone}</span>
                      </a>

                      <button
                        onClick={() => handleCopy(phone)}
                        className="p-1 rounded text-slate-400 hover:text-slate-700 cursor-pointer"
                        title="Copy phone number"
                      >
                        {copiedPhone === phone ? (
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                        ) : (
                          <Copy className="w-3.5 h-3.5 text-slate-400 group-hover:text-orange-600" />
                        )}
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Working Hours */}
              <div className="p-4 rounded-xl bg-white border border-slate-200 flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 border border-amber-100 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-bold">Office Hours:</div>
                  <div className="text-sm font-bold text-slate-800">
                    Saturday - Thursday: 09:00 AM - 08:00 PM (Friday: NOC Helpline 24/7)
                  </div>
                </div>
              </div>

            </div>

            {/* Bottom Actions */}
            <div className="pt-6 border-t border-slate-200 flex flex-wrap items-center gap-3 mt-6">
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-xs cursor-pointer"
              >
                <Navigation className="w-4 h-4" />
                <span>Google Maps Directions</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <a
                href={`tel:${currentOffice.phones[0].replace(/\s+/g, '')}`}
                className="py-3 px-5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm flex items-center gap-2 transition-colors cursor-pointer shadow-xs"
              >
                <Phone className="w-4 h-4" />
                <span>Call Directly</span>
              </a>
            </div>
          </div>

          {/* Right: Embedded Google Maps Viewer */}
          <div className="lg:col-span-6 rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 shadow-xs relative min-h-[380px] lg:min-h-[480px]">
            <iframe
              title={`Google Map - ${currentOffice.name}`}
              src={currentOffice.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '380px' }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer"
              className="w-full h-full"
            ></iframe>

            {/* Map Overlay Badge */}
            <div className="absolute top-4 left-4 bg-white/95 border border-slate-200 px-4 py-2 rounded-xl shadow-md backdrop-blur-md">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-900">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                <span>{currentOffice.name}</span>
              </div>
              <div className="text-[10px] text-slate-500 font-mono">
                Speed Net Optical Node Hub
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
