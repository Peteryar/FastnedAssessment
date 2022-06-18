interface LocationInputType {
  Name: string;
  'Location No.': number;
  Country: string;
  City: string;
  'Postal Code': number;
  [key: string]: string | number;
}

interface LocationType {
  name: string;
  number: number;
  country: string;
  city?: string;
  postalCode?: number;
  chargers: number;
  lastUpdated: string;
}

// interface ChargerType {
//   id: number;
//   type: 'HPC' | 'T52' | 'T53C';
//   serialNumber: string;
//   status: 'CONNECTED' | 'NOT_CONNECTED' | 'REMOVED';
//   lastUpdated: string;
// }
interface ChargerType {
  Type: 'HPC' | 'T52' | 'T53C';
  Status: 'CONNECTED' | 'NOT_CONNECTED' | 'REMOVED';
  'Serial Number': number;
  [key: string]: string | number;
}

export type { LocationType, ChargerType, LocationInputType };
