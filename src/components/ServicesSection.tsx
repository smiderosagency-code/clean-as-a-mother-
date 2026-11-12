import { useState } from 'react';
import { ArrowRight, Check, ListChecks, Calendar, Sparkles } from 'lucide-react';
import { ServiceChecklistModal } from './ServiceChecklistModal';

interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void;
}

export function ServicesSection({ onSelectService }: ServicesSectionProps) {
  const [checklistOpen, setChecklistOpen] = useState(false);

  const services = [
    {
      id: 'routine',
      name: 'Routine House Cleaning',
      badge: 'Most Popular',
      frequency: 'Weekly · Bi-Weekly · Every 4 Weeks',
      tagline: 'Reliable, continuous freshness for families who value their free time.',
      image: '/images/routine-clean.webp',
      fallbackImage: '/images/routine-clean.jpg',
      alt: 'Clean, bright modern kitchen island with sparkling countertops and fresh eucalyptus',
      description:
        'Designed to maintain a pristine baseline throughout your home. Our team handles the routine heavy lifting so you return to a serene, thoroughly reset space every cycle.',
      inclusions: [
        'Dusting all reachable tables, surfaces & decor',
        'Kitchen countertops, sinks, and exterior appliances wiped',
        'Cooktop scrubbed and microwave sanitized inside/out',
        'Complete bathroom sanitation, sinks, mirrors & toilets',
        'Beds made / tidied & trash receptacles emptied',
        'Hard floors vacuumed and washed; carpets vacuumed',
      ],
      ctaLabel: 'Request Routine Cleaning Quote',
    },
    {
      id: 'deep',
      name: 'Deep Residential Cleaning',
      badge: 'Seasonal or Reset',
      frequency: 'One-Time · Spring / Fall · Pre-Event',
      tagline: 'Meticulous top-to-bottom detailing for homes needing intensive rejuvenation.',
      image: '/images/deep-clean.webp',
      fallbackImage: '/images/deep-clean.jpg',
      alt: 'Detailed sparkling bathroom with polished chrome fixtures and rolled towels',
      description:
        'An exhaustive deep-dive that tackles accumulated grime, neglected corners, baseboards, and built-up soap scum. Ideal as an initial reset before routine care or between seasons.',
      inclusions: [
        'All routine cleaning inclusions PLUS detailed detailing',
        'Baseboards and door frames hand-wiped throughout',
        'Window sills, tracks, and reachable blinds hand-dusted',
        'High dusting of ceiling fans, vents, and light fixtures',
        'Intensive bathroom tile grout and shower door scrubbing',
        'Detailed cabinet frontals and switch plates cleaned',
      ],
      ctaLabel: 'Request Deep Cleaning Quote',
    },
    {
      id: 'commercial',
      name: 'Commercial & Office Cleaning',
      badge: 'Workplaces & Studios',
      frequency: 'Custom Schedules · After-Hours · Weekend',
      tagline: 'Spotless workspaces that impress clients and energize your team.',
      image: '/images/commercial-clean.webp',
      fallbackImage: '/images/commercial-clean.jpg',
      alt: 'Immaculate boutique Oklahoma City commercial office with clean conference room and desks',
      description:
        'Tailored janitorial care for boutique offices, professional suites, law firms, creative agencies, and retail shops across the OKC metro. Consistent, bonded, and dependable.',
      inclusions: [
        'Reception areas, lobby surfaces, and glass entry doors',
        'Workstation dusting, conference rooms & tables cleaned',
        'Breakroom kitchenettes, sink, counters & exterior microwave',
        'Complete commercial restroom sanitation and restocking',
        'Trash and recycling collection with fresh liners',
        'Hard floor mopping, high-traffic vacuuming & edge cleaning',
      ],
      ctaLabel: 'Request Commercial Quote',
    },
  ];

  const addOns = [
    { name: 'Inside Oven Detailing', desc: 'Baked-on grease and rack degreasing.' },
    { name: 'Inside Refrigerator', desc: 'Complete shelf removal, sanitizing & wipe down.' },
    { name: 'Interior Cabinets', desc: 'Empty cabinets and drawers detailed inside.' },
    { name: 'Move-In / Move-Out', desc: 'Full property turnover ready for keys and lease transfer.' },
  ];

  return (
    <section id="services" className="py-20 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-xs uppercase tracking-widest font-semibold text-[#4F6D60]">
            Cleaning Capabilities
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#171C19] font-editorial mt-2">
            Services Tailored to the Way You Live & Work
          </h2>
          <p className="text-base sm:text-lg text-[#4A564F] mt-4 leading-relaxed font-normal">
            Whether you need weekly household relief, a seasonal top-to-bottom reset, or after-hours commercial care, Clean as a Mother brings vetted, dependable excellence to every visit.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <button
              onClick={() => setChecklistOpen(true)}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#244638] hover:text-[#11241C] border-b border-[#244638] pb-0.5 transition-colors cursor-pointer"
            >
              <ListChecks className="w-4 h-4" />
              <span>Compare Routine vs. Deep Clean Checklist</span>
            </button>
          </div>
        </div>

        {/* 3 Main Services (Editorial Asymmetric Layout) */}
        <div className="space-y-16 lg:space-y-24">
          {services.map((service, idx) => {
            const isReversed = idx % 2 === 1;
            return (
              <div
                key={service.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                  isReversed ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Visual Image Column */}
                <div
                  className={`lg:col-span-6 ${
                    isReversed ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <div className="relative rounded-2xl overflow-hidden bg-[#F4EFEB] border border-[#EAE3DC] aspect-4/3 group shadow-md">
                    <picture className="w-full h-full block">
                      <source srcSet={service.image} type="image/webp" />
                      <img
                        src={service.image}
                        alt={service.alt}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
                        referrerPolicy="no-referrer"
                        loading="lazy"
                        decoding="async"
                        width={1200}
                        height={900}
                        onError={(e) => {
                          const target = e.currentTarget;
                          if (service.fallbackImage && !target.src.includes('.jpg')) {
                            target.src = service.fallbackImage;
                          }
                        }}
                      />
                    </picture>
                    <div className="absolute top-4 left-4">
                      <span className="inline-block px-3 py-1 rounded-md text-xs font-semibold bg-[#FAF8F5]/95 text-[#171C19] shadow-xs backdrop-blur-xs">
                        {service.badge}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content Column */}
                <div
                  className={`lg:col-span-6 space-y-5 ${
                    isReversed ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <div className="text-xs uppercase tracking-wider font-semibold text-[#67756D]">
                    {service.frequency}
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-semibold text-[#171C19] font-editorial">
                    {service.name}
                  </h3>

                  <p className="text-base text-[#313B35] leading-relaxed">
                    {service.description}
                  </p>

                  {/* Verified Inclusions Checklist */}
                  <div className="pt-2">
                    <h4 className="text-xs uppercase tracking-wider font-semibold text-[#4F6D60] mb-3">
                      Core Inclusions:
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-[#4A564F]">
                      {service.inclusions.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-[#244638] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Service CTA */}
                  <div className="pt-4">
                    <button
                      onClick={() => onSelectService(service.name)}
                      className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-[#FAF8F5] bg-[#244638] hover:bg-[#1B362B] rounded-lg transition-colors cursor-pointer shadow-xs whitespace-nowrap"
                    >
                      <span>{service.ctaLabel}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Verified Options Strip */}
        <div className="mt-20 pt-12 border-t border-[#EAE3DC]">
          <div className="max-w-2xl mb-8">
            <p className="text-xs uppercase tracking-widest font-semibold text-[#4F6D60]">
              Custom Add-On Services
            </p>
            <h3 className="text-xl sm:text-2xl font-semibold text-[#171C19] font-editorial mt-1">
              Optional Add-Ons for Extra Detailing
            </h3>
            <p className="text-sm text-[#4A564F] mt-1">
              Add any of these specialized services to your routine or deep cleaning quote with a single click.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {addOns.map((addon) => (
              <div
                key={addon.name}
                className="p-5 rounded-xl bg-[#F4EFEB] border border-[#EAE3DC] space-y-1 hover:border-[#D9D1C7] transition-colors"
              >
                <h4 className="text-sm font-semibold text-[#171C19]">
                  {addon.name}
                </h4>
                <p className="text-xs text-[#67756D] leading-relaxed">
                  {addon.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Comparison Modal */}
      <ServiceChecklistModal
        isOpen={checklistOpen}
        onClose={() => setChecklistOpen(false)}
        onSelectService={(selected) => {
          setChecklistOpen(false);
          onSelectService(selected);
        }}
      />
    </section>
  );
}
