import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Youtube, 
  Globe, 
  ShieldCheck, 
  ArrowUp,
  Briefcase,
  Info
} from 'lucide-react';

interface FooterProps {
  onNavigatePage?: (page: 'home' | 'about' | 'career', targetSection?: string) => void;
}

export default function Footer({ onNavigatePage }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLinkClick = (page: 'home' | 'about' | 'career', section?: string) => {
    if (onNavigatePage) {
      onNavigatePage(page, section);
    } else {
      scrollToTop();
    }
  };

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800 relative font-display">
      
      {/* Top Ribbon with Direct Contact Cards */}
      <div className="border-b border-slate-800/80 py-8 bg-slate-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center justify-between">
            
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
              <div className="w-11 h-11 rounded-xl bg-orange-500/10 text-orange-400 border border-orange-500/30 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-slate-400 font-medium">Central 24/7 Hotline</div>
                <a href="tel:09639333111" className="text-lg font-black text-white hover:text-orange-400 font-mono tracking-wide">
                  09639333111
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
              <div className="w-11 h-11 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/30 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-slate-400 font-medium">Official Email Support</div>
                <a href="mailto:info@speednetkhulna.com" className="text-sm sm:text-base font-bold text-white hover:text-orange-400 font-mono">
                  info@speednetkhulna.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
              <div className="w-11 h-11 rounded-xl bg-orange-500/10 text-orange-400 border border-orange-500/30 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-slate-400 font-medium">Central NOC & Headquarters</div>
                <div className="text-sm font-bold text-white">
                  83/3, Gagon Babu Road (Ground Floor & 1st Floor), Khulna
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand Info - transparent logo variant for the dark footer */}
          <div className="lg:col-span-4 space-y-4">
            <img
              src="/images/speednet-logo-dark.png"
              alt="Speed Net - Beyond your imagination | Internet Service Provider"
              width={200}
              height={98}
              className="block h-20 sm:h-24 w-auto object-contain"
            />
            <div className="text-xs text-slate-400 font-medium">
              Khulna's Pioneer Fiber Broadband
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
              Pioneering high-speed optical broadband internet in Khulna Division since 2015. Offering bufferless 4K streaming, zero-lag competitive gaming, and dedicated corporate leased lines.
            </p>

            <div className="text-xs font-bold text-orange-400">
              "We Create The Difference"
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-2.5 pt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 hover:bg-orange-600 hover:text-white border border-slate-800 text-slate-300 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 hover:bg-red-600 hover:text-white border border-slate-800 text-slate-300 flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <button
                onClick={() => handleLinkClick('home')}
                className="w-9 h-9 rounded-lg bg-slate-900 hover:bg-orange-600 hover:text-white border border-slate-800 text-slate-300 flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Web"
              >
                <Globe className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button 
                  onClick={() => handleLinkClick('home', 'home')} 
                  className="text-slate-400 hover:text-orange-400 transition-colors cursor-pointer text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick('about')} 
                  className="text-orange-300 hover:text-white font-semibold transition-colors cursor-pointer text-left flex items-center gap-1"
                >
                  <span>About Us</span>
                  <span className="text-[10px] bg-orange-500/20 px-1 rounded text-orange-400">New</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick('career')} 
                  className="text-orange-300 hover:text-white font-semibold transition-colors cursor-pointer text-left flex items-center gap-1"
                >
                  <span>Careers & Jobs</span>
                  <span className="text-[10px] bg-emerald-500/20 px-1 rounded text-emerald-400 font-bold">Hiring</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick('home', 'packages')} 
                  className="text-slate-400 hover:text-orange-400 transition-colors cursor-pointer text-left"
                >
                  Packages & Pricing
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick('home', 'services')} 
                  className="text-slate-400 hover:text-orange-400 transition-colors cursor-pointer text-left"
                >
                  Enterprise Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick('home', 'coverage')} 
                  className="text-slate-400 hover:text-orange-400 transition-colors cursor-pointer text-left"
                >
                  Coverage Map
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick('home', 'offices')} 
                  className="text-slate-400 hover:text-orange-400 transition-colors cursor-pointer text-left"
                >
                  Branch Offices
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick('home', 'contact')} 
                  className="text-slate-400 hover:text-orange-400 transition-colors cursor-pointer text-left"
                >
                  Book Connection
                </button>
              </li>
            </ul>
          </div>

          {/* Packages List */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Broadband Plans
            </h4>
            <ul className="space-y-2 text-xs">
              <li className="flex justify-between text-slate-400">
                <span>Starter 25 (25 Mbps)</span>
                <span className="text-slate-200 font-mono font-bold">৳525/mo</span>
              </li>
              <li className="flex justify-between text-slate-400">
                <span>Home 45 (45 Mbps)</span>
                <span className="text-slate-200 font-mono font-bold">৳655/mo</span>
              </li>
              <li className="flex justify-between text-orange-400 font-bold bg-slate-900 p-1.5 rounded-lg border border-orange-500/30">
                <span>Turbo 80 (80 Mbps) ★</span>
                <span className="text-orange-400 font-mono">৳785/mo</span>
              </li>
              <li className="flex justify-between text-slate-400">
                <span>Pro Max 120 (120 Mbps)</span>
                <span className="text-slate-200 font-mono font-bold">৳1050/mo</span>
              </li>
              <li className="flex justify-between text-slate-400">
                <span>Ultra Giga 200 (200 Mbps)</span>
                <span className="text-slate-200 font-mono font-bold">৳1500/mo</span>
              </li>
            </ul>
          </div>

          {/* Khulna Branches */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Official Branch Desks
            </h4>
            <div className="space-y-2 text-xs text-slate-400">
              <div>
                <strong className="text-slate-200">SpeedNet NOC (Headquarters):</strong> 83/3 Gagon Babu Road, Ground & 1st Floor (01910 365533)
              </div>
              <div>
                <strong className="text-slate-200">Sonadanga Branch:</strong> Main Road, Sonadanga Residential Area (01910 384433)
              </div>
              <div>
                <strong className="text-slate-200">Gollamari Branch:</strong> Sohan Mansion, Mohammad Nagar (01970 365500)
              </div>
              <div>
                <strong className="text-slate-200">Boyra Branch:</strong> Haque Tower, Mujgunni Main Road (01970 365511)
              </div>
            </div>
          </div>

        </div>

        {/* Regulatory & Bottom Copyright */}
        <div className="pt-10 mt-10 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            <span>Licensed Internet Service Provider (ISP) • Registered with BTRC</span>
          </div>

          <div className="flex items-center gap-4">
            <button 
              onClick={() => handleLinkClick('about')}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              About
            </button>
            <button 
              onClick={() => handleLinkClick('career')}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              Careers
            </button>
            <span>© {new Date().getFullYear()} Speed Net. All rights reserved.</span>
            
            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-lg bg-slate-900 hover:bg-orange-600 text-slate-400 hover:text-white flex items-center justify-center transition-colors cursor-pointer ml-2"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
