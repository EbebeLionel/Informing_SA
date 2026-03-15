import type { CountryData } from '../types/map';

/**
 * geoName must exactly match the `name` property in
 * https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json
 */
export const COUNTRIES: CountryData[] = [
  {
    id: 'za',
    geoName: 'South Africa',
    contributors: [
      { name: 'Nkosi Dlamini',  slug: 'nkosi-dlamini'  },
      { name: 'Thandi Mthembu', slug: 'thandi-mthembu' },
      { name: 'Sipho Ndlovu',   slug: 'sipho-ndlovu'   },
    ],
  },
  {
    id: 'ng',
    geoName: 'Nigeria',
    contributors: [
      { name: 'Chidi Okonkwo', slug: 'chidi-okonkwo' },
      { name: 'Amara Eze',     slug: 'amara-eze'     },
    ],
  },
  {
    id: 'ke',
    geoName: 'Kenya',
    contributors: [{ name: 'Wanjiru Kamau', slug: 'wanjiru-kamau' }],
  },
  {
    id: 'eg',
    geoName: 'Egypt',
    contributors: [],
  },
  {
    id: 'et',
    geoName: 'Ethiopia',
    contributors: [{ name: 'Dawit Haile', slug: 'dawit-haile' }],
  },
  {
    id: 'gh',
    geoName: 'Ghana',
    contributors: [],
  },
  {
    id: 'zw',
    geoName: 'Zimbabwe',
    contributors: [{ name: 'Tendai Moyo', slug: 'tendai-moyo' }],
  },
  {
    id: 'mz',
    geoName: 'Mozambique',
    contributors: [],
  },
  {
    id: 'tz',
    geoName: 'Tanzania',
    contributors: [],
  },
  {
    id: 'cm',
    geoName: 'Cameroon',
    contributors: [{ name: 'Jean-Baptiste Mbarga', slug: 'jean-baptiste-mbarga' }],
  },
  {
    id: 'cd',
    geoName: 'Dem. Rep. Congo',
    contributors: [],
  },
  {
    id: 'ao',
    geoName: 'Angola',
    contributors: [],
  },
  {
    id: 'gb',
    geoName: 'United Kingdom',
    contributors: [{ name: 'James Hartley', slug: 'james-hartley' }],
  },
  {
    id: 'fr',
    geoName: 'France',
    contributors: [],
  },
  {
    id: 'de',
    geoName: 'Germany',
    contributors: [],
  },
  {
    id: 'us',
    geoName: 'United States of America',
    contributors: [
      { name: 'Marcus Thompson', slug: 'marcus-thompson' },
      { name: 'Aaliyah Brooks',  slug: 'aaliyah-brooks'  },
    ],
  },
  {
    id: 'ca',
    geoName: 'Canada',
    contributors: [],
  },
  {
    id: 'mx',
    geoName: 'Mexico',
    contributors: [],
  },
  {
    id: 'br',
    geoName: 'Brazil',
    contributors: [],
  },
  {
    id: 'ar',
    geoName: 'Argentina',
    contributors: [],
  },
  {
    id: 'cn',
    geoName: 'China',
    contributors: [],
  },
  {
    id: 'in',
    geoName: 'India',
    contributors: [{ name: 'Priya Sharma', slug: 'priya-sharma' }],
  },
  {
    id: 'ru',
    geoName: 'Russia',
    contributors: [],
  },
  {
    id: 'au',
    geoName: 'Australia',
    contributors: [],
  },
  {
    id: 'ug',
    geoName: 'Uganda',
    contributors: [{ name: 'Amwene Etiang', slug: 'amwene-etiang' }],
  },
];