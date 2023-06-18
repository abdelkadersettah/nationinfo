'use client';
import Countries from '@/components/Countries/Countries';
import CountriesFilter from '@/components/CountriesFilter/CountriesFilter';
import { CountryDto } from '@/models/CountryDto';
import { useSearchParams } from 'next/navigation';

async function Page() {
  const searchParams = useSearchParams();
  const name = searchParams.get('name');
  async function getCountriesByName(searchedKey: string) {
    const countries: Array<CountryDto> = await fetch(
      `https://restcountries.com/v3.1/name/${searchedKey}`
    ).then((res) => res.json());
    return countries;
  }
  const countries = await getCountriesByName(name ?? '');

  return (
    <section>
      <CountriesFilter />
      <Countries data={countries} />
    </section>
  );
}

export default Page;
