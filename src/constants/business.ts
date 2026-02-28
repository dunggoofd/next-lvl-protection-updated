export const BUSINESS = {
  name: 'NextLvl Protection',
  phone: '0411 164 886',
  phonePlain: '0411164886',
  email: 'halo@nextlvlprotection.com.au',
  address: {
    street: 'Unit 16, 18-24 Loam St',
    suburb: 'Acacia Ridge',
    state: 'QLD',
    postcode: '4110',
  },
  areaServed: 'Brisbane',
} as const;

export const SCHEMA_PROVIDER = {
  '@type': 'LocalBusiness',
  name: BUSINESS.name,
  telephone: BUSINESS.phonePlain,
  address: {
    '@type': 'PostalAddress',
    streetAddress: BUSINESS.address.street,
    addressLocality: BUSINESS.address.suburb,
    addressRegion: BUSINESS.address.state,
    postalCode: BUSINESS.address.postcode,
  },
} as const;
