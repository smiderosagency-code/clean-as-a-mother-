export interface CleaningTask {
  category: string;
  routine: boolean;
  deep: boolean;
  task: string;
  note?: string;
}

export const CLEANING_CHECKLIST: CleaningTask[] = [
  // Kitchen
  { category: 'Kitchen', routine: true, deep: true, task: 'Countertops & backsplashes wiped and disinfected' },
  { category: 'Kitchen', routine: true, deep: true, task: 'Exterior of all large appliances cleaned (refrigerator, oven, dishwasher)' },
  { category: 'Kitchen', routine: true, deep: true, task: 'Stovetop scrubbed, burner grates wiped, and range hood exterior wiped' },
  { category: 'Kitchen', routine: true, deep: true, task: 'Microwave sanitized inside and outside' },
  { category: 'Kitchen', routine: true, deep: true, task: 'Kitchen sink scrubbed, disinfected, and chrome fixtures polished' },
  { category: 'Kitchen', routine: false, deep: true, task: 'Cabinet exterior doors, drawers & handles hand-detailed' },
  { category: 'Kitchen', routine: false, deep: true, task: 'Baseboards, window sills, and trim hand-wiped' },
  { category: 'Kitchen', routine: false, deep: false, task: 'Inside oven deep clean (optional add-on service)' },
  { category: 'Kitchen', routine: false, deep: false, task: 'Inside refrigerator sanitization (optional add-on service)' },

  // Bathrooms
  { category: 'Bathrooms', routine: true, deep: true, task: 'Toilets thoroughly disinfected inside, bowl, base, and behind' },
  { category: 'Bathrooms', routine: true, deep: true, task: 'Shower stalls, tubs, and glass doors washed and squeegeed' },
  { category: 'Bathrooms', routine: true, deep: true, task: 'Vanity counters, sinks, and polished chrome faucets cleaned' },
  { category: 'Bathrooms', routine: true, deep: true, task: 'Mirrors polished streak-free' },
  { category: 'Bathrooms', routine: false, deep: true, task: 'Detailed tile grout scrubbing and soap scum elimination' },
  { category: 'Bathrooms', routine: false, deep: true, task: 'Baseboards, cabinet facings, and exhaust vent dusting' },

  // Living & Bedrooms
  { category: 'Living & Bedrooms', routine: true, deep: true, task: 'All reachable flat surfaces, tabletops & nightstands dusted' },
  { category: 'Living & Bedrooms', routine: true, deep: true, task: 'Beds tidied / made (fresh linens changed upon request)' },
  { category: 'Living & Bedrooms', routine: true, deep: true, task: 'Couch cushions straightened and throw blankets folded' },
  { category: 'Living & Bedrooms', routine: true, deep: true, task: 'All wastebaskets emptied and relined' },
  { category: 'Living & Bedrooms', routine: false, deep: true, task: 'Ceiling fans, light fixtures & reachable air vents hand-dusted' },
  { category: 'Living & Bedrooms', routine: false, deep: true, task: 'Window blinds, sills, and window frames wiped down' },
  { category: 'Living & Bedrooms', routine: false, deep: true, task: 'Detailed door frames, switch plates, and baseboards wiped' },

  // Floors Throughout
  { category: 'Floors', routine: true, deep: true, task: 'All carpets, rugs, and runners thoroughly vacuumed' },
  { category: 'Floors', routine: true, deep: true, task: 'Hardwood, tile, and vinyl floors vacuumed and washed/mopped' },
  { category: 'Floors', routine: false, deep: true, task: 'Floor edge vacuuming along baseboards and under accessible furniture' },
];

export const FREQUENCIES = [
  { id: 'biweekly', title: 'Bi-Weekly', subtitle: 'Most popular', description: 'Keeps homes consistently fresh with scheduled alternating deep touchpoints.' },
  { id: 'weekly', title: 'Weekly', subtitle: 'For busy families', description: 'Continuous immaculate maintenance for homes with kids, pets, or high traffic.' },
  { id: 'monthly', title: 'Every 4 Weeks', subtitle: 'Monthly reset', description: 'Comprehensive baseline clean to keep up with dust and daily living buildup.' },
  { id: 'onetime', title: 'One-Time or As-Needed', subtitle: 'Deep clean or event', description: 'Ideal for seasonal resets, guest hosting, or move-in/move-out needs.' },
];
