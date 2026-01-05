import { API_URLS, CACHE_REVALIDATE_TIME } from "@/models/constants";
import { CountryDto } from "@/models/CountryDto";
import { cache } from "react";

/**
 * Fetches a single country by its CCN3 code
 * Uses React cache to deduplicate requests within the same render
 */
export const getCountryByCcn3 = cache(
  async (ccn3: string): Promise<Array<CountryDto>> => {
    const response = await fetch(API_URLS.GET_COUNTRY_BY_CCN3(ccn3), {
      next: { revalidate: CACHE_REVALIDATE_TIME },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch country: ${response.status}`);
    }

    return response.json();
  }
);

/**
 * Fetches multiple countries by their country codes
 */
export const getCountriesByCodes = async (
  codes: Array<string>
): Promise<Array<CountryDto>> => {
  if (!codes || codes.length === 0) {
    return [];
  }

  const params = codes.join(",");
  const response = await fetch(API_URLS.GET_BORDERS(params), {
    next: { revalidate: CACHE_REVALIDATE_TIME },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch borders: ${response.status}`);
  }

  return response.json();
};

/**
 * Fetches all countries or searches by name
 */
export const getCountries = async (
  search?: string
): Promise<Array<CountryDto>> => {
  const url = search
    ? API_URLS.GET_COUNTRY_BY_NAME(search)
    : API_URLS.GET_COUNTRIES;

  const response = await fetch(url, {
    next: { revalidate: CACHE_REVALIDATE_TIME },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch countries: ${response.status}`);
  }

  return response.json();
};
