import Countries from '@/components/Countries/Countries';
import CountriesFilter from '@/components/CountriesFilter/CountriesFilter';
import { GET } from './api/route';

type Props = {};
async function getCountries() {
  const countries = await GET().then((res) => res.json());
  return countries;
}
async function countries({}: Props) {
  const countries = await getCountries();

  return (
    <section>
      <CountriesFilter />
      <Countries data={countries} />
    </section>
  );
}

export default countries;
