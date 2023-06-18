import { CountryDto } from '@/models/CountryDto';
import Image from 'next/image';
import Link from 'next/link';
import { BiArrowBack } from 'react-icons/bi';

type Props = {
  params: { ccn3: string };
};

async function getCountry(ccn3: string) {
  const country: Array<CountryDto> = await fetch(
    `https://restcountries.com/v3.1/alpha/${ccn3}`
  ).then((res) => res.json());
  return country;
}
async function getBorders(countriesCode: Array<string>) {
  const params = countriesCode?.join(',');
  const countries: Array<CountryDto> = await fetch(
    `https://restcountries.com/v3.1/alpha?codes=${params}`
  ).then((res) => res.json());
  return countries;
}

export async function generateMetadata({ params }: Props) {
  const country = await getCountry(params.ccn3);

  return {
    title: `NationInfo: ${country[0]?.name?.common}`,
    description:
      'Explore the world with NationInfo, your go-to app for detailed country information. From history to geography, culture to travel essentials, discover fascinating insights and essential stats. Download now and embark on a journey of knowledge!',
  };
}

async function CountryDetail({ params }: Props) {
  const country = await getCountry(params.ccn3);
  const borderCountries = country[0]?.borders
    ? await getBorders(country[0].borders)
    : null;

  return (
    <section className="p-6">
      <Link
        href={'/'}
        className="w-24 flex justify-center items-center gap-1 py-1 px-4 mb-4 w- rounded-md bg-[#82a3cc] border-[1px] hover:scale-105 text-white transition-all border-[#82a3cc]"
      >
        <BiArrowBack />
        Back
      </Link>
      <article>
        <figure className="country__figure">
          <Image
            className="w-full  max-w-md h-auto object-fill"
            src={country[0]?.flags?.png}
            alt={
              country[0]?.flags?.alt
                ? country[0]?.flags?.alt
                : 'Country image flag'
            }
            width={320}
            height={160}
          />
        </figure>

        <div className="py-5 px-2 	">
          <h2 className="font-bold mb-2">{country[0]?.name?.common}</h2>
          <ul className="">
            <li>
              <span className="font-medium">Population:</span>{' '}
              <span className="country__subtitle--content">
                {new Intl.NumberFormat().format(country[0]?.population)}
              </span>
            </li>
            <li>
              <span className="font-medium">Region:</span>{' '}
              <span className="country__subtitle--content">
                {country[0]?.region}
              </span>
            </li>
            <li>
              <span className="font-medium">Google Maps:</span>{' '}
              <Link
                href={country[0]?.maps?.googleMaps}
                target="_blank"
                className="underline"
              >
                {country[0]?.maps?.googleMaps}
              </Link>
            </li>
            {country[0]?.capital && (
              <li>
                <span className="font-medium">Capital:</span>{' '}
                <span className="country__subtitle--content">
                  {country[0]?.capital}
                </span>
              </li>
            )}
            {country[0]?.coatOfArms?.png && (
              <li className="flex items-center gap-8">
                <span className="font-medium">Coat of Arms:</span>{' '}
                <Image
                  className="  object-fill"
                  src={country[0]?.coatOfArms?.png}
                  alt={country[0]?.flags?.alt}
                  width={120}
                  height={60}
                />
              </li>
            )}
            {borderCountries && (
              <li className=" flex items-start  gap-1 my-4 ">
                <span className="font-medium">Borders:</span>{' '}
                <ul className=" flex   gap-2 flex-wrap">
                  {borderCountries?.map((country) => {
                    return (
                      <Link
                        href={`/country/${
                          country?.ccn3 ||
                          country?.cca2 ||
                          country?.cca3 ||
                          country?.cioc
                        }`}
                        key={country?.ccn3}
                        className="py-1 px-4  w- rounded-md bg-[#82a3cc] border-[1px] hover:scale-105 text-white transition-all border-[#82a3cc]"
                      >
                        {country?.name?.common}
                      </Link>
                    );
                  })}
                </ul>
              </li>
            )}
          </ul>
        </div>
      </article>
    </section>
  );
}

export default CountryDetail;
