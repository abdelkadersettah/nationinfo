'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useState } from 'react';
import SearchInput from '../SearchInput/SearchInput';

type Props = {};

function CountriesFilter({}: Props) {
  const [searchedValue, setSearchedValue] = useState('');
  const searchParams = useSearchParams()!;
  const router = useRouter();
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchedValue, searchParams]
  );
  const removeQueryString = useCallback(
    (name: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.delete(name);

      return params.toString();
    },
    [searchedValue, searchParams]
  );
  return (
    <section className="py-4 px-8 w-full max-w-full">
      <SearchInput
        value={searchedValue}
        onSearch={(searchedKey) => {
          if (!searchedKey) {
            router.push('/' + '?' + removeQueryString('name'));
          } else {
            router.push(
              'search' + '?' + createQueryString('name', searchedValue)
            );
          }
        }}
        onValueChange={(value) => setSearchedValue(value)}
      />
    </section>
  );
}

export default CountriesFilter;
