import { ArrowRight, ShieldCheck, Award, Sparkles, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onOpenQuote: () => void;
}

export function Hero({ onOpenQuote }: HeroProps) {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Value Proposition */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            {/* Quiet Editorial Kicker */}
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#3F574D]">
              <span>Oklahoma City Metro</span>
              <span aria-hidden="true">·</span>
              <span>Locally Founded & Operated</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-[#171C19] font-editorial leading-[1.12] text-balance">
              A Beautifully Clean Home.{' '}
              <span className="italic font-normal text-[#244638]">
                More Time for What Matters.
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-[#4A564F] leading-relaxed max-w-2xl font-normal">
              Thoughtful residential routine cleaning, deep cleaning, and commercial care tailored for families and local businesses across the greater Oklahoma City metro area.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={onOpenQuote}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-base font-semibold text-[#FAF8F5] bg-[#244638] hover:bg-[#1B362B] active:bg-[#11241C] rounded-xl transition-all shadow-sm hover:shadow-md cursor-pointer whitespace-nowrap"
              >
                <span>Get a Free Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-medium text-[#244638] bg-[#FAF8F5] hover:bg-[#F4EFEB] border border-[#D9D1C7] rounded-xl transition-colors whitespace-nowrap"
              >
                Explore Our Services
              </a>
            </div>

            {/* Trust Highlights Strip */}
            <div className="pt-4 border-t border-[#EAE3DC] grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-[#313B35]">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#244638] shrink-0" />
                <span className="font-medium">Fully Insured & Bonded</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-[#A87E34] shrink-0" />
                <span className="font-medium">#1 Best Cleaning in Edmond (2025)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#244638] shrink-0" />
                <span className="font-medium">15,000+ Properties Cleaned</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Asset */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden bg-[#F4EFEB] shadow-xl border border-[#EAE3DC] aspect-4/3 sm:aspect-16/10 lg:aspect-4/5 group">
              <picture className="w-full h-full block">
                <source srcSet="/images/hero-cleaning.webp" type="image/webp" />
                <source srcSet="/images/hero-home-clean.webp" type="image/webp" />
                <img
                  src="/images/hero-cleaning.webp"
                  alt="Bright, pristine, sunlit Oklahoma living room and kitchen cared for by Clean as a Mother"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
                  referrerPolicy="no-referrer"
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  width={1376}
                  height={768}
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (!target.src.includes('.jpg')) {
                      target.src = '/images/hero-home-clean.jpg';
                    }
                  }}
                />
              </picture>
              
              {/* Subtle ambient lighting scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#11241C]/60 via-transparent to-transparent pointer-events-none" />

              {/* Bottom In-Image Badge Card */}
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-[#FAF8F5]/95 backdrop-blur-md border border-[#FAF8F5] shadow-lg text-[#171C19]">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-wider font-semibold text-[#67756D]">
                      Locally Rooted Team
                    </p>
                    <p className="text-sm font-semibold text-[#171C19] mt-0.5">
                      30+ Professional, Vetted Cleaners
                    </p>
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 bg-[#E9EFEA] text-[#1B362B] rounded-md">
                    OKC Metro
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
