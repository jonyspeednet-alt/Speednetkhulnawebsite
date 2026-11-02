import { PhoneCall, Mail, Activity, ShieldCheck } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="bg-slate-950 text-slate-200 border-b border-orange-500/20 text-xs py-2 px-4 relative z-50 select-none">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-y-2 gap-x-4">
        
        {/* Left Side: Direct Contact Details */}
        <div className="flex flex-wrap items-center gap-x-4 sm:gap-x-6 gap-y-1.5 font-display text-[11px] sm:text-xs">
          
          {/* Central Hotline */}
          <a 
            href="tel:09639333111" 
            className="flex items-center gap-2 hover:text-orange-400 transition-colors group shrink-0"
            title="Call Central Hotline"
          >
            <span className="w-5 h-5 rounded-full bg-orange-600 text-white font-bold flex items-center justify-center group-hover:bg-orange-500 transition-colors shadow-xs">
              <PhoneCall className="w-2.5 h-2.5" />
            </span>
            <span className="text-slate-400 font-medium">Hotline:</span>
            <span className="font-bold text-orange-400 font-mono tracking-wider">09639333111</span>
          </a>

          <span className="hidden sm:inline text-slate-800">|</span>

          {/* NOC Helpdesk */}
          <a 
            href="tel:01910365533" 
            className="flex items-center gap-2 hover:text-amber-300 transition-colors group shrink-0"
            title="24/7 NOC Technical Helpdesk"
          >
            <span className="w-5 h-5 rounded-full bg-slate-800 text-amber-400 border border-slate-700 flex items-center justify-center group-hover:border-amber-400/50 transition-colors">
              <Activity className="w-2.5 h-2.5" />
            </span>
            <span className="text-slate-400 font-medium">NOC Direct:</span>
            <span className="font-bold text-amber-400 font-mono tracking-wider">01910 365533</span>
          </a>

          <span className="hidden md:inline text-slate-800">|</span>

          {/* Official Email */}
          <a 
            href="mailto:info@speednetkhulna.com" 
            className="hidden md:flex items-center gap-1.5 text-slate-300 hover:text-orange-400 transition-colors shrink-0"
          >
            <Mail className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-400">info@speednetkhulna.com</span>
          </a>
        </div>

        {/* Right Side: Network Status & BTRC Badge */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          
          {/* NOC Backbone Status Badge */}
          <div className="flex items-center gap-2 bg-slate-900 border border-slate-800 px-3 py-1 rounded-full text-[11px]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-slate-300 font-medium hidden xs:inline">Optical Network:</span>
            <span className="font-bold text-emerald-400">100% Active</span>
          </div>

          <div className="hidden sm:flex items-center gap-1.5 text-slate-400 text-[11px]">
            <ShieldCheck className="w-3.5 h-3.5 text-orange-500" />
            <span>BTRC Licensed ISP</span>
          </div>

        </div>

      </div>
    </div>
  );
}
