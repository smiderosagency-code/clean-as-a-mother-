import { Mail, MapPin, ShieldCheck, Clock, ExternalLink } from 'lucide-react';

interface FooterProps {
  onOpenQuote: () => void;
}

export function Footer({ onOpenQuote }: FooterProps) {
  return (
    <footer id="contact" className="bg-[#11241C] text-[#FAF8F5] pt-16 pb-12 border-t border-[#1B362B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-[#244638]">
          {/* Col 1: Brand & Purpose */}
          <div className="lg:col-span-5 space-y-4">
            <span className="text-2xl font-semibold tracking-tight text-[#FAF8F5] font-editorial">
              Clean as a Mother
            </span>
            <p className="text-sm text-[#D8AB5A] font-medium">
              Thoughtful residential and commercial cleaning for the Oklahoma City metropolitan area.
            </p>
            <p className="text-xs text-[#E9EFEA]/80 leading-relaxed max-w-sm">
              Founded in spring 2020 by Shade Jonas and her husband with the mission of creating flexible, empowering employment for single mothers and local parents while providing exceptional care for Oklahoma homes.
            </p>
            <div className="pt-2 flex items-center gap-3 text-xs text-[#CCDCD1]">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#D8AB5A]" />
                <span>Fully Insured & Bonded</span>
              </span>
              <span aria-hidden="true">·</span>
              <span>15,000+ Properties Cleaned</span>
            </div>
          </div>

          {/* Col 2: Services Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#D8AB5A]">
              Services
            </p>
            <ul className="space-y-2 text-sm text-[#E9EFEA]">
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Routine House Cleaning
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Deep Residential Cleaning
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Commercial & Office Cleaning
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Move-In / Move-Out Cleans
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenQuote}
                  className="text-xs font-semibold text-[#D8AB5A] hover:underline pt-1 block cursor-pointer"
                >
                  Request a Custom Estimate →
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Verified Contact Info & Service Area */}
          <div className="lg:col-span-4 space-y-3">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#D8AB5A]">
              Verified Contact
            </p>
            <div className="space-y-2.5 text-xs text-[#E9EFEA]">
              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#D8AB5A] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-[#FAF8F5] font-medium">Direct Inquiries:</span>
                  <a
                    href="mailto:shade@cleanasamotherok.com"
                    className="hover:underline text-[#E9EFEA] hover:text-white"
                  >
                    shade@cleanasamotherok.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D8AB5A] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-[#FAF8F5] font-medium">Service Coverage:</span>
                  <span>Oklahoma City Metro, Edmond, Norman, Moore, Yukon, Mustang, Nichols Hills, Deer Creek, Piedmont, Guthrie</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#D8AB5A] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-[#FAF8F5] font-medium">Availability:</span>
                  <span>Typical quote review within 1 business day.</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Required Agency Attribution */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A1B3A9]">
          <div>
            © {new Date().getFullYear()} Clean as a Mother. All rights reserved.
          </div>
          <div className="text-center sm:text-right text-[#D8AB5A]/90 font-medium">
            Independent website redesign concept by S.Mideros Agency.
          </div>
        </div>
      </div>
    </footer>
  );
}
