// Cache revalidation time in seconds (1 day = 86400 seconds)
export const CACHE_REVALIDATE_TIME = 86400;

// Common fields used across API calls
export const COMMON_FIELDS =
  "name,flags,ccn3,cca2,cca3,cioc,population,region,capital";

export const API_URLS = {
  GET_COUNTRIES: `https://restcountries.com/v3.1/all?fields=${COMMON_FIELDS}`,
  GET_COUNTRY_BY_CCN3: (ccn3: string) =>
    `https://restcountries.com/v3.1/alpha/${ccn3}`,
  GET_COUNTRY_BY_NAME: (name: string) =>
    `https://restcountries.com/v3.1/name/${encodeURIComponent(
      name
    )}?fields=${COMMON_FIELDS}`,
  GET_BORDERS: (codes: string) =>
    `https://restcountries.com/v3.1/alpha?codes=${codes}`,
};
