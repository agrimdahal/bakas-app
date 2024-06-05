import Image from 'next/image';
import bodyimg from "../../public/banner.jpg";
import Link from 'next/link';

function Banner() {
  return (
    <div className="mt-[10rem] mx-[5rem] flex flex-col  lg:flex-row justify-around items-center">
      <div className="max-w-md mr-10 lg:mr-20 text-center lg:text-left lg:left-8">
        <h1 className="text-4xl lg:text-5xl xl:text-7xl font-bold leading-tight">Bakas</h1>
        <h1 className="text-4xl lg:text-5xl xl:text-7xl font-bold leading-tight mb-6">Renewable Energy</h1>
        <p className="mt-4 lg:mt-6 text-base lg:text-lg xl:text-2xl">BREL, established by experts in Nepali forestry and environmental fields, is leading the way in large-scale production of biomass pellets. This initiative marks the beginning of a promising era for sustainable energy in Nepal, offering substantial advantages for the nation.</p>
        <Link href="/about">
          <button className="mt-6 lg:mt-8 px-6 lg:px-8 py-3 lg:py- bg-green text-black text-lg lg:text-2xl font-semibold border hover:bg-green-700 hover:text-white transition-colors duration-300">Explore</button>
        </Link>
      </div>
      <div className="w-72 h-40 lg:h-56 lg:mt-[50px] lg:w-[400px]">
        <Image src={bodyimg} alt="body" className="object-cover w-full h-full" />
      </div>
    </div>
  );
}

export default Banner;
