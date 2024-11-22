import Link from 'next/link';
import backgroundimage from "./bg.png"
import bananaman from "../public/banana-man.png"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-bg1 to-bg2 text-gray-900">
      <header className="flex justify-between items-center p-6">
        <h1 className="text-5xl font-rokkitt">
          &Eater
        </h1>
        <nav>
          <Link href="/search" className="text-lg font-medium hover:underline">
            Search
          </Link>
        </nav>
      </header>
      <div className="container bg-transparent dark:bg-gray-900 mx-28">
        <div className="grid grid-cols-2 min-h-screen text-gray-900">
          <div className="">
            <main className="flex flex-col items-center justify-center flex-grow text-center py-20 px-4">
              <div className=' w-4/5'>
                <h2 className="text-9xl font-bebas font-black text-left mt-6 bg-clip-text text-transparent bg-gradient-to-r from-big1 to-big2">
                  As Pro ZotEaters
                </h2>
              </div>
              <h3 className="text-2xl text-left mb-9 font-ibarra text-lext w-4/5">
                for all ants and eaters.
              </h3>
              <Link href="/search" className="bg-gray-200 text-x text-lg font-medium font-serif shadow py-3 px-6 rounded-lg hover:bg-x hover:text-white transition duration-300">
                let's go!
              </Link>
            </main>
          </div>
          <div className="">
            <main className="flex flex-col items-center justify-center flex-grow text-center py-20 px-4">
              <div className=' w-4/5'>
                <img src="/public/banana-man.jpg" className="text-8xl font-bebas font-black text-left mt-6" alt='picture of a banana'></img>
              </div>
            </main>
          </div>
        </div>
      </div>
      <div className="card"></div>
      <footer className="flex justify-center items-center p-6 border-t">
          <p className="text-sm">&copy; 2024 | All rights reserved.</p>
      </footer>
    </div>
  );
}