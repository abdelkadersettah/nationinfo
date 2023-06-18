import { CountryDto } from '@/models/CountryDto';
import './Countries.scss';
import CountryCard from './CountryCard/CountryCard';

type Props = {
  data: Array<CountryDto>;
};

const Countries = ({ data }: Props) => {
  return (
    <ul className="max-w-[1250px] mx-auto grid gap-y-6 gap-x-4 grid-cols-[repeat(auto-fit,minmax(200px,_1fr))] p-4">
      {data?.length ? (
        data?.map((country: CountryDto) => (
          <CountryCard country={country} key={country.cca2} />
        ))
      ) : (
        <section className="p-8 h-100 flex flex-col items-center justify-center gap-8">
          <h2>Not Found</h2>
        </section>
      )}
    </ul>
  );
};

export default Countries;
