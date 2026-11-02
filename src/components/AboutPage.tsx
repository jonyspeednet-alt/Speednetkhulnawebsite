import { 
  Zap, 
  ShieldCheck, 
  Network, 
  Server, 
  Activity, 
  Award, 
  CheckCircle2, 
  ArrowRight, 
  Building2, 
  Globe2, 
  Clock, 
  Users2
} from 'lucide-react';

interface AboutPageProps {
  onNavigateHome: () => void;
  onExplorePackages: () => void;
  onContact: () => void;
}

export default function AboutPage({ onNavigateHome, onExplorePackages, onContact }: AboutPageProps) {
  const milestones = [
    { year: '2015', title: 'Founded in Khulna', desc: 'Started with a primary optical core at Gagan Babu Road to provide Khulna with reliable, continuous high-speed broadband.' },
    { year: '2018', title: 'Suburban Expansion', desc: 'Extended underground & overhead fusion-spliced optical rings to Sonadanga, Boyra, Khalishpur, and Gollamari.' },
    { year: '2021', title: '10G Local CDN & Cloud Edge', desc: 'Deployed direct 10G peering with global CDN nodes, Google, Netflix, and local high-speed media caches.' },
    { year: '2024+', title: 'Division-Wide Backbone', desc: 'Operating 12 interconnected regional hubs spanning Khulna Division with 99.98% core availability.' },
  ];

  const pillars = [
    {
      icon: <Network className="w-6 h-6 text-orange-500" />,
      title: '100% Pure Optical Fiber',
      desc: 'Zero copper or hybrid degradation. Single-mode optical fiber lines terminated directly into client premises via FTTH technology.'
    },
    {
      icon: <Activity className="w-6 h-6 text-emerald-500" />,
      title: '99.98% Core Network Uptime',
      desc: 'Dual-homed upstream routing and self-healing optical fiber rings designed to prevent outages and packet drops.'
    },
    {
      icon: <Clock className="w-6 h-6 text-amber-500" />,
      title: '24/7 Dedicated NOC Support',
      desc: 'Our Central NOC operates 24 hours a day, 365 days a year with real-time OTDR line telemetry and rapid field deployment.'
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-blue-500" />,
      title: 'Transparent & Regulatory Compliant',
      desc: 'Fully licensed by BTRC. 100% of our published prices include mandatory 5% government VAT with zero hidden fees.'
    }
  ];

  return (
    <div className="bg-slate-50 text-slate-900 font-display">
      
      {/* 1. Hero Section */}
      <section className="relative py-20 bg-slate-950 text-white overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] opacity-20 pointer-events-none"></div>
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-2 text-xs text-slate-400 mb-8 font-medium">
            <button 
              onClick={onNavigateHome}
              className="hover:text-orange-400 transition-colors cursor-pointer"
            >
              Home
            </button>
            <span>/</span>
            <span className="text-orange-400 font-semibold">About Us</span>
          </div>

          <div className="text-center max-w-3xl mx-auto space-y-5">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/15 border border-orange-500/30 text-orange-400 text-xs font-bold tracking-wide">
              <Award className="w-4 h-4 text-orange-400" />
              <span>Khulna's Pioneer Broadband Since 2015</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight font-heading leading-tight">
              Empowering Khulna with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-300">
                Ultra-Fast Fiber Internet
              </span>
            </h1>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              SpeedNet is committed to delivering world-class, ultra-reliable broadband connectivity to homes, businesses, and educational institutions across Khulna Division.
            </p>
          </div>

          {/* Quick Metrics */}
          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 text-center">
              <div className="text-3xl sm:text-4xl font-black text-orange-400 font-heading">10+ Years</div>
              <div className="text-xs text-slate-400 mt-1 uppercase font-semibold">Broadband Excellence</div>
            </div>
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 text-center">
              <div className="text-3xl sm:text-4xl font-black text-amber-400 font-heading">12 Hubs</div>
              <div className="text-xs text-slate-400 mt-1 uppercase font-semibold">Connected Regional Nodes</div>
            </div>
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 text-center">
              <div className="text-3xl sm:text-4xl font-black text-emerald-400 font-heading">99.98%</div>
              <div className="text-xs text-slate-400 mt-1 uppercase font-semibold">Backbone Core Uptime</div>
            </div>
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 text-center">
              <div className="text-3xl sm:text-4xl font-black text-white font-heading">100+ Gbps</div>
              <div className="text-xs text-slate-400 mt-1 uppercase font-semibold">Peering Capacity</div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. Our Mission, Vision & Core Values */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-50 border border-orange-200 text-orange-700 text-xs font-bold uppercase tracking-wider">
                Our Purpose
              </div>

              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 font-heading tracking-tight leading-tight">
                "We Create The Difference" in Every Connection
              </h2>

              <p className="text-slate-600 text-base leading-relaxed">
                Founded with a mission to eliminate slow buffering and unstable connections, SpeedNet has transformed the broadband experience in Khulna. We believe access to high-speed, uncapped internet is a fundamental driver of education, commerce, and digital employment.
              </p>

              <div className="space-y-3.5 pt-2">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Dedicated Symmetrical Bandwidth</h4>
                    <p className="text-xs text-slate-500">Equal upload and download speeds designed for content creators, freelancing, and remote work.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Zero Fair Usage Policy (No FUP)</h4>
                    <p className="text-xs text-slate-500">True unmetered data transfers without arbitrary throttling or daily data caps.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">BTRC Licensed & Regulated</h4>
                    <p className="text-xs text-slate-500">Compliant with Bangladesh Telecommunication Regulatory Commission guidelines and safety standards.</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex items-center gap-4">
                <button
                  onClick={onExplorePackages}
                  className="px-6 py-3 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-bold text-sm shadow-md shadow-orange-600/20 transition-all cursor-pointer flex items-center gap-2"
                >
                  <span>Explore Packages</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={onContact}
                  className="px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-sm border border-slate-300 transition-all cursor-pointer"
                >
                  Contact Support
                </button>
              </div>
            </div>

            {/* Right Card: Infrastructure Highlights */}
            <div className="p-8 sm:p-10 rounded-3xl bg-slate-950 text-white border border-slate-800 shadow-2xl relative overflow-hidden space-y-6">
              <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl pointer-events-none"></div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-orange-500/20 text-orange-400 border border-orange-500/40 flex items-center justify-center">
                  <Server className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-black text-white font-heading">Network Architecture</h3>
                  <div className="text-xs text-orange-400 font-mono">Redundant Optical Core</div>
                </div>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
                <p>
                  Our primary Network Operations Center (NOC) is situated at 83/3 Gagon Babu Road (Ground Floor & 1st Floor), Khulna, linked via multi-strand armored optical fiber cables directly to National Internet Exchanges and international gateways.
                </p>
                <p>
                  Every regional hub operates with dedicated backup generator power, industrial UPS banks, and automated failover routing to maintain connectivity even during municipal grid interruptions.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
                <div className="text-xs text-slate-400 uppercase font-semibold">Core Peering Partnerships</div>
                <div className="flex flex-wrap gap-2 text-xs font-mono font-bold">
                  <span className="px-2.5 py-1 rounded-lg bg-slate-800 text-orange-300">Tier-1 Optical</span>
                  <span className="px-2.5 py-1 rounded-lg bg-slate-800 text-white">Google Edge</span>
                  <span className="px-2.5 py-1 rounded-lg bg-slate-800 text-white">Akamai CDN</span>
                  <span className="px-2.5 py-1 rounded-lg bg-slate-800 text-white">Netflix Open Connect</span>
                  <span className="px-2.5 py-1 rounded-lg bg-slate-800 text-white">Meta Caching</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. Four Core Pillars */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 font-heading tracking-tight">
              Why Khulna Trusts SpeedNet
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Engineered from the ground up for seamless streaming, lag-free gaming, and mission-critical enterprise operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:shadow-md hover:border-orange-300 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center mb-4">
                  {pillar.icon}
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2 font-heading">
                  {pillar.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Journey & Milestones */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-orange-700 text-xs font-bold uppercase tracking-wider">
              Growth & Milestones
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 font-heading tracking-tight">
              Our Journey Over The Years
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((item, idx) => (
              <div 
                key={idx}
                className="relative p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-orange-400 transition-all"
              >
                <div className="text-2xl font-black text-orange-600 font-heading mb-2">
                  {item.year}
                </div>
                <h4 className="text-sm font-bold text-slate-900 mb-2">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
