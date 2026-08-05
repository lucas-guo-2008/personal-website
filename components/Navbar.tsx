import Link from 'next/link';

export default function Navbar() {
  return (
    <nav>
      <div>
        <Link href="/">Home</Link>
        <Link href="/projects">Projects</Link>
      </div>
    </nav>
  );
}