export interface ZipResult {
  zip: string;
  city: string;
  county: string;
  active: boolean;
}

// Curated Oklahoma City Metropolitan Area confirmed postal codes
export const OKC_METRO_ZIPS: Record<string, { city: string; county: string }> = {
  // Oklahoma City
  '73102': { city: 'Oklahoma City (Downtown)', county: 'Oklahoma County' },
  '73103': { city: 'Oklahoma City (Midtown / Heritage Hills)', county: 'Oklahoma County' },
  '73104': { city: 'Oklahoma City (Innovation District)', county: 'Oklahoma County' },
  '73106': { city: 'Oklahoma City (Plaza District)', county: 'Oklahoma County' },
  '73107': { city: 'Oklahoma City (West Side)', county: 'Oklahoma County' },
  '73112': { city: 'Oklahoma City (Belle Isle / Penn Square)', county: 'Oklahoma County' },
  '73114': { city: 'Oklahoma City (North OKC)', county: 'Oklahoma County' },
  '73116': { city: 'Nichols Hills / The Village', county: 'Oklahoma County' },
  '73118': { city: 'Oklahoma City (Crown Heights)', county: 'Oklahoma County' },
  '73120': { city: 'Oklahoma City (Lake Hefner / Quail Creek)', county: 'Oklahoma County' },
  '73122': { city: 'Oklahoma City (Warr Acres)', county: 'Oklahoma County' },
  '73127': { city: 'Oklahoma City (Bethany / West)', county: 'Oklahoma County' },
  '73132': { city: 'Oklahoma City (Northwest OKC)', county: 'Oklahoma County' },
  '73134': { city: 'Oklahoma City (Chisholm Creek)', county: 'Oklahoma County' },
  '73142': { city: 'Oklahoma City (Gaillardia / Deer Creek)', county: 'Oklahoma County' },
  '73159': { city: 'Oklahoma City (Southwest OKC)', county: 'Cleveland County' },
  '73160': { city: 'Moore / South OKC', county: 'Cleveland County' },
  '73162': { city: 'Oklahoma City (Northwest)', county: 'Oklahoma County' },
  '73170': { city: 'Moore / Southwest OKC', county: 'Cleveland County' },
  // Edmond
  '73003': { city: 'Edmond (West)', county: 'Oklahoma County' },
  '73012': { city: 'Edmond (Central & North)', county: 'Oklahoma County' },
  '73013': { city: 'Edmond (East & Spring Creek)', county: 'Oklahoma County' },
  '73025': { city: 'Edmond / Deer Creek', county: 'Oklahoma County' },
  '73034': { city: 'Edmond (East / Arcadia)', county: 'Oklahoma County' },
  // Norman
  '73069': { city: 'Norman (North & Central)', county: 'Cleveland County' },
  '73071': { city: 'Norman (East)', county: 'Cleveland County' },
  '73072': { city: 'Norman (West & Campus)', county: 'Cleveland County' },
  // Yukon & Mustang (Canadian County)
  '73099': { city: 'Yukon', county: 'Canadian County' },
  '73064': { city: 'Mustang', county: 'Canadian County' },
  '73078': { city: 'Piedmont', county: 'Canadian County' },
  // Guthrie & Logan County
  '73044': { city: 'Guthrie', county: 'Logan County' },
  // Bethany
  '73008': { city: 'Bethany', county: 'Oklahoma County' },
  // Midwest City & Del City
  '73110': { city: 'Midwest City', county: 'Oklahoma County' },
  '73115': { city: 'Del City', county: 'Oklahoma County' }
};

export function checkZipCoverage(zipCode: string): ZipResult | null {
  const cleanZip = zipCode.trim();
  if (OKC_METRO_ZIPS[cleanZip]) {
    return {
      zip: cleanZip,
      city: OKC_METRO_ZIPS[cleanZip].city,
      county: OKC_METRO_ZIPS[cleanZip].county,
      active: true,
    };
  }
  return null;
}
