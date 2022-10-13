import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
export default function Kittens() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>
      <Navbar />
      <main className="grid grid-cols-1 place-items-center">
        <h1 className="text-7xl font-black">Kittens</h1>
        <Link href="/kittens/filaberta">
          <div className="mx-auto">
            <button className="btn btn-secondary">Filaberta</button>
          </div>
        </Link>
      </main>
    </div>
  );
}
