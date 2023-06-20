import Countries from '@/components/Countries/Countries';
import { GET } from './api/route';

type Props = {};
async function getCountries() {
  const countries = await GET().then((res) => res.json());
  return countries;
}
async function Page({}: Props) {
  const countries = await getCountries();

  return (
    <section>
      <Countries data={countries} />
    </section>
  );
}

export default Page;
