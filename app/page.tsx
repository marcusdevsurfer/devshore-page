import Cover from '@/components/Cover';
import Portfolio from '@/components/Portfolio';
import Merch from '@/components/Merch';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <main className='min-h-screen w-full'>
        <Cover />
        <Portfolio />
        <Merch />
        <Contact />
      </main>
    </div>
  );
}
