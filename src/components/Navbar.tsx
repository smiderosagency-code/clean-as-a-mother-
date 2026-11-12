import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenQuote: (serviceType?: string) => void;
}

export function Navbar({ onOpenQuote }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#' },
    { label: 'Services', href: '#services' },
    { label: 'About Us', href: '#about' },
    { label: 'Service Area', href: '#service-area' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-[#FAF8F5]/90 backdrop-blur-md border-b border-[#E8E2D9] shadow-xs'
          : 'bg-[#FAF8F5] border-b border-[#EFECE5]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-20">
          {/* Zone 1: Brand Wordmark (Display Serif Face, single clean element) */}
          <a
            href="#"
            className="flex items-center gap-2 text-2xl sm:text-2xl font-semibold tracking-tight text-[#171C19] font-editorial whitespace-nowrap shrink-0 group"
          >
            <span className="text-[#244638] group-hover:text-[#1B362B] transition-colors">
              Clean as a Mother
            </span>
          </a>

          {/* Zone 2: 5 single-line clean text navigation links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#4A564F]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-[#171C19] transition-colors whitespace-nowrap shrink-0 py-1 border-b border-transparent hover:border-[#244638]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              onClick={() => onOpenQuote()}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-[#FAF8F5] bg-[#244638] hover:bg-[#1B362B] active:bg-[#11241C] rounded-lg transition-colors shadow-xs whitespace-nowrap shrink-0 cursor-pointer"
            >
              <span>Get a Free Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex sm:hidden items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#313B35] hover:bg-[#EAE3DC] transition-colors"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-b border-[#E8E2D9] bg-[#FAF8F5] px-4 pt-3 pb-6 shadow-md animate-in slide-in-from-top-2 duration-150">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-base font-medium text-[#313B35] hover:bg-[#F4EFEB] rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-[#EAE3DC]">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuote();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-[#FAF8F5] bg-[#244638] rounded-lg shadow-xs"
              >
                <span>Get a Free Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
