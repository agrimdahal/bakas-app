import Image from "next/image";
import pelletImg from "../../public/pelletproduct.png";
import briquetteImg from "../../public/Briqutteproduct.png";
import Link from "next/link";

export default function FeaturedProducts() {
  return (
    <div className="container mx-auto px-4 lg:px-0">
      <div className="text-center mb-8">
      <h1 className="mt-12 lg:mt-32  text-3xl lg:text-6xl font-extrabold text-center" >
      Our Products
    </h1>
      </div>
      <div className=" lg:mt-[100px] grid grid-cols-1 md:grid-cols-2  md:gap-0"> 
        <div className="flex flex-col items-center">
          <div className="relative w-full lg:w-[450px] lg:h-[450px] h-64 md:h-96">
            <Image src={pelletImg} alt="Biomass Pellet"  layout="fill" />
          </div>
          <Link href="biomass_pellets">
            <h3 className="mt-4 text-lg font-semibold border w-[450px] h-12 flex items-center justify-center hover:bg-green-700 hover:text-white">
              Biomass Pellet
            </h3>
          </Link>
        </div>
        <div className="flex flex-col items-center">
          <div className="relative w-full lg:w-[450px] lg:h-[450px] h-64 md:h-96">
            <Image src={briquetteImg} alt="Biomass Briquette" layout="fill" />
          </div>
          <Link href="biomass_briqutte">
            <h3 className="mt-4 text-lg font-semibold border w-[450px] h-12 flex items-center justify-center hover:bg-green-700 hover:text-white">
              Biomass Briquette
            </h3>
          </Link>
        </div>
      </div>
    </div>
  );
}
