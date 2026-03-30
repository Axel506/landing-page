import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-gradient-to-r from-black via-gray-800 to-black font-sans">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-transparent sm:items-start">
        <h1 className="text-6xl font-bold text-white mb-6">AXTORR</h1>
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h2 className="max-w-2xl text-2xl font-light leading-10 tracking-wide text-gray-200">
            Costa Rica-based DJ specializing in Afro, House, and Tech House for over 5 years.
          </h2>
          <p className="max-w-2xl text-md text-gray-300">
            Get ready to dive into the world of techno. Learn more or explore collaborations at <Link href='/contact' className='font-medium text-pink-400'>Contact AXTORR</Link>. For updates, stay tuned.
          </p>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-pink-500 px-5 text-white transition-colors hover:bg-pink-400 md:w-[158px]"
            href="https://soundcloud.com/axtorr"
            target="_blank"
            rel="noopener noreferrer"
          >
            Listen Now
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-pink-500 px-5 transition-colors hover:border-pink-400 hover:bg-pink-500 hover:text-white md:w-[158px]"
            href="https://axtorr-mixes.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mixes
          </a>
        </div>
      </main>
    </div>
  );
}