import Nav from '../components/Nav';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Nav />
      <main className="px-8 text-gray-200 min-h-screen font-sans">
        <div className="max-w-[500px] mx-auto py-8">
          <h1 className="text-orange-300 text-3xl font-bold mb-6">How to Use LBHP</h1>
          
          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">How to Use</h2>
            <p className="text-lg">
                  This is where information on how to use LBHP goes.
            </p>
          </section>
        </div>
      </main>
    </>
  );
}
