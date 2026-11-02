import { useState, MouseEvent } from 'react';
import { 
  Network, 
  MapPin, 
  UserCheck, 
  Phone, 
  ArrowRight, 
  ShieldCheck, 
  Building, 
  Copy, 
  Check, 
  Radio, 
  Server, 
  Activity, 
  CheckCircle2, 
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { COVERAGE_AREAS } from '../data/ispData';
import { CoverageAreaNode } from '../types';

interface CoverageMapSectionProps {
  onSelectArea: (areaName: string) => void;
}

export default function CoverageMapSection({ onSelectArea }: CoverageMapSectionProps) {
  // SpeedNet Central NOC is the default selected
  const nocNode = COVERAGE_AREAS.find(a => a.id === 'speednet-noc') || COVERAGE_AREAS[0];
  const [selectedArea, setSelectedArea] = useState<CoverageAreaNode>(nocNode);
  const [activeClickedId, setActiveClickedId] = useState<string | null>(null);
  const [blinkingId, setBlinkingId] = useState<string | null>(null);
  const [copiedPhone, setCopiedPhone] = useState<string | null>(null);

  // Distribute areas into Left and Right sides around the Central NOC
  const leftSideAreas = COVERAGE_AREAS.filter(a => 
    ['sonadanga', 'boyra', 'khalishpur', 'gollamari', 'daulatpur', 'satkhira'].includes(a.id)
  );

  const rightSideAreas = COVERAGE_AREAS.filter(a => 
    ['shibbari', 'nirala', 'rupsha', 'dighalia', 'bagerhat', 'jessore'].includes(a.id)
  );

  const handleSelectArea = (area: CoverageAreaNode) => {
    setActiveClickedId(area.id);
    setSelectedArea(area);
    setBlinkingId(area.id);
    setTimeout(() => {
      setBlinkingId(null);
    }, 700);
  };

  const handleCopy = (phone: string, e?: MouseEvent) => {
    if (e) e.stopPropagation();
    navigator.clipboard.writeText(phone);
    setCopiedPhone(phone);
    setTimeout(() => setCopiedPhone(null), 2000);
  };

  const handleBookConnection = (area: CoverageAreaNode) => {
    onSelectArea(`${area.name} (${area.district})`);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getWhatsAppUrl = (phone: string, areaName: string) => {
    const clean = phone.replace(/[^0-9]/g, '');
    const intl = clean.startsWith('880') 
      ? clean 
      : clean.startsWith('0') 
        ? '880' + clean.slice(1) 
        : '880' + clean;
    const msg = encodeURIComponent(`Hello SpeedNet! I want to inquire about broadband connection in ${areaName}.`);
    return `https://wa.me/${intl}?text=${msg}`;
  };

  const isNocActive = activeClickedId === 'speednet-noc';
  const isNocSelected = selectedArea.id === 'speednet-noc';

  return (
    <section id="coverage" className="py-20 bg-slate-950 text-white relative overflow-hidden border-b border-slate-800 font-display">
      
      {/* Background Matrix Grids */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-20 pointer-events-none"></div>
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-orange-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-bold tracking-wide backdrop-blur-md">
            <Network className="w-4 h-4 text-orange-400 animate-pulse" />
            <span>Dedicated Optical Fiber Backbone</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight font-heading">
            SpeedNet{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-300">
              Coverage Area
            </span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base font-normal max-w-2xl mx-auto">
            Click on any regional hub box or the middle Central NOC to reveal direct numbers, Call, WhatsApp, and explore covered sub-areas below.
          </p>
        </div>

        {/* 3-COLUMN TOPOLOGICAL NETWORK VISUAL: LEFT BOXES | MIDDLE NOC | RIGHT BOXES */}
        <div className="rounded-3xl backdrop-blur-2xl bg-slate-900/70 border border-slate-800/80 shadow-2xl p-4 sm:p-6 lg:p-8 space-y-6">
          
          {/* Top Network Status Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-800/80">
            <div className="flex items-center gap-3">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              <div>
                <span className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider">
                  Optical Backbone Topology
                </span>
                <span className="text-xs text-orange-400 font-mono ml-2 hidden sm:inline">
                  (Khulna Core & Regional Distribution)
                </span>
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <Activity className="w-3.5 h-3.5" />
                <span>12 Connected Hubs Active</span>
              </span>
              <span className="hidden md:inline text-slate-600">|</span>
              <span className="hidden md:inline text-orange-400">99.98% Core Uptime</span>
            </div>
          </div>

          {/* MAIN 3-COLUMN GRID: LEFT SIDE BOXES | MIDDLE CENTRAL NOC | RIGHT SIDE BOXES */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-center">
            
            {/* 1. LEFT SIDE AREA BOXES (6 Hubs) */}
            <div className="lg:col-span-4 space-y-3">
              <div className="flex items-center justify-between px-2 text-xs font-bold text-slate-400 uppercase tracking-wider">
                <span>West & North Khulna Hubs</span>
                <span className="text-[11px] text-orange-400 font-mono">Side 01</span>
              </div>

              {leftSideAreas.map((area) => {
                const isSelected = activeClickedId === area.id;
                const isBlinking = blinkingId === area.id;

                return (
                  <div
                    key={area.id}
                    onClick={() => handleSelectArea(area)}
                    className={`group relative p-3.5 sm:p-4 rounded-2xl transition-all duration-300 cursor-pointer border flex items-center justify-between gap-3 backdrop-blur-xl ${
                      isBlinking
                        ? 'animate-pulse ring-4 ring-orange-400 bg-orange-600/35 border-orange-400 scale-[1.03] shadow-lg shadow-orange-500/30'
                        : isSelected
                          ? 'bg-gradient-to-r from-orange-950/80 to-slate-900/90 border-orange-500 shadow-xl shadow-orange-500/25 ring-2 ring-orange-500/60 scale-[1.02]'
                          : 'bg-slate-900/60 hover:bg-slate-800/70 border-slate-800/80 hover:border-slate-700/90'
                    }`}
                  >
                    {/* Left side: Hub Name & District */}
                    <div className="flex items-center gap-3 min-w-0">
                      <div className={`w-3 h-3 rounded-full shrink-0 transition-colors ${
                        isSelected ? 'bg-orange-500 ring-4 ring-orange-500/20' : 'bg-slate-700 group-hover:bg-orange-400'
                      }`} />
                      
                      <div className="min-w-0">
                        <div className={`text-sm font-bold truncate transition-colors ${
                          isSelected ? 'text-white font-extrabold' : 'text-slate-200 group-hover:text-white'
                        }`}>
                          {area.name}
                        </div>
                        <div className="text-[11px] text-slate-400 truncate">
                          {area.nameBn} • {area.district}
                        </div>
                      </div>
                    </div>

                    {/* Right side: Number + Call Icon + WhatsApp Icon ONLY WHEN CLICKED */}
                    <div className="shrink-0">
                      {isSelected ? (
                        <div className="flex items-center gap-1.5 animate-in fade-in-50 duration-200" onClick={(e) => e.stopPropagation()}>
                          <span className="font-mono text-xs font-bold text-orange-300 hidden sm:inline">
                            {area.managerPhone}
                          </span>

                          {/* Direct Voice Call Icon */}
                          <a
                            href={`tel:${area.managerPhone.replace(/\s+/g, '')}`}
                            className="p-1.5 rounded-lg bg-orange-500 hover:bg-orange-400 text-white transition-all shadow-xs cursor-pointer active:scale-95"
                            title={`Call ${area.name}`}
                            aria-label={`Call ${area.name}`}
                          >
                            <Phone className="w-3.5 h-3.5" />
                          </a>

                          {/* WhatsApp Message Icon */}
                          <a
                            href={getWhatsAppUrl(area.managerPhone, area.name)}
                            target="_blank"
                            rel="noreferrer"
                            className="p-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white transition-all shadow-xs cursor-pointer active:scale-95"
                            title={`WhatsApp message to ${area.name}`}
                            aria-label={`WhatsApp message to ${area.name}`}
                          >
                            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.669-.699c.969.54 1.771.82 2.791.82 3.181 0 5.767-2.587 5.767-5.766.001-3.182-2.585-5.766-5.767-5.766zm3.374 8.204c-.146.411-.74.757-1.026.8-.27.042-.622.062-1.785-.419-.942-.39-1.547-1.341-1.595-1.404-.047-.063-.379-.504-.379-.961 0-.458.239-.684.324-.778.086-.094.188-.117.251-.117.063 0 .125.001.179.004.058.003.136-.022.212.162.079.189.271.662.295.71.024.048.04.105.008.168-.032.063-.048.102-.095.157-.048.055-.101.122-.144.164-.048.046-.098.096-.042.193.056.096.248.409.533.663.366.326.675.427.771.475.096.048.152.04.208-.024.056-.064.24-.279.304-.375.064-.096.128-.08.216-.048.088.032.559.263.655.311.096.048.16.072.184.112.024.04.024.232-.122.643z"/>
                            </svg>
                          </a>
                        </div>
                      ) : (
                        <div className="text-slate-500 group-hover:text-orange-400 transition-colors p-1">
                          <ChevronRight className="w-4 h-4" />
                        </div>
                      )}
                    </div>

                    {/* Connecting indicator line to center on large screens */}
                    {isSelected && (
                      <div className="hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-orange-400 animate-ping"></div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* 2. MIDDLE COLUMN: SPEEDNET CENTRAL NOC (MAIN HUB) */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center p-2 sm:p-4">
              <div
                onClick={() => handleSelectArea(nocNode)}
                className={`relative w-full max-w-sm rounded-3xl p-6 sm:p-8 cursor-pointer transition-all duration-300 text-center flex flex-col items-center border-2 backdrop-blur-2xl ${
                  blinkingId === 'speednet-noc'
                    ? 'animate-pulse ring-4 ring-orange-400 bg-orange-600/35 border-orange-400 scale-105 shadow-2xl shadow-orange-500/40'
                    : isNocActive
                      ? 'bg-gradient-to-b from-orange-950/90 via-slate-900/90 to-slate-950/90 border-orange-500 shadow-2xl shadow-orange-500/40 ring-4 ring-orange-500/20 scale-105'
                      : 'bg-slate-900/60 hover:bg-slate-800/70 border-orange-500/50 hover:border-orange-400 shadow-xl'
                }`}
              >
                {/* Ambient Core Glow */}
                <div className="absolute inset-0 bg-gradient-to-tr from-orange-600/20 to-amber-500/10 rounded-3xl blur-xl pointer-events-none"></div>

                {/* Top Badge */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/20 border border-orange-500/40 text-orange-400 text-[11px] font-bold uppercase tracking-wider mb-4 backdrop-blur-md">
                  <Radio className="w-3.5 h-3.5 animate-pulse text-orange-400" />
                  <span>Central Core Gateway</span>
                </div>

                {/* Central Glowing Radar Core */}
                <div className="relative my-2">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-tr from-orange-600 via-amber-600 to-orange-500 p-1 shadow-xl shadow-orange-600/50 flex items-center justify-center">
                    <div className="w-full h-full rounded-full bg-slate-950 flex flex-col items-center justify-center text-center p-2 border border-white/20">
                      <Server className="w-6 h-6 text-orange-400 mb-0.5" />
                      <div className="text-[13px] font-black tracking-tight text-white font-heading leading-tight">
                        SPEED NET
                      </div>
                      <div className="text-[9px] font-mono font-bold text-amber-400">
                        CENTRAL NOC
                      </div>
                    </div>
                  </div>

                  {/* Pulsing Outer Rings */}
                  <div className="absolute -inset-2 rounded-full border border-orange-500/40 animate-ping pointer-events-none"></div>
                  <div className="absolute -inset-4 rounded-full border border-amber-500/20 pointer-events-none"></div>
                </div>

                {/* Main Hub Title */}
                <h3 className="text-xl sm:text-2xl font-black text-white font-heading mt-4">
                  SpeedNet NOC
                </h3>
                <p className="text-xs text-orange-300 font-medium mt-1">
                  Khulna Central Operations & Network Core
                </p>

                {/* MIDDLE BOX: ONLY SHOWS NUMBER, CALL, AND WHATSAPP WHEN CLICKED! */}
                <div className="mt-4 w-full" onClick={(e) => isNocActive && e.stopPropagation()}>
                  {isNocActive ? (
                    <div className="w-full p-2.5 rounded-2xl bg-slate-950/90 border border-orange-500/60 flex items-center justify-between backdrop-blur-md animate-in fade-in-50 duration-200">
                      <div className="text-left">
                        <div className="text-[10px] text-slate-400 font-semibold uppercase">Hotline</div>
                        <div className="text-xs font-mono font-bold text-orange-300">01910 365533</div>
                      </div>
                      
                      <div className="flex items-center gap-1.5">
                        {/* Call Icon */}
                        <a
                          href="tel:01910365533"
                          className="p-2 rounded-xl bg-orange-500 hover:bg-orange-400 text-white transition-all shadow-xs cursor-pointer active:scale-95"
                          title="Call Central NOC"
                          aria-label="Call Central NOC"
                        >
                          <Phone className="w-3.5 h-3.5" />
                        </a>

                        {/* WhatsApp Icon */}
                        <a
                          href={getWhatsAppUrl('01910365533', 'SpeedNet Central NOC')}
                          target="_blank"
                          rel="noreferrer"
                          className="p-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white transition-all shadow-xs cursor-pointer active:scale-95"
                          title="WhatsApp message to Central NOC"
                          aria-label="WhatsApp message to Central NOC"
                        >
                          <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.669-.699c.969.54 1.771.82 2.791.82 3.181 0 5.767-2.587 5.767-5.766.001-3.182-2.585-5.766-5.767-5.766zm3.374 8.204c-.146.411-.74.757-1.026.8-.27.042-.622.062-1.785-.419-.942-.39-1.547-1.341-1.595-1.404-.047-.063-.379-.504-.379-.961 0-.458.239-.684.324-.778.086-.094.188-.117.251-.117.063 0 .125.001.179.004.058.003.136-.022.212.162.079.189.271.662.295.71.024.048.04.105.008.168-.032.063-.048.102-.095.157-.048.055-.101.122-.144.164-.048.046-.098.096-.042.193.056.096.248.409.533.663.366.326.675.427.771.475.096.048.152.04.208-.024.056-.064.24-.279.304-.375.064-.096.128-.08.216-.048.088.032.559.263.655.311.096.048.16.072.184.112.024.04.024.232-.122.643z"/>
                          </svg>
                        </a>
                      </div>
                    </div>
                  ) : (
                    <div className="w-full py-2.5 px-3.5 rounded-2xl bg-slate-950/70 border border-slate-800 flex items-center justify-center gap-2 text-xs font-semibold text-slate-300 hover:text-white hover:border-orange-500/50 transition-all backdrop-blur-md">
                      <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse"></span>
                      <span>Click to Connect NOC Hub</span>
                    </div>
                  )}
                </div>

                {/* Indicator text */}
                <div className="mt-3 flex items-center justify-center gap-1.5 text-[11px] font-bold text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{isNocActive ? 'NOC Active Below' : 'Click to View Full Details'}</span>
                </div>
              </div>
            </div>

            {/* 3. RIGHT SIDE AREA BOXES (6 Hubs) */}
            <div className="lg:col-span-4 space-y-3">
              <div className="flex items-center justify-between px-2 text-xs font-bold text-slate-400 uppercase tracking-wider">
                <span>Central & East Khulna Hubs</span>
                <span className="text-[11px] text-orange-400 font-mono">Side 02</span>
              </div>

              {rightSideAreas.map((area) => {
                const isSelected = activeClickedId === area.id;
                const isBlinking = blinkingId === area.id;

                return (
                  <div
                    key={area.id}
                    onClick={() => handleSelectArea(area)}
                    className={`group relative p-3.5 sm:p-4 rounded-2xl transition-all duration-300 cursor-pointer border flex items-center justify-between gap-3 backdrop-blur-xl ${
                      isBlinking
                        ? 'animate-pulse ring-4 ring-orange-400 bg-orange-600/35 border-orange-400 scale-[1.03] shadow-lg shadow-orange-500/30'
                        : isSelected
                          ? 'bg-gradient-to-r from-slate-900/90 to-orange-950/80 border-orange-500 shadow-xl shadow-orange-500/25 ring-2 ring-orange-500/60 scale-[1.02]'
                          : 'bg-slate-900/60 hover:bg-slate-800/70 border-slate-800/80 hover:border-slate-700/90'
                    }`}
                  >
                    {/* Left side: Hub Name & District */}
                    <div className="flex items-center gap-3 min-w-0">
                      <div className={`w-3 h-3 rounded-full shrink-0 transition-colors ${
                        isSelected ? 'bg-orange-500 ring-4 ring-orange-500/20' : 'bg-slate-700 group-hover:bg-orange-400'
                      }`} />
                      
                      <div className="min-w-0">
                        <div className={`text-sm font-bold truncate transition-colors ${
                          isSelected ? 'text-white font-extrabold' : 'text-slate-200 group-hover:text-white'
                        }`}>
                          {area.name}
                        </div>
                        <div className="text-[11px] text-slate-400 truncate">
                          {area.nameBn} • {area.district}
                        </div>
                      </div>
                    </div>

                    {/* Right side: Number + Call Icon + WhatsApp Icon ONLY WHEN CLICKED */}
                    <div className="shrink-0">
                      {isSelected ? (
                        <div className="flex items-center gap-1.5 animate-in fade-in-50 duration-200" onClick={(e) => e.stopPropagation()}>
                          <span className="font-mono text-xs font-bold text-orange-300 hidden sm:inline">
                            {area.managerPhone}
                          </span>

                          {/* Direct Voice Call Icon */}
                          <a
                            href={`tel:${area.managerPhone.replace(/\s+/g, '')}`}
                            className="p-1.5 rounded-lg bg-orange-500 hover:bg-orange-400 text-white transition-all shadow-xs cursor-pointer active:scale-95"
                            title={`Call ${area.name}`}
                            aria-label={`Call ${area.name}`}
                          >
                            <Phone className="w-3.5 h-3.5" />
                          </a>

                          {/* WhatsApp Message Icon */}
                          <a
                            href={getWhatsAppUrl(area.managerPhone, area.name)}
                            target="_blank"
                            rel="noreferrer"
                            className="p-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white transition-all shadow-xs cursor-pointer active:scale-95"
                            title={`WhatsApp message to ${area.name}`}
                            aria-label={`WhatsApp message to ${area.name}`}
                          >
                            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.669-.699c.969.54 1.771.82 2.791.82 3.181 0 5.767-2.587 5.767-5.766.001-3.182-2.585-5.766-5.767-5.766zm3.374 8.204c-.146.411-.74.757-1.026.8-.27.042-.622.062-1.785-.419-.942-.39-1.547-1.341-1.595-1.404-.047-.063-.379-.504-.379-.961 0-.458.239-.684.324-.778.086-.094.188-.117.251-.117.063 0 .125.001.179.004.058.003.136-.022.212.162.079.189.271.662.295.71.024.048.04.105.008.168-.032.063-.048.102-.095.157-.048.055-.101.122-.144.164-.048.046-.098.096-.042.193.056.096.248.409.533.663.366.326.675.427.771.475.096.048.152.04.208-.024.056-.064.24-.279.304-.375.064-.096.128-.08.216-.048.088.032.559.263.655.311.096.048.16.072.184.112.024.04.024.232-.122.643z"/>
                            </svg>
                          </a>
                        </div>
                      ) : (
                        <div className="text-slate-500 group-hover:text-orange-400 transition-colors p-1">
                          <ChevronRight className="w-4 h-4" />
                        </div>
                      )}
                    </div>

                    {/* Connecting indicator line to center on large screens */}
                    {isSelected && (
                      <div className="hidden lg:block absolute -left-2 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-orange-400 animate-ping"></div>
                    )}
                  </div>
                );
              })}
            </div>

          </div>

        </div>

        {/* 2. DEDICATED AREA INFORMATION BOX (PAGE-FIT WIDTH FORMAT) */}
        <div className="mt-8 w-full rounded-3xl backdrop-blur-2xl bg-gradient-to-br from-slate-900/95 via-slate-900/90 to-slate-950/95 border-2 border-orange-500/60 shadow-2xl p-6 sm:p-8 lg:p-9 relative overflow-hidden">
          
          {/* Top Amber Glowing Ribbon */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-orange-500 via-amber-400 to-orange-500"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Col: Area Title, Desk Info & Unified Contact Action Bar */}
            <div className="lg:col-span-6 space-y-5">
              
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-xs font-bold text-orange-400 uppercase tracking-wider bg-orange-500/10 border border-orange-500/30 px-3.5 py-1 rounded-full flex items-center gap-2 backdrop-blur-md">
                  <MapPin className="w-3.5 h-3.5 text-orange-400" />
                  <span>
                    {isNocSelected ? 'Central Headquarters Information' : 'Selected Hub Information'}
                  </span>
                </span>
                <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 rounded-full font-mono">
                  ● 100% Optical Fiber Ready
                </span>
              </div>

              <div>
                <h3 className="text-3xl sm:text-4xl font-black text-white font-heading">
                  {selectedArea.name}
                </h3>
                <div className="text-sm text-orange-300 font-semibold mt-1">
                  {selectedArea.nameBn} • {selectedArea.district}
                </div>
              </div>

              {/* Information & Customer Care Card */}
              <div className="p-4 sm:p-5 rounded-2xl bg-slate-950/80 border border-slate-800/90 flex items-center gap-3.5 backdrop-blur-md">
                <div className="w-12 h-12 rounded-2xl bg-orange-500/20 text-orange-400 flex items-center justify-center shrink-0 border border-orange-500/30">
                  <UserCheck className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 uppercase font-semibold">
                    {isNocSelected ? 'Central Technical Desk' : 'Information & Customer Care'}
                  </div>
                  <div className="text-base sm:text-lg font-bold text-white">
                    {selectedArea.managerName}
                  </div>
                </div>
              </div>

              {/* UNIFIED SINGLE CONTACT ACTION FORMAT (Call, WhatsApp, Copy in One Card) */}
              <div className="p-4 rounded-2xl bg-slate-950/90 border border-orange-500/40 flex flex-col sm:flex-row sm:items-center justify-between gap-3.5 backdrop-blur-md">
                <div>
                  <div className="text-[11px] text-slate-400 font-medium">Direct Hotline</div>
                  <div className="text-lg sm:text-xl font-black text-orange-400 font-mono tracking-tight">
                    {selectedArea.managerPhone}
                  </div>
                </div>

                <div className="flex items-center gap-2 flex-wrap">
                  {/* Call Icon Button */}
                  <a
                    href={`tel:${selectedArea.managerPhone.replace(/\s+/g, '')}`}
                    className="px-3.5 py-2 rounded-xl bg-orange-600 hover:bg-orange-500 text-white text-xs font-bold flex items-center gap-1.5 transition-all shadow-md active:scale-95 cursor-pointer"
                    title="Direct Phone Call"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call</span>
                  </a>

                  {/* WhatsApp Icon Button */}
                  <a
                    href={getWhatsAppUrl(selectedArea.managerPhone, selectedArea.name)}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center gap-1.5 transition-all shadow-md active:scale-95 cursor-pointer"
                    title="WhatsApp Message"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.669-.699c.969.54 1.771.82 2.791.82 3.181 0 5.767-2.587 5.767-5.766.001-3.182-2.585-5.766-5.767-5.766zm3.374 8.204c-.146.411-.74.757-1.026.8-.27.042-.622.062-1.785-.419-.942-.39-1.547-1.341-1.595-1.404-.047-.063-.379-.504-.379-.961 0-.458.239-.684.324-.778.086-.094.188-.117.251-.117.063 0 .125.001.179.004.058.003.136-.022.212.162.079.189.271.662.295.71.024.048.04.105.008.168-.032.063-.048.102-.095.157-.048.055-.101.122-.144.164-.048.046-.098.096-.042.193.056.096.248.409.533.663.366.326.675.427.771.475.096.048.152.04.208-.024.056-.064.24-.279.304-.375.064-.096.128-.08.216-.048.088.032.559.263.655.311.096.048.16.072.184.112.024.04.024.232-.122.643z"/>
                    </svg>
                    <span>WhatsApp</span>
                  </a>

                  {/* Copy Button */}
                  <button
                    onClick={(e) => handleCopy(selectedArea.managerPhone, e)}
                    className="px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
                    title="Copy Phone Number"
                  >
                    {copiedPhone === selectedArea.managerPhone ? (
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                    <span>{copiedPhone === selectedArea.managerPhone ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
              </div>

            </div>

            {/* Right Col: Office Location, Coverage Sub-Areas & Booking CTA */}
            <div className="lg:col-span-6 space-y-4 bg-slate-950/70 p-5 sm:p-6 rounded-2xl border border-slate-800/90 backdrop-blur-md">
              
              {/* Office / Node Location */}
              <div className="space-y-1.5">
                <div className="text-xs text-slate-400 uppercase font-semibold flex items-center gap-1.5">
                  <Building className="w-4 h-4 text-amber-400" />
                  <span>
                    {isNocSelected ? 'Central NOC Headquarters Location' : 'Branch / Hub Location'}
                  </span>
                </div>
                <div className="text-sm sm:text-base text-slate-200 font-medium leading-relaxed">
                  {selectedArea.address}
                </div>
              </div>

              {/* Covered Sub-Areas under this Hub */}
              {selectedArea.subAreas && selectedArea.subAreas.length > 0 && (
                <div className="space-y-2 pt-2 border-t border-slate-800/80">
                  <div className="text-xs text-slate-400 uppercase font-semibold flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-orange-400" />
                    <span>Coverage Areas & Neighborhood Points</span>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {selectedArea.subAreas.map((sub, sIdx) => (
                      <span
                        key={sIdx}
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-xl bg-slate-900/90 border border-slate-800 text-xs text-slate-200 font-medium hover:border-orange-500/50 transition-colors"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-orange-400"></span>
                        <span>{sub}</span>
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Service Assurance Badge */}
              <div className="pt-2 flex items-center justify-between text-xs text-slate-400 border-t border-slate-800/80">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Free Optical Signal Inspection</span>
                </span>
                <span className="text-orange-400 font-mono font-bold">24h Express Deployment</span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
