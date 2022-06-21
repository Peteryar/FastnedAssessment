import { LocationType } from '../utils/types';

const locations: Array<LocationType> = [
  {
    id: 1,
    name: 'Alkermaat',
    location: 223344,
    country: 'NL',
    city: 'Amstadam',
    postalCode: 'GM-1239',
    lastUpdated: '5 months ago',
    chargers: [
      { id: 1, status: 'CONNECTED', type: 'T52', serialNumber: '123456' },
      { id: 2, status: 'NOT_CONNECTED', type: 'T52', serialNumber: '123456' }
    ]
  },
  {
    id: 2,
    name: 'Aalscholver',
    location: 112233,
    country: 'DE',
    city: 'Amstadam',
    postalCode: 'GM-1239',
    lastUpdated: '5 months ago',
    chargers: [
      { id: 1, status: 'REMOVED', type: 'T52', serialNumber: '123456' },
      { id: 2, status: 'CONNECTED', type: 'T52', serialNumber: '123456' },
      { id: 3, status: 'NOT_CONNECTED', type: 'T52', serialNumber: '123456' },
      { id: 4, status: 'CONNECTED', type: 'T52', serialNumber: '123456' },
      { id: 5, status: 'NOT_CONNECTED', type: 'T52', serialNumber: '123456' }
    ]
  }
];
export default locations;
