import Head from 'next/head';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="text-xl flex justify-evenly">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/kittens">Kittens</Link>
    </nav>
  );
}
