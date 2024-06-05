import Image from "next/image";
import PelletImg from "../../../public/biomass-pellet.png";
import { TableDemo } from "./components/Table";

export default function Product() {
    return (
        <div className="pt-40  flex flex-col lg:gap-[50px]">
            <h1 className="text-5xl lg:text-8xl font-extrabold text-green-300 text-center mb-8 lg:mb-16" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}>Biomass Pellets</h1>
            <div className="flex flex-col lg:flex-row justify-center gap-10 lg:gap-20">
                <div className="max-w-md lg:max-w-[450px]">
                    <p className="text-lg lg:text-xl mb-8">
                        Biomass pellets are made at a pelletisation plant.Here wood that is unsuitable for other industries like sawmill residues, are brought together. The wood is chipped, screened for quality, heated to reduce its moisture content to below 12% and then converted into a fine powder.
                    </p>
                    <p className="text-3xl lg:text-xxl mb-8 font-extrabold">
                        Why Biomass Pellets?
                    </p>
                    <div className="text-lg lg:text-xl mb-8">
                        <h1 className="text-2xl lg:text-lg mb-2 font-bold">Renewable Energy</h1>
                        <p className="mb-4">
                            Pellet is made from waste materials: Ply waste, corn cobs, furniture shavings, saw dust and other byproducts.
                        </p>
                        <h1 className="text-2xl lg:text-lg mb-2 font-bold">Environment Friendly</h1>
                        <p className="mb-4">
                            Our Pellet has negligible sulphur emission and thus is a pollution free alternative to coal.
                        </p>
                        <h1 className="text-2xl lg:text-lg mb-2 font-bold">Reduce Forest Fire</h1>
                        <p>
                            We consume unwanted forest floor for raw materials of pellet, thus helps reduce the forest fire and preserve new seedlings.
                        </p>
                    </div>
                </div>
                <div className="w-full lg:w-[550px] h-[400px] lg:h-[700px] relative shadow-2xl mb-8">
                    <Image src={PelletImg} alt={"pellet"} className="rounded-lg" layout="fill" />
                </div>
            </div>
            <TableDemo />
        </div>
    );
}
