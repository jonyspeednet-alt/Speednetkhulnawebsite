import { useState, useEffect } from 'react';
import { Menu, X, Phone, ChevronRight } from 'lucide-react';

interface NavbarProps {
  onBookClick: () => void;
  currentPage: 'home' | 'about' | 'career';
  onNavigatePage: (page: 'home' | 'about' | 'career', targetSection?: string) => void;
}

export default function Navbar({ onBookClick, currentPage, onNavigatePage }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
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
    { label: 'Coverage Map', type: 'section' as const, page: 'home' as const, section: 'coverage' },
    { label: 'Branch Offices', type: 'section' as const, page: 'home' as const, section: 'offices' },
    { label: 'Contact', type: 'section' as const, page: 'home' as const, section: 'contact' },
  ];

  const handleNavClick = (page: 'home' | 'about' | 'career', section?: string) => {
    setMobileMenuOpen(false);
    onNavigatePage(page, section);
  };

  return (
    <header 
      className={`sticky top-0 z-40 transition-all duration-200 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs py-1.5' 
          : 'bg-white/90 backdrop-blur-md border-b border-slate-200/80 py-2'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {/* Official Speed Net logo: complete lockup with both taglines */}
          <button 
            onClick={() => handleNavClick('home', 'home')}
            className="flex items-center group focus:outline-none shrink-0 cursor-pointer"
            aria-label="Speed Net - back to home"
          >
            <img
              src="/images/speednet-logo-transparent.png"
              alt="Speed Net - Beyond your imagination | Internet Service Provider"
              width={164}
              height={80}
              className="h-12 sm:h-16 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.03]"
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
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    isCurrent 
                      ? 'text-orange-600 bg-orange-50 font-black' 
                      : 'text-slate-700 hover:text-orange-600 hover:bg-slate-50'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action Button & Hotline */}
          <div className="hidden sm:flex items-center gap-3">
            <a 
              href="tel:09639333111" 
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-bold text-slate-700 hover:text-orange-600 transition-colors"
            >
              <div className="w-6 h-6 rounded-md bg-orange-100 text-orange-600 flex items-center justify-center">
                <Phone className="w-3.5 h-3.5" />
              </div>
              <span className="font-mono">09639333111</span>
            </a>

            <button
              onClick={onBookClick}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white font-bold text-xs shadow-md shadow-orange-600/20 active:scale-95 transition-all cursor-pointer flex items-center gap-1.5"
            >
              <span>Get Connection</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onBookClick}
              className="px-3 py-1.5 rounded-lg bg-orange-600 text-white font-bold text-xs sm:hidden"
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
        <div className="lg:hidden border-t border-slate-200 bg-white/95 backdrop-blur-lg px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top-2 duration-150">
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
                      ? 'text-orange-600 bg-orange-50' 
                      : 'text-slate-800 hover:bg-slate-50'
                  }`}
                >
                  <span>{item.label}</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </button>
              );
            })}
          </div>

          <div className="pt-3 border-t border-slate-100 space-y-2">
            <a 
              href="tel:09639333111" 
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl border border-slate-200 text-slate-800 text-xs font-bold font-mono"
            >
              <Phone className="w-4 h-4 text-orange-600" />
              <span>Call Hotline: 09639333111</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onBookClick();
              }}
              className="w-full py-3 rounded-xl bg-orange-600 text-white font-bold text-sm shadow-md text-center cursor-pointer"
            >
              Get New Connection
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
