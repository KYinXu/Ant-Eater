import Link from 'next/link';
import backgroundimage from "./bg.png"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900">


      {/* <section class="bg-white dark:bg-gray-900">
          <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
              <div class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                  <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">We didn't reinvent the wheel</h2>
                  <p class="mb-4">We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need.</p>
                  <p>We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick.</p>
              </div>
              <div class="grid grid-cols-2 gap-4 mt-8">
                  <img class="w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png" alt="office content 1">
                  <img class="mt-4 w-full lg:mt-10 rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png" alt="office content 2">
              </div>
          </div>
      </section> */}

      <header className="flex justify-between items-center p-6">
        <h1 className="text-3xl font-bold">&Eater</h1>
        <nav>
          <Link href="/search" className="text-lg font-medium hover:underline">
            Search
          </Link>
        </nav>
      </header>
      <div className="container bg-white dark:bg-gray-900 mx-auto">
          <div className="flex flex-row min-h-screen bg-blue-700 text-gray-900">
            <div className="flex bg-red-600 text-gray-900">
              <main className="flex flex-col items-center justify-center flex-grow text-center py-20 px-4">
                <h2 className="text-8xl font-extrabold text-left mb-6 px-11 bg-clip-text text-transparent bg-gradient-to-r from-big1 to-big2">
                  As Pro ZotEaters
                </h2>
                <h3 className="text-xl mb-8 font-serif">
                  for all ants and eaters.
                  </h3>
                <Link href="/search" className="bg-gray-200 text-x text-lg font-medium font-serif shadow py-3 px-6 rounded-lg hover:bg-x hover:text-white transition duration-300">
                  let's go!
                </Link>
              </main>
            </div>
            <div className="flex flex-row bg-black ">
              <p className="text-center">test</p>
            </div>
          </div>
      </div>
      <footer className="flex justify-center items-center p-6 border-t">
          <p className="text-sm">&copy; 2024 | All rights reserved.</p>
      </footer>
    </div>
  );
}