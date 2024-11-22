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
      <div className="flex mx-28 bg-green-900/0">
        <main className=" hover:cursor-default py-20 px-4 ml-20 bg-green-600/0">
          <div className=' w-4/5 bg-green-500/0'>
            <h2 className="text-9xl font-bebas font-black text-left mt-6 text-white">
              As Pro ZotEaters
            </h2>
          </div>
          <h3 className="text-2xl text-left mb-9 font-ibarra w-4/5 text-white">
            for all ants and eaters.
          </h3>
          <Link href="/search" className="bg-white text-bg1 text-2xl font-serif shadow py-4 px-6 rounded-3xl hover:bg-bg2 hover:text-white transition duration-300">
            let's go!
          </Link>
        </main>
        <div className='flex w-4/5 bg-white/0 items-center justify-center'>
          <img
            src="https://i.ibb.co/XV5h9NF/Screen-Shot-2024-11-21-at-12-08-30-AM-removebg-preview.png"
            className="justify-center animate-bounceLess"
            alt='picture of a banana'/>
        </div>
      </div>
      <div className="flex flex-col h-36"></div>
      <div className="flex flex-row bg-white/50 h-auto mt-12 mb-24 mx-40 py-24 rounded-3xl justify-center text-center">
        <h2 className="font-bebas text-black text-7xl mb-15">
          Features
          <p className='flex flex-row font-ibarra text-3xl justify-center mx-20 mt-10'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="flex flex-row size-12">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
            </svg>
            Discover recipes using a picture of your ingredients and more
          </p>
          <p className='flex flex-row font-ibarra text-3xl justify-center mx-20 mt-10'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="flex flex-row size-12">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
            </svg>
            Discover recipes by manually inputting ingredients
          </p>
        </h2>
        <div className='flex flex-col bg-gray-100/80 rounded-3xl mr-24 min-w-80 shadow-md'>
          <h3 className='flex flex-col font-ibarra font-semibold text-gray-600 text-xl mt-10'>Questions? Contact Us!</h3>
          <p className='flex flex-col font-ibarra font-semibold text-gray-600 mt-8 text-sm'>...contact info...</p>
        </div>
      </div>
      <div className="flex flex-col h-36"></div>
      <div className="flex bg-white/50 h-auto mx-40 mb-10 px-24 pt-8 pb-16 rounded-3xl justify-center text-center">
        <h2 className="font-ibarra font-bold text-black text-4xl mt-10">
          What ingredients do you have?
          <div className="flex flex-col bg-white/70 h-auto rounded-3xl mt-10 -mx-32 shadow-lg">
            <h2 className="flex text-3xl ml-14 my-auto pt-16 pb-10 text-gray-500">Upload an image</h2>
            <div className="border-dashed border-4 border-gray-300 mx-14 py-36 text-xl mb-5 text-gray-500 hover:border-blue-700/50">drag and drop file or browse</div>
            <Link href="/search" className='flex ml-14 text-gray-400 text-xl mb-5 hover:underline'>Or, input manually</Link>
          </div>
        </h2>
      </div>
      <footer className="flex justify-center items-center p-6">
          <p className="text-sm">&copy; 2024 | All rights reserved.</p>
      </footer>
    </div>
  );
}