import Image from "next/image";
import PelletImg from "../../../public/product_briquette.jpeg";
import { TableDemo } from "./components/Table";

export default function Product(){
    return(
        <div className="pt-40  flex flex-col lg:gap-[50px] ">
            <h1 className="text-5xl lg:text-8xl font-extrabold text-green-300 text-center mb-8 lg:mb-16" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}>Biomass Briqette</h1>
            <div className="flex flex-col lg:flex-row justify-center gap-10 lg:gap-20">
                <div className="max-w-md lg:max-w-[450px]">
                    <p className="text-lg lg:text-xl mb-8 ">
                    Biomass briquettes are a form of biofuel derived from compressed organic matter. They can be made from various types of biomass, including agricultural residues, wood waste, paper, and other plant-based materials. The briquetting process converts low bulk density biomass into high-density and energy-concentrated fuel.
                    </p>
                    <p className="text-3xl lg:text-xl mb-8 font-extrabold">
                        Why Biomass Briquette?
                    </p>
                    <div className="text-lg lg:text-xl mb-8">
                        <h1 className="text-2xl lg:text-lg mb-2 font-bold">Green Coal</h1>
                        <p className="mb-4">
                        Our briquettes comprises of waste biomass (plywaste, corncobs, saw dust) converted to high quality fuel. The green way to fire your furnace and boilers.
                        </p>
                        <h1 className="text-2xl lg:text-lg mb-2  font-bold">Replacement for wood</h1>
                        <p className="mb-4">
                        Replacement for wood Our briquettes are the correct replacement: easy storage, no extra chipping, high density and available all seasons
                        </p>
                        <h1 className="text-2xl lg:text-lg mb-2  font-bold">Cost efficient</h1>
                        <p>
                        Our Briquettes save your boiler fuel by 30-40%.
                        </p>
                    </div>
                </div>
                <div className="w-full lg:w-[550px] h-[400px] lg:h-[700px] relative shadow-2xl mb-8">
                    <Image src={PelletImg} alt={"pellet"} className="rounded-lg" layout="fill" />
                </div>
            </div>
        <TableDemo />
        </div>
    )
}
