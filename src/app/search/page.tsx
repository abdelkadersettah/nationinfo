'use client';
import Countries from '@/components/Countries/Countries';
import CountriesFilter from '@/components/CountriesFilter/CountriesFilter';
import { useSearchParams } from 'next/navigation';
import useSWR from 'swr';

async function Page() {
  const fetcher = (url: any) => fetch(url).then((res) => res.json());

  const searchParams = useSearchParams();
  const name = searchParams.get('name');
  const { data } = useSWR(
    `https://restcountries.com/v3.1/name/${name}`,
    fetcher
  );

  return (
    <section>
      <CountriesFilter />
      <Countries data={data} />
    </section>
  );
}

export default Page;
