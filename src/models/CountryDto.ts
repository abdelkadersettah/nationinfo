export interface CountryDto {
  name: CountryName;
  tld: Array<string>;
  cca2: string;
  ccn3: string;
  cca3: string;
  cioc: string;
  independent: boolean;
  status: string;
  unMember: boolean;
  currencies: CountryCurrencies;
  idd: CountryIdd;
  capital: Array<string>;
  altSpellings: Array<string>;
  region: string;
  subregion: string;
  languages: { ara: string };
  latlng: [28.0, 3.0];
  landlocked: boolean;
  borders: Array<string>;
  area: number;
  demonyms: {
    eng: { f: string; m: string };
    fra: { f: string; m: string };
  };
  flag: string;
  maps: {
    googleMaps: string;
    openStreetMaps: string;
  };
  population: number;
  gini: any;
  fifa: string;
  car: { signs: Array<string>; side: string };
  timezones: Array<string>;
  continents: Array<string>;
  flags: {
    png: string;
    svg: string;
    alt: string;
  };
  coatOfArms: {
    png: string;
    svg: string;
  };
  startOfWeek: string;
  capitalInfo: { latlng: Array<string> };
  postalCode: { format: string; regex: string };
}

interface CountryCurrencies {
  DZD: { name: string; symbol: string };
}
interface CountryIdd {
  root: string;
  suffixes: Array<string>;
}
interface CountryName {
  common: string;
  official: string;
  nativeName: {
    ara: {
      official: string;
      common: string;
    };
  };
}
