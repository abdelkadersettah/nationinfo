'use client';
import Countries from '@/components/Countries/Countries';
import CountriesFilter from '@/components/CountriesFilter/CountriesFilter';
import Loader from '@/components/Loader/Loader';
import { useSearchParams } from 'next/navigation';
import useSWR from 'swr';

const fetcher = (url: any) => fetch(url).then((res) => res.json());
function Page() {
  const searchParams = useSearchParams();
  const name = searchParams.get('name');
  const { data, error, isLoading } = useSWR(
    `https://restcountries.com/v3.1/name/${name}`,
    fetcher
  );

  return (
    <section>
      <CountriesFilter />

      <Countries data={data} />
      {data?.status === 404 && (
        <section className="p-8 h-100 flex flex-col items-center justify-center gap-8">
          <h2>Not Found</h2>
        </section>
      )}
      {isLoading && (
        <section className="p-8 h-100 flex flex-col items-center justify-center gap-8">
          <Loader />
        </section>
      )}
    </section>
  );
}

export default Page;
