import { X, Check, Sparkles } from 'lucide-react';
import { CLEANING_CHECKLIST } from '../data/cleaningChecklists';

interface ServiceChecklistModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectService: (serviceName: string) => void;
}

export function ServiceChecklistModal({
  isOpen,
  onClose,
  onSelectService,
}: ServiceChecklistModalProps) {
  if (!isOpen) return null;

  const categories = ['Kitchen', 'Bathrooms', 'Living & Bedrooms', 'Floors'];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div
        className="relative bg-[#FAF8F5] w-full max-w-4xl rounded-2xl shadow-2xl border border-[#EAE3DC] overflow-hidden my-8"
        role="dialog"
        aria-modal="true"
        aria-labelledby="checklist-title"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#EAE3DC] bg-[#F4EFEB]">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-[#4F6D60]">
              Transparency & Attention to Detail
            </span>
            <h2 id="checklist-title" className="text-xl sm:text-2xl font-semibold text-[#171C19] font-editorial mt-0.5">
              Routine vs. Deep Cleaning Comparison
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-[#67756D] hover:text-[#171C19] hover:bg-[#EAE3DC] transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 max-h-[70vh] overflow-y-auto">
          <p className="text-sm text-[#4A564F] mb-6">
            Every home is unique. Our standard task checklist shows what our vetted cleaners take care of during every visit. Custom requests can always be noted during your quote request.
          </p>

          {/* Table Header */}
          <div className="sticky top-0 bg-[#FAF8F5] pb-2 border-b border-[#DFD7CE] grid grid-cols-12 text-xs font-semibold uppercase tracking-wider text-[#4F6D60]">
            <div className="col-span-8 sm:col-span-8">Task & Focus Area</div>
            <div className="col-span-2 text-center text-[#244638]">Routine Clean</div>
            <div className="col-span-2 text-center text-[#A87E34]">Deep Clean</div>
          </div>

          {/* Categories */}
          {categories.map((category) => {
            const categoryTasks = CLEANING_CHECKLIST.filter((t) => t.category === category);
            return (
              <div key={category} className="mt-6">
                <h3 className="text-sm font-semibold text-[#171C19] uppercase tracking-wider border-b border-[#EAE3DC] pb-1.5 mb-2">
                  {category}
                </h3>
                <div className="divide-y divide-[#EFECE5]">
                  {categoryTasks.map((taskItem, idx) => (
                    <div key={idx} className="grid grid-cols-12 py-2.5 text-sm items-center hover:bg-[#F4EFEB]/50 px-1 rounded transition-colors">
                      <div className="col-span-8 pr-3 text-[#313B35]">
                        {taskItem.task}
                      </div>
                      <div className="col-span-2 flex justify-center">
                        {taskItem.routine ? (
                          <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#E9EFEA] text-[#244638]">
                            <Check className="w-4 h-4" />
                          </span>
                        ) : (
                          <span className="text-xs text-[#9CA3AF]">—</span>
                        )}
                      </div>
                      <div className="col-span-2 flex justify-center">
                        {taskItem.deep ? (
                          <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#F8F1E2] text-[#A87E34]">
                            <Check className="w-4 h-4" />
                          </span>
                        ) : (
                          <span className="text-xs text-[#9CA3AF]">—</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}

          {/* Add-on Note */}
          <div className="mt-8 p-4 rounded-xl bg-[#F4EFEB] border border-[#EAE3DC] text-xs text-[#4A564F]">
            <p className="font-semibold text-[#171C19] mb-1">
              Need inside-appliance cleaning or interior cabinets?
            </p>
            <p>
              Interior oven, interior refrigerator, and inside kitchen cabinet cleaning can easily be added to any routine or deep cleaning service when completing your quote request.
            </p>
          </div>
        </div>

        {/* Footer actions */}
        <div className="p-6 bg-[#F4EFEB] border-t border-[#EAE3DC] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-[#67756D]">
            Pricing is calculated per property size and selected options with zero hidden fees.
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={() => {
                onClose();
                onSelectService('Routine House Cleaning');
              }}
              className="flex-1 sm:flex-initial px-4 py-2.5 text-xs font-semibold text-[#244638] bg-[#FAF8F5] border border-[#D9D1C7] hover:bg-[#EAE3DC] rounded-lg transition-colors cursor-pointer"
            >
              Choose Routine Clean
            </button>
            <button
              onClick={() => {
                onClose();
                onSelectService('Deep Cleaning');
              }}
              className="flex-1 sm:flex-initial px-4 py-2.5 text-xs font-semibold text-[#FAF8F5] bg-[#244638] hover:bg-[#1B362B] rounded-lg transition-colors cursor-pointer"
            >
              Choose Deep Clean
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
