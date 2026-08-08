import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="sticky top-0 grid grid-cols-3 items-center border-b py-3 px-8 text-lg font-bold z-50 bg-white">
      <div>
        <Link className="hover:underline underline-offset-4 decoration-2" href="/">HOME</Link>
      </div>
      <div className="flex justify-self-center justify-between w-full max-w-md">
        <Link className="hover:underline underline-offset-4 decoration-2" href="/projects">PROJECTS</Link>
        <Link className="hover:underline underline-offset-4 decoration-2" href="/gym">GYM</Link>
        <Link className="hover:underline underline-offset-4 decoration-2" href="/me">ABOUT ME</Link>
      </div>
    </nav>
  );
}