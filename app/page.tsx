import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900">
      <header className="flex justify-between items-center p-6">
        <h1 className="text-3xl font-bold">&Eater</h1>
        <nav>
          <Link href="/search" className="text-lg font-medium hover:underline">
            Search
          </Link>
        </nav>
      </header>
      <main className="flex flex-col items-center justify-center flex-grow text-center py-20 px-4">
        <h2 className="text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-500">
          Welcome to My &Eater
        </h2>
        <h3 className="text-xl mb-8">food.</h3>
        <Link href="/search" className="bg-blue-600 text-white text-lg font-medium py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300">
          Get Started
        </Link>
      </main>
      <footer className="flex justify-center items-center p-6 border-t">
        <p className="text-sm">&copy; 2024 | All rights reserved.</p>
      </footer>
    </div>
  );
}