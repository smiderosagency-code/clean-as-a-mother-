import { Heart, Users, Sparkles, ShieldCheck } from 'lucide-react';

export function AboutFounder() {
  return (
    <section id="about" className="py-20 bg-[#F4EFEB] border-y border-[#EAE3DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Portrait Image Column */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden bg-[#FAF8F5] border border-[#EAE3DC] aspect-4/5 shadow-lg group">
              <picture className="w-full h-full block">
                <source srcSet="/images/founder-shade.webp" type="image/webp" />
                <img
                  src="/images/founder-shade.webp"
                  alt="Shade Jonas, founder of Clean as a Mother in Oklahoma City"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  decoding="async"
                  width={1200}
                  height={896}
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (!target.src.includes('.jpg')) {
                      target.src = '/images/founder-shade.jpg';
                    }
                  }}
                />
              </picture>
              <div className="absolute inset-0 bg-gradient-to-t from-[#11241C]/75 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-6 left-6 right-6 text-[#FAF8F5]">
                <p className="text-xs uppercase tracking-wider font-semibold text-[#D8AB5A]">
                  Founder & Owner
                </p>
                <h3 className="text-xl sm:text-2xl font-semibold font-editorial">
                  Shade Jonas
                </h3>
                <p className="text-xs text-[#FAF8F5]/80 mt-1">
                  Founded in Oklahoma City, Spring 2020
                </p>
              </div>
            </div>
          </div>

          {/* Editorial Storytelling Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-widest font-semibold text-[#4F6D60]">
                The Story Behind the Name
              </p>
              <h2 className="text-3xl sm:text-4xl font-semibold text-[#171C19] font-editorial leading-tight">
                Built on Empowerment, Family First, and Meticulous Care
              </h2>
            </div>

            <p className="text-base text-[#313B35] leading-relaxed">
              In the spring of 2020, Shade Jonas and her husband founded <span className="font-semibold text-[#171C19]">Clean as a Mother</span> with a clear dual purpose: to give Oklahoma City families the peace of returning to an immaculate home, and to create meaningful, flexible career opportunities for single mothers and stay-at-home parents with limited availability.
            </p>

            <p className="text-base text-[#4A564F] leading-relaxed">
              Too often, traditional employment forces parents to choose between providing for their family and being present for school pickups, doctor appointments, and sick days. Shade built a company structure centered around respect, competitive pay, and flexible scheduling.
            </p>

            {/* Core Values Strip */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#EAE3DC] space-y-1">
                <div className="flex items-center gap-2 text-sm font-semibold text-[#171C19]">
                  <Users className="w-4 h-4 text-[#244638]" />
                  <span>30+ Empowered Cleaners</span>
                </div>
                <p className="text-xs text-[#67756D]">
                  A cohesive, thoroughly vetted team where every cleaner is supported, bonded, and valued.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#EAE3DC] space-y-1">
                <div className="flex items-center gap-2 text-sm font-semibold text-[#171C19]">
                  <Heart className="w-4 h-4 text-[#A87E34]" />
                  <span>People-Centered Service</span>
                </div>
                <p className="text-xs text-[#67756D]">
                  Direct, compassionate communication from initial quote review through every routine visit.
                </p>
              </div>
            </div>

            <blockquote className="p-4 rounded-xl border-l-2 border-[#244638] bg-[#FAF8F5]/60 text-sm text-[#313B35] italic">
              “When our team is respected and cared for, they bring genuine pride and warmth into every home they touch. Clean as a Mother is about reclaiming your weekends and caring for our community.”
              <span className="block not-italic font-semibold text-xs text-[#171C19] mt-2">
                — Shade Jonas, Founder
              </span>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
