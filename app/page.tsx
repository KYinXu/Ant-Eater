import Link from 'next/link';
import backgroundimage from ".../bg.png";
import bananaman from "../public/banana-man.png";
import SearchBar from "../components/searchBar"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-bg1 to-bg2 text-white">
      <header className="flex justify-between items-center p-6">
        <h1 className="text-5xl font-rokkitt text-white ml-7 mt-2">&Eater</h1>
        <nav>
          <Link href="/search" className="text-white font-semibold hover:underline -mt-20 mr-10 text-xl">
            search
          </Link>
        </nav>
      </header>
      <div className="mx-28">
        <div className="grid grid-cols-2 min-h-screen text-gray-900">
          <div className="">
            <main className="py-20 px-4">
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
                <img src="https://i.ibb.co/XV5h9NF/Screen-Shot-2024-11-21-at-12-08-30-AM-removebg-preview.png" className="-mt-8 animate-bounce w-10/12" alt='picture of a banana'></img>
              </div>
            </main>
          </div>
        </div>
      </div>
      <div className="flex bg-white h-96 mx-24 rounded-3xl opacity-50">
        <h2 className="flex font-bebas text-black text-7xl items-center justify-center">
          Features
        </h2>
      </div>
      <footer className="flex justify-center items-center p-6">
          <p className="text-sm">&copy; 2024 | All rights reserved.</p>
      </footer>
    </div>
  );
}