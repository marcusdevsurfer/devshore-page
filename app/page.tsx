import Cover from '@/components/Cover';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-black">
      <main className='min-h-screen w-full'>
        <Cover />
        <Contact />
      </main>
    </div>
  );
}
