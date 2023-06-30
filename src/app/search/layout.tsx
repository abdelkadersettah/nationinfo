import CountriesFilter from '@/components/CountriesFilter/CountriesFilter';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <article>
      <CountriesFilter />
      {children}
    </article>
  );
}
