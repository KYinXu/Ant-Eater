import Link from 'next/link';
import backgroundimage from ".../bg.png";
import bananaman from "../public/banana-man.png";
import SearchBar from "../components/searchBar"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-bg1 to-bg2 text-white">
      <header className="flex justify-between items-center p-6">
        <a className="hover:cursor-pointer group"><h1 className="text-5xl font-rokkitt text-white ml-7 mt-2">&Eater</h1>
        <div className="ml-7 me-7 bg-white h-[5px] w-0 group-hover:w-10/12 transition-all duration-500"></div>
        </a>
        
        <nav className="hover:-translate-y-1 transition-all duration-500">
          <div className="group">
            <Link href="/search" className="text-white font-semibold -mt-20 mr-10 text-xl">
              search
            </Link>
            <div className=" bg-white h-[3px] w-0 group-hover:w-3/5 transition-all duration-500"></div>
          </div>
        </nav>
      </header>
      <div className="flex mx-28 flex-row min-h-screen bg-green-400/0">
        <main className="hover:cursor-default py-20 px-4 bg-green-900/0 ml-20">
          <div className=' w-4/5'>
            <h2 className="text-9xl font-bebas font-black text-left mt-6 text-white">
              As Pro ZotEaters
            </h2>
          </div>
          <h3 className="text-2xl text-left mb-9 font-ibarra w-4/5 text-white">
            for all ants and eaters.
          </h3>
          <Link href="/search" className="bg-white text-bg1 text-3xl font-serif shadow py-4 px-6 rounded-3xl hover:bg-bg2 hover:text-white transition duration-300">
            let's go!
          </Link>
        </main>
        <div className='flex w-4/5 bg-green-200/0 items-center justify-center -mt-40'>
          <img
            src="https://i.ibb.co/XV5h9NF/Screen-Shot-2024-11-21-at-12-08-30-AM-removebg-preview.png"
            className="justify-center animate-bounceLess"
            alt='picture of a banana'/>
        </div>
      </div>
      <div className="flex bg-white h-96 mx-24 rounded-3xl opacity-50">
        <h2 className="flex font-bebas text-black text-7xl items-center justify-center">
          Features
        </h2>
      </div>
      <footer className="flex justify-center items-center p-6">
p          <p className="text-sm">&copy; 2024 | All rights reserved.</p>
      </footer>
    </div>
  );
}