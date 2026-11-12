import { FileText, Clock, CheckCircle, ArrowRight } from 'lucide-react';

interface QuoteProcessProps {
  onStartQuote: () => void;
}

export function QuoteProcess({ onStartQuote }: QuoteProcessProps) {
  const steps = [
    {
      num: '01',
      title: 'Tell Us About Your Space',
      desc: 'Select whether your space is residential or commercial, your preferred service level (routine vs. deep clean), room counts, and any desired add-ons like inside ovens or fridges.',
      highlight: 'Takes 90 seconds',
    },
    {
      num: '02',
      title: 'We Review Your Cleaning Needs',
      desc: 'Our local leadership team personally reviews your home layout, frequency preference, and scheduling requirements to assign the ideal cleaners for your routine.',
      highlight: 'Typical 1 business day reply',
    },
    {
      num: '03',
      title: 'Receive Your Personalized Quote',
      desc: 'You receive a transparent, itemized quote based specifically on your square footage, room counts, and requested cadence—with zero unexpected surprises.',
      highlight: 'Clear & obligation-free',
    },
  ];

  return (
    <section className="py-20 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs uppercase tracking-widest font-semibold text-[#4F6D60]">
            Transparent & Thoughtful
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#171C19] font-editorial mt-2">
            How Getting a Quote Works
          </h2>
          <p className="text-base text-[#4A564F] mt-3 leading-relaxed">
            Every home and office in Oklahoma City has unique square footage and needs. We never give generic one-size-fits-all estimates. Here is how our simple 3-step quoting process works:
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div
              key={step.num}
              className="relative p-7 rounded-2xl bg-[#F4EFEB] border border-[#EAE3DC] space-y-4 hover:border-[#D9D1C7] transition-all group"
            >
              <div className="flex items-center justify-between">
                <span className="text-3xl font-semibold text-[#244638] font-editorial tabular-nums">
                  {step.num}
                </span>
                <span className="text-xs font-semibold px-2.5 py-1 rounded bg-[#FAF8F5] text-[#313B35] border border-[#EAE3DC]">
                  {step.highlight}
                </span>
              </div>

              <h3 className="text-xl font-semibold text-[#171C19] font-editorial">
                {step.title}
              </h3>

              <p className="text-sm text-[#4A564F] leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Note on Pricing Factors & Guarantee Policy */}
        <div className="mt-12 p-6 rounded-2xl bg-[#FAF8F5] border border-[#EAE3DC] max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <h4 className="text-sm font-semibold text-[#171C19]">
                What determines your quote?
              </h4>
              <p className="text-xs text-[#67756D] leading-relaxed">
                Final pricing depends on square footage, bedroom & bathroom counts, cleaning frequency, initial condition, and any requested interior appliance add-ons.
              </p>
            </div>
            <button
              onClick={onStartQuote}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-[#FAF8F5] bg-[#244638] hover:bg-[#1B362B] rounded-lg transition-colors cursor-pointer whitespace-nowrap shrink-0 shadow-xs"
            >
              <span>Start Your Free Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
