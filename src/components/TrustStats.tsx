import { ShieldCheck, Award, HeartHandshake, Users } from 'lucide-react';

export function TrustStats() {
  const highlights = [
    {
      figure: '15,000+',
      label: 'Properties Cleaned',
      detail: 'Homes and businesses serviced across the greater OKC metropolitan area.',
    },
    {
      figure: '30+',
      label: 'Professional Cleaners',
      detail: 'Empowered single mothers and local parents with dignified, flexible employment.',
    },
    {
      figure: '#1 Best',
      label: 'Home Cleaning in Edmond',
      detail: 'Awarded 2025 Quality Business Award with a verified 95%+ standard score.',
    },
    {
      figure: '100%',
      label: 'Insured & Bonded',
      detail: 'Full general liability and bonding coverage for complete homeowner peace of mind.',
    },
  ];

  return (
    <section className="bg-[#F4EFEB] border-y border-[#EAE3DC] py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Lead */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-[#DFD7CE] gap-4">
          <div>
            <p className="text-xs uppercase tracking-widest font-semibold text-[#4F6D60]">
              Verified Reputation & Track Record
            </p>
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#171C19] font-editorial mt-1">
              Trusted by Oklahoma City Families Since 2020
            </h2>
          </div>
          <div className="text-sm text-[#4A564F] max-w-md">
            Recognized by <span className="font-semibold text-[#171C19]">MetroFamily Magazine</span> (2023 & 2024 Readers’ Choice) and voted <span className="font-semibold text-[#171C19]">Nextdoor Neighborhood Favorite</span>.
          </div>
        </div>

        {/* 4-Column Stat Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, idx) => (
            <div key={idx} className="space-y-2">
              <div className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#244638] font-editorial tabular-nums">
                {item.figure}
              </div>
              <h3 className="text-base font-semibold text-[#171C19]">
                {item.label}
              </h3>
              <p className="text-sm text-[#4A564F] leading-relaxed">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
