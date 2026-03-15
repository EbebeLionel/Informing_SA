export interface Contributor {
  name: string;
  slug: string;
}

export interface CountryData {
  id: string;
  /** Must match the `name` property in the world-atlas GeoJSON */
  geoName: string;
  contributors: Contributor[];
}
