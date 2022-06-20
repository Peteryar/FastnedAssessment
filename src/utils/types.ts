interface LocationInputType {
  Name: string;
  'Location No.': number;
  Country: string;
  City: string;
  'Postal Code': string;
  [key: string]: string | number;
}

interface LocationType {
  name: string;
  location: number;
  country: string;
  city: string;
  postalCode: string;
  chargers: Array<ChargerType>;
  lastUpdated?: string;
}

interface ChargerInputType {
  Type: 'HPC' | 'T52' | 'T53C';
  'Serial Number': string;
  Status: 'CONNECTED' | 'NOT_CONNECTED' | 'REMOVED';
  [key: string]: string;
}
interface ChargerType {
  id?: number;
  type: string;
  status: string;
  serialNumber: string;
  lastUpdated?: string;
}

export type { LocationType, ChargerInputType, ChargerType, LocationInputType };
