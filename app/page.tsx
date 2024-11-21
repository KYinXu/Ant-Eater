import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <Link href="/search">
        Go to search page
      </Link>
    </div>
  );
}