import { CountryDto } from '@/models/CountryDto';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  country: CountryDto;
};

function CountryCard({ country }: Props) {
  return (
    <li
      className="hover:scale-[1.01] transition-all country__card shadow-sm shadow-gray-600 max-w-[250px]  [.theme  country__card]:text-red"
      key={country.ccn3}
    >
      <Link
        href={`/country/${
          country?.ccn3 || country?.cca2 || country?.cca3 || country?.cioc
        }`}
        className=" "
      >
        <figure className="country__figure">
          <Image
            className="w-full  max-w-full h-[160px] object-fill"
            src={country?.flags?.png}
            alt={
              country?.flags?.alt ? country?.flags?.alt : 'Country image flag'
            }
            width={320}
            height={160}
          />
        </figure>

        <div className="py-5 px-2 	">
          <h2 className="font-bold mb-2">{country?.name?.common}</h2>
          <ul className="">
            <li>
              <span className="font-medium">Population:</span>{' '}
              <span className="country__subtitle--content">
                {new Intl.NumberFormat().format(country?.population)}
              </span>
            </li>
            <li>
              <span className="font-medium">Region:</span>{' '}
              <span className="country__subtitle--content">
                {country?.region}
              </span>
            </li>
            <li>
              <span className="font-medium">Capital:</span>{' '}
              <span className="country__subtitle--content">
                {country?.capital}
              </span>
            </li>
          </ul>
        </div>
      </Link>
    </li>
  );
}

export default CountryCard;
