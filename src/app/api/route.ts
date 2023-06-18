import { CountryDto } from '@/models/CountryDto';
import { NextResponse } from 'next/server';

export async function GET() {
  const countries: Array<CountryDto> = await fetch(
    'https://restcountries.com/v3.1/all'
  ).then((res) => res.json());
  return NextResponse.json(countries);
}
