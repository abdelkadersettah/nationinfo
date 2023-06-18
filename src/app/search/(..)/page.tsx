'use client';
import Countries from '@/components/Countries/Countries';
import CountriesFilter from '@/components/CountriesFilter/CountriesFilter';
import { CountryDto } from '@/models/CountryDto';
import { useSearchParams } from 'next/navigation';

export async function getCountriesByName(searchedKey: string) {
  const countries: Array<CountryDto> = await fetch(
    `https://restcountries.com/v3.1/name/${searchedKey}`
  ).then((res) => res.json());
  return countries;
}

async function countries() {
  const searchParams = useSearchParams();
  const name = searchParams.get('name');
  const countries = await getCountriesByName(name ?? '');
  return (
    <section>
      <CountriesFilter />
      <Countries data={countries} />
    </section>
  );
}

export default countries;
