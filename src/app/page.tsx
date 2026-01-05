'use client';
import Countries from '@/components/Countries/Countries';
import Loader from '@/components/Loader/Loader';
import SearchInput from '@/components/SearchInput/SearchInput';
import { useState } from 'react';
import useSWR from 'swr';

type Props = {};
const fetcher = (url: string) => 
  fetch(url)
    .then((res) => {
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      return res.json();
    })
    .catch((error) => {
      console.error("Fetch error:", error);
      throw error;
    });

// SWR configuration for better caching and performance
const swrConfig = {
  revalidateOnFocus: false, // Don't revalidate when window gets focused
  revalidateOnReconnect: true, // Revalidate when network reconnects
  dedupingInterval: 60000, // Dedupe requests within 60 seconds
  errorRetryCount: 3, // Retry failed requests up to 3 times
  errorRetryInterval: 5000, // Wait 5 seconds between retries
};

function Page({}: Props) {
  const [searchedValue, setSearchedValue] = useState('');
  const {
    data: countries,
    error,
    isLoading,
  } = useSWR(
    `/api${searchedValue ? `?search=${encodeURIComponent(searchedValue)}` : ''}`,
    fetcher,
    swrConfig
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
