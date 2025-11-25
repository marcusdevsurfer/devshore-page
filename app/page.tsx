import Cover from '@/components/Cover';
import Portfolio from '@/components/Portfolio';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <div className="min-h-screen bg-black font-sans">
      <main className='min-h-screen w-full'>
        <Cover />
        <Portfolio />
        <Contact />
      </main>
    </div>
  );
}
