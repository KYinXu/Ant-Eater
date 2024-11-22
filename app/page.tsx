import Link from 'next/link';
import backgroundimage from ".../bg.png";
import bananaman from "../public/banana-man.png";
import SearchBar from "../components/searchBar"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-bg1 to-bg2 text-white">
      <header className="flex justify-between items-center p-6">
        <h1 className="text-5xl font-rokkitt text-white">&Eater</h1>
        <nav>
          <Link href="/search" className="text-white font-semibold hover:underline">
            Search
          </Link>
        </nav>
      </header>
      <div className="container bg-transparent dark:bg-gray-900 mx-28">
        <div className="grid grid-cols-2 min-h-screen text-gray-900">
          <div className="">
            <main className="flex flex-col items-center justify-center flex-grow text-center py-20 px-4">
              <div className=' w-4/5'>
                <h2 className="text-9xl font-bebas font-black text-left mt-6 text-white">
                  As Pro ZotEaters
                </h2>
              </div>
              <h3 className="text-2xl text-left mb-9 font-ibarra w-4/5 text-white">
                for all ants and eaters.
              </h3>
              <Link href="/search" className="bg-white text-bg1 font-medium font-serif shadow py-3 px-6 rounded-lg hover:bg-bg2 hover:text-white transition duration-300">
                let's go!
              </Link>
            </main>
          </div>
          <div className="">
            <main className="flex flex-col items-center justify-center flex-grow text-center py-20 px-4">
              <div className=' w-4/5'>
                <img src="/public/banana-man.jpg" className="text-8xl font-bebas font-black text-left text-white mt-6" alt='picture of a banana'></img>
              </div>
            </main>
          </div>
        </div>
      </div>
      <div className="flex flex-col bg-green-500 h-96">
        <p>test</p>
      </div>
      <footer className="flex justify-center items-center p-6 border-t">
          <p className="text-sm">&copy; 2024 | All rights reserved.</p>
      </footer>
    </div>
  );
}