import { ChargerInputType, LocationInputType } from './types';

function transformChargerData(input: ChargerInputType) {
  const transformed = {
    type: input['Charger Type'],
    status: input.Status,
    serialNumber: input['Serial Number']
  };
  return transformed;
}

function transformLocationData(input: LocationInputType) {
  const transformed = {
    name: input.Name,
    location: Number(input['Location No']),
    country: input.Country,
    city: input.City,
    postalCode: input['Postal Code'],
    lastUpdated: 'NA'
  };
  return transformed;
}

export { transformChargerData, transformLocationData };
