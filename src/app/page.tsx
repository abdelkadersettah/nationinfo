import Countries from "@/components/Countries/Countries";
import SearchInputClient from "@/components/SearchInput/SearchInputClient";
import { getCountries } from "@/services/countryService";
import { Suspense } from "react";
import Loader from "@/components/Loader/Loader";

interface PageProps {
  searchParams: Promise<{ search?: string }> | { search?: string };
}

async function CountriesList({ search }: { search?: string }) {
  try {
    const countries = await getCountries(search);

    if (!countries || countries.length === 0) {
      return (
        <section className="p-8 h-100 flex flex-col items-center justify-center gap-8">
          <h2>No countries found</h2>
          <p className="text-gray-500">
            {search ? `No results for "${search}"` : "No countries available"}
          </p>
        </section>
      );
    }

    return <Countries data={countries} />;
  } catch (error) {
    console.error("Error fetching countries:", error);
    return (
      <section className="p-8 h-100 flex flex-col items-center justify-center gap-8">
        <h2>Error loading countries</h2>
        <p className="text-gray-500">Please try again later.</p>
      </section>
    );
  }
}

async function Page({ searchParams }: PageProps) {
  // Handle both Promise and object for Next.js 13+ compatibility
  const params =
    searchParams instanceof Promise ? await searchParams : searchParams;
  const search = params?.search;

  return (
    <section>
      <section className="py-4 px-8 w-full max-w-full">
        <Suspense fallback={<div className="h-12" />}>
          <SearchInputClient />
        </Suspense>
      </section>
      <Suspense
        key={search} // Re-fetch when search changes
        fallback={
          <section className="p-8 h-100 flex flex-col items-center justify-center gap-8">
            <Loader />
          </section>
        }
      >
        <CountriesList search={search} />
      </Suspense>
    </section>
  );
}

export default Page;
