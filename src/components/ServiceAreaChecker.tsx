import { useState } from 'react';
import { MapPin, Search, CheckCircle2, HelpCircle, ArrowRight } from 'lucide-react';
import { checkZipCoverage, ZipResult } from '../data/okcZipCodes';

interface ServiceAreaCheckerProps {
  onSelectZip: (zip: string) => void;
}

export function ServiceAreaChecker({ onSelectZip }: ServiceAreaCheckerProps) {
  const [zipInput, setZipInput] = useState('');
  const [searched, setSearched] = useState(false);
  const [result, setResult] = useState<ZipResult | null>(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!zipInput.trim()) return;
    const lookup = checkZipCoverage(zipInput);
    setResult(lookup);
    setSearched(true);
  };

  const counties = [
    { name: 'Oklahoma County', note: 'OKC, Edmond, Nichols Hills, The Village, Bethany' },
    { name: 'Canadian County', note: 'Yukon, Mustang, Piedmont' },
    { name: 'Cleveland County', note: 'Norman, Moore, South OKC' },
    { name: 'Logan County', note: 'Guthrie, Southern Logan County' },
    { name: 'Lincoln County', note: 'Select Metro Boundary Areas' },
    { name: 'Kingfisher County', note: 'Surrounding Regional Coverage' },
  ];

  return (
    <section id="service-area" className="py-20 bg-[#F4EFEB] border-t border-[#EAE3DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Description & Counties */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <p className="text-xs uppercase tracking-widest font-semibold text-[#4F6D60]">
                Regional Coverage
              </p>
              <h2 className="text-3xl sm:text-4xl font-semibold text-[#171C19] font-editorial mt-2">
                Proudly Serving the Oklahoma City Metro Area
              </h2>
            </div>

            <p className="text-base text-[#4A564F] leading-relaxed">
              Clean as a Mother provides scheduled routine and deep cleaning across Oklahoma County and neighboring metropolitan communities. Our local teams are strategically scheduled to ensure punctual, unhurried service.
            </p>

            {/* County Coverage Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {counties.map((county) => (
                <div
                  key={county.name}
                  className="p-3.5 rounded-xl bg-[#FAF8F5] border border-[#EAE3DC]"
                >
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-[#171C19]">
                    <MapPin className="w-3.5 h-3.5 text-[#244638]" />
                    <span>{county.name}</span>
                  </div>
                  <p className="text-xs text-[#67756D] mt-0.5">
                    {county.note}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Interactive ZIP Code Checker */}
          <div className="lg:col-span-6">
            <div className="bg-[#FAF8F5] p-6 sm:p-8 rounded-2xl border border-[#EAE3DC] shadow-sm space-y-6">
              <div className="space-y-1">
                <span className="text-xs uppercase tracking-wider font-semibold text-[#67756D]">
                  Location Availability
                </span>
                <h3 className="text-xl font-semibold text-[#171C19] font-editorial">
                  Check Service in Your ZIP Code
                </h3>
                <p className="text-xs text-[#4A564F]">
                  Enter your 5-digit Oklahoma postal code to confirm immediate coverage for your neighborhood.
                </p>
              </div>

              <form onSubmit={handleSearch} className="space-y-4">
                <div className="relative">
                  <input
                    type="text"
                    maxLength={5}
                    value={zipInput}
                    onChange={(e) => {
                      setZipInput(e.target.value.replace(/\D/g, ''));
                      setSearched(false);
                    }}
                    placeholder="Enter 5-digit ZIP (e.g. 73003, 73116, 73099)"
                    className="w-full px-4 py-3 text-sm rounded-xl border border-[#D9D1C7] bg-[#FCFBF9] text-[#171C19] placeholder-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#244638] focus:border-transparent transition-all"
                    required
                  />
                  <button
                    type="submit"
                    className="absolute right-1.5 top-1.5 bottom-1.5 px-4 text-xs font-semibold text-[#FAF8F5] bg-[#244638] hover:bg-[#1B362B] rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer"
                  >
                    <Search className="w-3.5 h-3.5" />
                    <span>Check</span>
                  </button>
                </div>
              </form>

              {/* Result State */}
              {searched && (
                <div className="animate-in fade-in duration-200">
                  {result ? (
                    <div className="p-4 rounded-xl bg-[#E9EFEA] border border-[#CCDCD1] space-y-2">
                      <div className="flex items-center gap-2 text-sm font-semibold text-[#1B362B]">
                        <CheckCircle2 className="w-5 h-5 text-[#244638] shrink-0" />
                        <span>Confirmed Service Area</span>
                      </div>
                      <p className="text-xs text-[#244638] leading-relaxed">
                        We actively service homes and businesses in <strong className="font-semibold">{result.city}</strong> ({result.county}, {result.zip}).
                      </p>
                      <button
                        onClick={() => onSelectZip(result.zip)}
                        className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold text-[#1B362B] hover:text-[#11241C] underline cursor-pointer"
                      >
                        <span>Apply {result.zip} to Quote Request</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ) : (
                    <div className="p-4 rounded-xl bg-[#F8F1E2] border border-[#E8D9BD] space-y-2">
                      <div className="flex items-center gap-2 text-sm font-semibold text-[#7D5B18]">
                        <HelpCircle className="w-5 h-5 text-[#A87E34] shrink-0" />
                        <span>Special Confirmation Needed</span>
                      </div>
                      <p className="text-xs text-[#7D5B18] leading-relaxed">
                        Enter your ZIP code and we'll confirm availability for your area. We accommodate properties throughout neighboring areas on a custom schedule.
                      </p>
                      <button
                        onClick={() => onSelectZip(zipInput)}
                        className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold text-[#7D5B18] hover:text-[#4F390E] underline cursor-pointer"
                      >
                        <span>Continue Quote Request for {zipInput}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  )}
                </div>
              )}

              {/* Default Guidance when not yet searched */}
              {!searched && (
                <p className="text-xs text-[#67756D] italic">
                  Serving Oklahoma City, Edmond, Norman, Moore, Yukon, Mustang, Nichols Hills, Deer Creek, Piedmont, Guthrie and surrounding metro zip codes.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
