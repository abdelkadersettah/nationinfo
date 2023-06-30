'use client';
import Countries from '@/components/Countries/Countries';
import Loader from '@/components/Loader/Loader';
import SearchInput from '@/components/SearchInput/SearchInput';
import { useState } from 'react';
import useSWR from 'swr';

type Props = {};
const fetcher = (url: any) => fetch(url).then((res) => res.json());
function Page({}: Props) {
  const [searchedValue, setSearchedValue] = useState('');
  const {
    data: countries,
    error,
    isLoading,
  } = useSWR(
    `https://restcountries.com/v3.1/${
      searchedValue ? 'name/' + searchedValue : 'all'
    }`,
    fetcher
  );
  return (
    <section>
      <section className="py-4 px-8 w-full max-w-full">
        <SearchInput
          onSearch={(searchedKey) => {
            setSearchedValue(searchedKey);
          }}
        />
      </section>
      <Countries data={countries} />
      {countries?.status === 404 && (
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
