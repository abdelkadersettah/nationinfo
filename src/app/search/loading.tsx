import Loader from '@/components/Loader/Loader';

export default function Loading() {
  return (
    <section className="p-8 h-100 flex flex-col items-center justify-center gap-8">
      <Loader />
    </section>
  );
}
