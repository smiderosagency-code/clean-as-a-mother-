import { useState, useEffect } from 'react';
import {
  Check,
  ArrowRight,
  ArrowLeft,
  Home,
  Building2,
  Sparkles,
  Calendar,
  Lock,
  Mail,
  User,
  Phone,
  MapPin,
  Clock,
  ShieldCheck,
  Send,
} from 'lucide-react';
import { FREQUENCIES } from '../data/cleaningChecklists';

interface QuoteBuilderProps {
  initialService?: string;
  initialZip?: string;
  onClose?: () => void;
  isModal?: boolean;
}

export function QuoteBuilder({
  initialService = 'Routine House Cleaning',
  initialZip = '',
  onClose,
  isModal = false,
}: QuoteBuilderProps) {
  // Step state (1 = Cleaning Needs, 2 = Contact Information, 3 = Confirmation State)
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3>(1);

  // Form Fields - Step 1
  const [propertyType, setPropertyType] = useState<'residential' | 'commercial'>('residential');
  const [serviceType, setServiceType] = useState<string>(initialService);
  const [frequency, setFrequency] = useState<string>('biweekly');
  const [bedrooms, setBedrooms] = useState<number>(3);
  const [bathrooms, setBathrooms] = useState<number>(2);
  const [commercialSqFt, setCommercialSqFt] = useState<string>('1,500 - 3,000 sq ft');
  const [zipCode, setZipCode] = useState<string>(initialZip);
  const [addOns, setAddOns] = useState<string[]>([]);

  // Form Fields - Step 2
  const [fullName, setFullName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [timeframe, setTimeframe] = useState<string>('Next 2 weeks');
  const [notes, setNotes] = useState<string>('');
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (initialService) {
      setServiceType(initialService);
      if (initialService.toLowerCase().includes('commercial')) {
        setPropertyType('commercial');
      } else {
        setPropertyType('residential');
      }
    }
  }, [initialService]);

  useEffect(() => {
    if (initialZip) {
      setZipCode(initialZip);
    }
  }, [initialZip]);

  const toggleAddOn = (addonName: string) => {
    if (addOns.includes(addonName)) {
      setAddOns(addOns.filter((a) => a !== addonName));
    } else {
      setAddOns([...addOns, addonName]);
    }
  };

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!zipCode.trim()) {
      newErrors.zipCode = 'Please provide a city or 5-digit ZIP code.';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setCurrentStep(2);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!fullName.trim()) {
      newErrors.fullName = 'Full name is required.';
    }
    if (!email.trim() || !email.includes('@')) {
      newErrors.email = 'A valid email address is required.';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setCurrentStep(3);
  };

  const availableAddOns = [
    { id: 'oven', label: 'Inside Oven Detailing', desc: 'Baked-on residue removal' },
    { id: 'fridge', label: 'Inside Refrigerator', desc: 'Shelves washed & sanitized' },
    { id: 'cabinets', label: 'Interior Cabinets', desc: 'Inside empty drawers/shelves' },
    { id: 'blinds', label: 'Window Blinds Wipe', desc: 'Detailed individual slat wipe' },
  ];

  return (
    <section id="quote" className={`${isModal ? 'p-0' : 'py-20 bg-[#FAF8F5]'}`}>
      <div className={`${isModal ? 'w-full' : 'max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'}`}>
        {/* Form Container */}
        <div className="bg-[#FAF8F5] rounded-3xl border border-[#EAE3DC] shadow-xl overflow-hidden">
          {/* Header */}
          <div className="px-6 py-6 sm:px-10 sm:py-8 bg-[#F4EFEB] border-b border-[#EAE3DC]">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-widest font-semibold text-[#4F6D60]">
                  {currentStep === 1 && 'Step 1 of 2: Cleaning Needs'}
                  {currentStep === 2 && 'Step 2 of 2: Contact Information'}
                  {currentStep === 3 && 'Quote Request Submitted'}
                </p>
                <h2 className="text-2xl sm:text-3xl font-semibold text-[#171C19] font-editorial mt-1">
                  {currentStep === 3
                    ? 'Thank You for Reaching Out'
                    : 'Request Your Free Cleaning Estimate'}
                </h2>
              </div>
              {onClose && (
                <button
                  onClick={onClose}
                  className="p-2 text-[#67756D] hover:text-[#171C19] rounded-lg hover:bg-[#EAE3DC] transition-colors"
                  aria-label="Close quote modal"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Step Progress Bar */}
            {currentStep < 3 && (
              <div className="mt-6 flex items-center gap-3">
                <div className="flex-1 h-1.5 rounded-full bg-[#EAE3DC] overflow-hidden">
                  <div
                    className={`h-full bg-[#244638] transition-all duration-300 ${
                      currentStep === 1 ? 'w-1/2' : 'w-full'
                    }`}
                  />
                </div>
                <span className="text-xs font-semibold text-[#4F6D60] whitespace-nowrap">
                  {currentStep === 1 ? '50% Complete' : 'Almost Finished'}
                </span>
              </div>
            )}
          </div>

          {/* Form Content */}
          <div className="p-6 sm:p-10">
            {/* STEP 1: CLEANING NEEDS */}
            {currentStep === 1 && (
              <form onSubmit={handleNextStep} className="space-y-8">
                {/* Property Type Toggle */}
                <div className="space-y-3">
                  <label className="block text-sm font-semibold text-[#171C19]">
                    1. What type of space are we cleaning?
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      type="button"
                      onClick={() => {
                        setPropertyType('residential');
                        setServiceType('Routine House Cleaning');
                      }}
                      className={`p-4 rounded-xl border text-left flex items-start gap-3 transition-all cursor-pointer ${
                        propertyType === 'residential'
                          ? 'border-[#244638] bg-[#E9EFEA] text-[#171C19] ring-1 ring-[#244638]'
                          : 'border-[#EAE3DC] bg-[#FAF8F5] text-[#4A564F] hover:bg-[#F4EFEB]'
                      }`}
                    >
                      <Home className="w-5 h-5 text-[#244638] shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold text-sm">Residential Home</div>
                        <div className="text-xs text-[#67756D] mt-0.5">
                          Single family, townhouse, or apartment
                        </div>
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        setPropertyType('commercial');
                        setServiceType('Commercial & Office Cleaning');
                      }}
                      className={`p-4 rounded-xl border text-left flex items-start gap-3 transition-all cursor-pointer ${
                        propertyType === 'commercial'
                          ? 'border-[#244638] bg-[#E9EFEA] text-[#171C19] ring-1 ring-[#244638]'
                          : 'border-[#EAE3DC] bg-[#FAF8F5] text-[#4A564F] hover:bg-[#F4EFEB]'
                      }`}
                    >
                      <Building2 className="w-5 h-5 text-[#244638] shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold text-sm">Commercial / Office</div>
                        <div className="text-xs text-[#67756D] mt-0.5">
                          Workplace, studio, retail, or clinic
                        </div>
                      </div>
                    </button>
                  </div>
                </div>

                {/* Service Type Selection */}
                <div className="space-y-3">
                  <label className="block text-sm font-semibold text-[#171C19]">
                    2. Service Level Needed
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {[
                      {
                        title: 'Routine House Cleaning',
                        desc: 'Recurring upkeep for kitchens, bathrooms, dusting & floors',
                      },
                      {
                        title: 'Deep Cleaning',
                        desc: 'Top-to-bottom detail: baseboards, trim, doors & grout',
                      },
                      {
                        title: 'Move-In / Move-Out',
                        desc: 'Vacant property turnaround ready for move day',
                      },
                    ].map((s) => (
                      <button
                        key={s.title}
                        type="button"
                        onClick={() => setServiceType(s.title)}
                        className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                          serviceType === s.title
                            ? 'border-[#244638] bg-[#E9EFEA] ring-1 ring-[#244638]'
                            : 'border-[#EAE3DC] bg-[#FAF8F5] hover:bg-[#F4EFEB]'
                        }`}
                      >
                        <div className="text-sm font-semibold text-[#171C19]">{s.title}</div>
                        <div className="text-xs text-[#67756D] mt-1">{s.desc}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Frequency Selection */}
                <div className="space-y-3">
                  <label className="block text-sm font-semibold text-[#171C19]">
                    3. Desired Cleaning Cadence
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {FREQUENCIES.map((freq) => (
                      <button
                        key={freq.id}
                        type="button"
                        onClick={() => setFrequency(freq.id)}
                        className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                          frequency === freq.id
                            ? 'border-[#244638] bg-[#E9EFEA] ring-1 ring-[#244638]'
                            : 'border-[#EAE3DC] bg-[#FAF8F5] hover:bg-[#F4EFEB]'
                        }`}
                      >
                        <div className="text-sm font-semibold text-[#171C19]">{freq.title}</div>
                        <div className="text-xs text-[#67756D] mt-0.5">{freq.subtitle}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Space Sizing & Location */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {propertyType === 'residential' ? (
                    <>
                      <div className="space-y-1.5">
                        <label className="block text-xs font-semibold uppercase tracking-wider text-[#4A564F]">
                          Bedrooms
                        </label>
                        <select
                          value={bedrooms}
                          onChange={(e) => setBedrooms(Number(e.target.value))}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-[#D9D1C7] bg-[#FCFBF9] text-sm text-[#171C19] focus:ring-2 focus:ring-[#244638] outline-none"
                        >
                          <option value={1}>1 Bedroom</option>
                          <option value={2}>2 Bedrooms</option>
                          <option value={3}>3 Bedrooms</option>
                          <option value={4}>4 Bedrooms</option>
                          <option value={5}>5+ Bedrooms</option>
                        </select>
                      </div>

                      <div className="space-y-1.5">
                        <label className="block text-xs font-semibold uppercase tracking-wider text-[#4A564F]">
                          Bathrooms
                        </label>
                        <select
                          value={bathrooms}
                          onChange={(e) => setBathrooms(Number(e.target.value))}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-[#D9D1C7] bg-[#FCFBF9] text-sm text-[#171C19] focus:ring-2 focus:ring-[#244638] outline-none"
                        >
                          <option value={1}>1 Bathroom</option>
                          <option value={1.5}>1.5 Bathrooms</option>
                          <option value={2}>2 Bathrooms</option>
                          <option value={2.5}>2.5 Bathrooms</option>
                          <option value={3}>3 Bathrooms</option>
                          <option value={3.5}>3.5 Bathrooms</option>
                          <option value={4}>4+ Bathrooms</option>
                        </select>
                      </div>
                    </>
                  ) : (
                    <div className="sm:col-span-2 space-y-1.5">
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#4A564F]">
                        Approximate Commercial Square Footage
                      </label>
                      <select
                        value={commercialSqFt}
                        onChange={(e) => setCommercialSqFt(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#D9D1C7] bg-[#FCFBF9] text-sm text-[#171C19] focus:ring-2 focus:ring-[#244638] outline-none"
                      >
                        <option value="Under 1,500 sq ft">Under 1,500 sq ft (Boutique / Studio)</option>
                        <option value="1,500 - 3,000 sq ft">1,500 - 3,000 sq ft (Standard Office)</option>
                        <option value="3,000 - 6,000 sq ft">3,000 - 6,000 sq ft (Multi-Room Suite)</option>
                        <option value="6,000+ sq ft">6,000+ sq ft (Full Floor / Commercial Facility)</option>
                      </select>
                    </div>
                  )}

                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#4A564F]">
                      City or ZIP Code <span className="text-[#A87E34]">*</span>
                    </label>
                    <input
                      type="text"
                      value={zipCode}
                      onChange={(e) => {
                        setZipCode(e.target.value);
                        if (errors.zipCode) {
                          setErrors({});
                        }
                      }}
                      placeholder="e.g. 73003 or Edmond"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#D9D1C7] bg-[#FCFBF9] text-sm text-[#171C19] focus:ring-2 focus:ring-[#244638] outline-none"
                      required
                    />
                    {errors.zipCode && (
                      <p className="text-xs text-red-600 mt-1">{errors.zipCode}</p>
                    )}
                  </div>
                </div>

                {/* Optional Add-Ons */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <label className="block text-sm font-semibold text-[#171C19]">
                      4. Optional Add-On Detailing
                    </label>
                    <span className="text-xs text-[#67756D]">Optional</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {availableAddOns.map((addon) => {
                      const isSelected = addOns.includes(addon.label);
                      return (
                        <button
                          key={addon.id}
                          type="button"
                          onClick={() => toggleAddOn(addon.label)}
                          className={`p-3 rounded-xl border text-left flex items-center justify-between transition-all cursor-pointer ${
                            isSelected
                              ? 'border-[#244638] bg-[#E9EFEA] text-[#171C19]'
                              : 'border-[#EAE3DC] bg-[#FAF8F5] text-[#4A564F] hover:bg-[#F4EFEB]'
                          }`}
                        >
                          <div>
                            <div className="text-xs font-semibold">{addon.label}</div>
                            <div className="text-[11px] text-[#67756D]">{addon.desc}</div>
                          </div>
                          <div
                            className={`w-5 h-5 rounded flex items-center justify-center shrink-0 ml-2 border ${
                              isSelected
                                ? 'bg-[#244638] border-[#244638] text-white'
                                : 'border-[#D9D1C7]'
                            }`}
                          >
                            {isSelected && <Check className="w-3.5 h-3.5" />}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Step 1 Actions */}
                <div className="pt-4 border-t border-[#EAE3DC] flex items-center justify-between">
                  <p className="text-xs text-[#67756D]">
                    Next: Enter contact details to receive your customized quote.
                  </p>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-[#FAF8F5] bg-[#244638] hover:bg-[#1B362B] rounded-xl transition-colors cursor-pointer shadow-xs whitespace-nowrap"
                  >
                    <span>Continue to Step 2</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}

            {/* STEP 2: CONTACT INFORMATION */}
            {currentStep === 2 && (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Summary of selections from Step 1 */}
                <div className="p-4 rounded-xl bg-[#F4EFEB] border border-[#EAE3DC] text-xs text-[#313B35] flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <span className="font-semibold text-[#171C19]">Selected:</span>{' '}
                    {serviceType} ({frequency}) ·{' '}
                    {propertyType === 'residential'
                      ? `${bedrooms} bed / ${bathrooms} bath`
                      : commercialSqFt}{' '}
                    · Location: {zipCode}
                    {addOns.length > 0 && ` · Add-ons: ${addOns.join(', ')}`}
                  </div>
                  <button
                    type="button"
                    onClick={() => setCurrentStep(1)}
                    className="font-semibold text-[#244638] hover:underline"
                  >
                    Edit Selections
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#4A564F]">
                      Full Name <span className="text-[#A87E34]">*</span>
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-[#9CA3AF] absolute left-3 top-3" />
                      <input
                        type="text"
                        value={fullName}
                        onChange={(e) => {
                          setFullName(e.target.value);
                          if (errors.fullName) setErrors({});
                        }}
                        placeholder="e.g. Sarah Jenkins"
                        className="w-full pl-9 pr-3.5 py-2.5 rounded-xl border border-[#D9D1C7] bg-[#FCFBF9] text-sm text-[#171C19] focus:ring-2 focus:ring-[#244638] outline-none"
                        required
                      />
                    </div>
                    {errors.fullName && (
                      <p className="text-xs text-red-600 mt-1">{errors.fullName}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#4A564F]">
                      Email Address <span className="text-[#A87E34]">*</span>
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-[#9CA3AF] absolute left-3 top-3" />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          if (errors.email) setErrors({});
                        }}
                        placeholder="e.g. sarah@example.com"
                        className="w-full pl-9 pr-3.5 py-2.5 rounded-xl border border-[#D9D1C7] bg-[#FCFBF9] text-sm text-[#171C19] focus:ring-2 focus:ring-[#244638] outline-none"
                        required
                      />
                    </div>
                    {errors.email && (
                      <p className="text-xs text-red-600 mt-1">{errors.email}</p>
                    )}
                  </div>

                  {/* Phone (Optional) */}
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#4A564F]">
                        Phone Number
                      </label>
                      <span className="text-[11px] text-[#67756D]">Optional</span>
                    </div>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-[#9CA3AF] absolute left-3 top-3" />
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="e.g. (405) 555-0192"
                        className="w-full pl-9 pr-3.5 py-2.5 rounded-xl border border-[#D9D1C7] bg-[#FCFBF9] text-sm text-[#171C19] focus:ring-2 focus:ring-[#244638] outline-none"
                      />
                    </div>
                  </div>

                  {/* Street Address (Optional) */}
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#4A564F]">
                        Property Street Address
                      </label>
                      <span className="text-[11px] text-[#67756D]">Optional for initial quote</span>
                    </div>
                    <div className="relative">
                      <MapPin className="w-4 h-4 text-[#9CA3AF] absolute left-3 top-3" />
                      <input
                        type="text"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        placeholder="e.g. 1420 NW Grand Blvd"
                        className="w-full pl-9 pr-3.5 py-2.5 rounded-xl border border-[#D9D1C7] bg-[#FCFBF9] text-sm text-[#171C19] focus:ring-2 focus:ring-[#244638] outline-none"
                      />
                    </div>
                  </div>
                </div>

                {/* Preferred Start Timeframe */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#4A564F]">
                    Preferred Start Timeframe
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {['As soon as possible', 'Next 1–2 weeks', 'Flexible / Exploring'].map((tf) => (
                      <button
                        key={tf}
                        type="button"
                        onClick={() => setTimeframe(tf)}
                        className={`py-2 px-3 text-xs font-medium rounded-lg border transition-all cursor-pointer ${
                          timeframe === tf
                            ? 'border-[#244638] bg-[#E9EFEA] text-[#171C19] font-semibold'
                            : 'border-[#EAE3DC] bg-[#FCFBF9] text-[#4A564F] hover:bg-[#F4EFEB]'
                        }`}
                      >
                        {tf}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Additional Notes */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#4A564F]">
                      Special Requests, Pets, or Priority Areas
                    </label>
                    <span className="text-[11px] text-[#67756D]">Optional</span>
                  </div>
                  <textarea
                    rows={3}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Tell us about pet fur, delicate countertops, entry instructions, or any special focus areas..."
                    className="w-full p-3.5 rounded-xl border border-[#D9D1C7] bg-[#FCFBF9] text-sm text-[#171C19] focus:ring-2 focus:ring-[#244638] outline-none"
                  />
                </div>

                {/* Reassurance & Privacy Box */}
                <div className="p-4 rounded-xl bg-[#F4EFEB] border border-[#EAE3DC] flex items-start gap-3 text-xs text-[#4A564F]">
                  <Lock className="w-4 h-4 text-[#244638] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#171C19]">Your Privacy Matters:</span>{' '}
                    We treat your contact information confidentially. It will only be used by Shade Jonas and the Clean as a Mother team to evaluate your cleaning inquiry and prepare your personalized estimate. Typical response within one business day.
                  </div>
                </div>

                {/* Step 2 Actions */}
                <div className="pt-4 border-t border-[#EAE3DC] flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setCurrentStep(1)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#4A564F] hover:text-[#171C19] py-2 px-3 cursor-pointer"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back to Step 1</span>
                  </button>

                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-7 py-3 text-sm font-semibold text-[#FAF8F5] bg-[#244638] hover:bg-[#1B362B] rounded-xl transition-colors cursor-pointer shadow-xs whitespace-nowrap"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Quote Request</span>
                  </button>
                </div>
              </form>
            )}

            {/* STEP 3: SUBMISSION CONFIRMATION STATE */}
            {currentStep === 3 && (
              <div className="space-y-6 py-4 animate-in fade-in duration-300">
                <div className="w-14 h-14 rounded-full bg-[#E9EFEA] text-[#244638] flex items-center justify-center mx-auto shadow-xs">
                  <Check className="w-7 h-7" />
                </div>

                <div className="text-center max-w-lg mx-auto space-y-2">
                  <h3 className="text-2xl font-semibold text-[#171C19] font-editorial">
                    Quote Request Received!
                  </h3>
                  <p className="text-sm text-[#4A564F] leading-relaxed">
                    Thank you, <strong className="font-semibold text-[#171C19]">{fullName}</strong>. We have logged your request details for <strong className="font-semibold text-[#171C19]">{serviceType}</strong> in {zipCode}.
                  </p>
                </div>

                {/* Summary Card */}
                <div className="max-w-md mx-auto p-5 rounded-2xl bg-[#F4EFEB] border border-[#EAE3DC] text-xs space-y-3">
                  <div className="font-semibold text-sm text-[#171C19] border-b border-[#DFD7CE] pb-2">
                    Inquiry Summary
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-[#4A564F]">
                    <div>
                      <span className="block font-medium text-[#171C19]">Service:</span>
                      {serviceType}
                    </div>
                    <div>
                      <span className="block font-medium text-[#171C19]">Frequency:</span>
                      {frequency}
                    </div>
                    <div>
                      <span className="block font-medium text-[#171C19]">Space:</span>
                      {propertyType === 'residential'
                        ? `${bedrooms} beds / ${bathrooms} baths`
                        : commercialSqFt}
                    </div>
                    <div>
                      <span className="block font-medium text-[#171C19]">Email:</span>
                      {email}
                    </div>
                  </div>
                  {addOns.length > 0 && (
                    <div className="pt-2 border-t border-[#DFD7CE]">
                      <span className="font-medium text-[#171C19]">Requested Add-Ons:</span>{' '}
                      {addOns.join(', ')}
                    </div>
                  )}
                </div>

                {/* Transparent Notice about Demo and Direct Email Contact */}
                <div className="max-w-md mx-auto p-4 rounded-xl bg-[#FAF8F5] border border-[#D9D1C7] text-xs text-[#313B35] space-y-2">
                  <div className="flex items-center gap-2 font-semibold text-[#171C19]">
                    <Clock className="w-4 h-4 text-[#244638]" />
                    <span>Typical Response Time: One Business Day</span>
                  </div>
                  <p className="text-xs text-[#67756D] leading-relaxed">
                    In live operations, quotes are calculated specifically to your square footage and schedule. You can also reach Shade Jonas directly at{' '}
                    <a
                      href="mailto:shade@cleanasamotherok.com"
                      className="font-semibold text-[#244638] underline hover:text-[#11241C]"
                    >
                      shade@cleanasamotherok.com
                    </a>.
                  </p>
                  <p className="text-[11px] text-[#8C9890] italic">
                    Note: This is an interactive redesign concept demonstration prepared by S.Mideros Agency.
                  </p>
                </div>

                <div className="text-center pt-2">
                  <button
                    type="button"
                    onClick={() => {
                      setCurrentStep(1);
                      if (onClose) onClose();
                    }}
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-[#244638] bg-[#FAF8F5] border border-[#D9D1C7] hover:bg-[#F4EFEB] rounded-lg transition-colors cursor-pointer"
                  >
                    <span>Create Another Request</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
