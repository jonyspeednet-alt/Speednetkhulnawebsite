import { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, Crown, Sparkles, Briefcase } from 'lucide-react';

interface NavbarProps {
  onBookClick: () => void;
  onOpenEliteModal: () => void;
  currentPage: 'home' | 'about' | 'career';
  onNavigatePage: (page: 'home' | 'about' | 'career', targetSection?: string) => void;
}

export default function Navbar({ 
  onBookClick, 
  onOpenEliteModal,
  currentPage, 
  onNavigatePage 
}: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      if (currentPage === 'home') {
        const sections = ['home', 'packages', 'services', 'coverage', 'offices', 'contact'];
        const scrollPosition = window.scrollY + 120;

        for (const section of sections) {
          const el = document.getElementById(section);
          if (el) {
            const top = el.offsetTop;
            const height = el.offsetHeight;
            if (scrollPosition >= top && scrollPosition < top + height) {
              setActiveSection(section);
              break;
            }
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentPage]);

  const navItems = [
    { label: 'Home', type: 'page' as const, page: 'home' as const, section: 'home' },
    { label: 'About Us', type: 'page' as const, page: 'about' as const },
    { label: 'Packages', type: 'section' as const, page: 'home' as const, section: 'packages' },
    { label: 'Services', type: 'section' as const, page: 'home' as const, section: 'services' },
    { label: 'Coverage & Offices', type: 'section' as const, page: 'home' as const, section: 'coverage' },
    { label: 'Career', type: 'page' as const, page: 'career' as const, badge: 'Hiring' },
    { label: 'Contact', type: 'section' as const, page: 'home' as const, section: 'contact' },
  ];

  const handleNavClick = (page: 'home' | 'about' | 'career', section?: string) => {
    setMobileMenuOpen(false);
    onNavigatePage(page, section);
  };

  return (
    <header 
      className={`sticky top-0 z-40 transition-all duration-300 font-display ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-xl border-b border-slate-200/80 shadow-md py-1.5' 
          : 'bg-white/70 backdrop-blur-lg border-b border-slate-200/60 py-2.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {/* Speed Net Official Logo */}
          <button 
            onClick={() => handleNavClick('home', 'home')}
            className="flex items-center group focus:outline-none shrink-0 cursor-pointer"
            aria-label="Speed Net - back to home"
          >
            <img
              src="/images/speednet-logo-transparent.png"
              alt="Speed Net - Beyond your imagination | Internet Service Provider"
              width={160}
              height={75}
              className="h-11 sm:h-14 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]"
            />
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const isCurrent = item.type === 'page'
                ? currentPage === item.page && (item.page !== 'home' || activeSection === 'home')
                : currentPage === 'home' && activeSection === item.section;

              return (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.page, item.section)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                    isCurrent 
                      ? 'text-orange-600 bg-orange-50/90 shadow-xs' 
                      : 'text-slate-700 hover:text-orange-600 hover:bg-slate-100/70'
                  }`}
                >
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className="px-1.5 py-0.2 rounded-full text-[10px] font-extrabold bg-emerald-100 text-emerald-700">
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action Buttons: Elite Membership VIP & Get Connection */}
          <div className="hidden sm:flex items-center gap-2.5">
            
            {/* Elite Membership VIP Button */}
            <button
              onClick={onOpenEliteModal}
              className="group relative px-3.5 py-2 rounded-xl bg-gradient-to-r from-amber-500/15 via-yellow-500/20 to-amber-500/15 hover:from-amber-500/25 hover:to-yellow-500/30 text-amber-900 border border-amber-500/30 font-bold text-xs shadow-xs hover:shadow-amber-500/20 transition-all cursor-pointer flex items-center gap-1.5 backdrop-blur-md active:scale-95"
              title="SpeedNet Elite VIP Membership"
            >
              <Crown className="w-3.5 h-3.5 text-amber-600 fill-amber-500 group-hover:rotate-12 transition-transform" />
              <span className="tracking-wide">Elite Membership</span>
              <Sparkles className="w-3 h-3 text-amber-500 animate-pulse" />
            </button>

            {/* Get Connection CTA Button */}
            <button
              onClick={onBookClick}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white font-bold text-xs shadow-md shadow-orange-600/20 active:scale-95 transition-all cursor-pointer flex items-center gap-1.5"
            >
              <span>Get Connection</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu & Quick Actions */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenEliteModal}
              className="p-2 rounded-xl bg-amber-50 border border-amber-300 text-amber-800 flex items-center gap-1 text-xs font-bold sm:hidden"
              title="Elite Membership"
            >
              <Crown className="w-3.5 h-3.5 text-amber-600 fill-amber-500" />
              <span className="text-[11px]">Elite</span>
            </button>

            <button
              onClick={onBookClick}
              className="px-3 py-1.5 rounded-xl bg-orange-600 text-white font-bold text-xs sm:hidden"
            >
              Apply
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:text-orange-600 hover:bg-slate-100 transition-colors cursor-pointer"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200/80 bg-white/95 backdrop-blur-2xl px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top-2 duration-150 shadow-xl">
          <div className="space-y-1">
            {navItems.map((item) => {
              const isCurrent = item.type === 'page'
                ? currentPage === item.page
                : currentPage === 'home' && activeSection === item.section;

              return (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.page, item.section)}
                  className={`w-full text-left px-3.5 py-2.5 rounded-xl text-sm font-bold transition-all cursor-pointer flex items-center justify-between ${
                    isCurrent 
                      ? 'text-orange-600 bg-orange-50 font-black' 
                      : 'text-slate-800 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span>{item.label}</span>
                    {item.badge && (
                      <span className="px-1.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-700">
                        {item.badge}
                      </span>
                    )}
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </button>
              );
            })}
          </div>

          <div className="pt-3 border-t border-slate-100 space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEliteModal();
              }}
              className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-amber-500/20 to-yellow-500/20 border border-amber-400/50 text-amber-900 font-bold text-xs flex items-center justify-center gap-2 cursor-pointer shadow-xs"
            >
              <Crown className="w-4 h-4 text-amber-600 fill-amber-500" />
              <span>SpeedNet Elite Membership</span>
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onBookClick();
              }}
              className="w-full py-3 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-sm shadow-md text-center cursor-pointer transition-colors"
            >
              Get New Connection
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
