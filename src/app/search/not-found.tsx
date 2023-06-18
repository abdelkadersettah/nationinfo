import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="p-8 h-100 flex flex-col items-center justify-center gap-8">
      <h2>Not Found</h2>
      <Link
        href={'/'}
        className="w-24 flex justify-center items-center gap-1 py-1 px-4 mb-4 w- rounded-md bg-[#82a3cc] border-[1px] hover:scale-105 text-white transition-all border-[#82a3cc]"
      >
        Home
      </Link>
    </section>
  );
}
