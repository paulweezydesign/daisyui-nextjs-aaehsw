import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/Navbar';
export default function Home() {
  return (
    <div data-theme="light">
      <Head>
        <title>Create Next App</title>
      </Head>
      <Navbar />
      <main className="grid grid-cols-1 items-center justify-center">
        <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black ">
          Come adopt my
          <br class="hidden lg:inline-block" />
          cute cute ass kittens
        </h1>
        <Link href="/kittens">
          <div className="mx-auto">
            <button className="btn">To Cuteness</button>
          </div>
        </Link>
      </main>
    </div>
  );
}
