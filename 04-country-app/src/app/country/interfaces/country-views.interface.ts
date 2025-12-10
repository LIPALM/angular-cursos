

export interface CountryView {
  cca2: string;
  cca3?: string;
  name: string;
  flagpng?: string;
  flagsvg?: string;
  capital?: string;
  region?: string;
  subregion?: string;
  population: number;
  area?: number;
  latlng?: number[];
  borders?: string[];
  languages?: string[];
  currencies?: { code: string; name: string; symbol?: string }[];
  maps?: {gm?: string, osm?: string };
  //maps?:string[];
}
