import { CountryDto } from '@/models/CountryDto';
import './Countries.scss';
import CountryCard from './CountryCard/CountryCard';

type Props = {
  data: Array<CountryDto>;
};

const Countries = ({ data }: Props) => {
  return (
    <ul className="max-w-[1250px] mx-auto grid gap-y-6 gap-x-4 grid-cols-[repeat(auto-fit,minmax(200px,_1fr))] p-4">
      {data?.length
        ? data?.map((country: CountryDto) => (
            <CountryCard country={country} key={country.cca2} />
          ))
        : null}
    </ul>
  );
};

export default Countries;
