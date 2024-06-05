import Image from "next/image";
import Pharmacy from "../../../../public/applicationimages/pharmacy.jpeg";
import Bakery from "../../../../public/applicationimages/Bakery.jpeg";
import Dairy from "../../../../public/applicationimages/Dairy.jpeg";
import Burner from "../../../../public/applicationimages/burner.jpeg";
import Dye from "../../../../public/applicationimages/paint.jpeg";
import Print from "../../../../public/applicationimages/Printing.webp";
import texttile from "../../../../public/applicationimages/textile.webp";
import boiler from "../../../../public/applicationimages/boiler.jpeg";
import namkeen from "../../../../public/applicationimages/Namkeen.webp";

const ImageGrid = () => {
  return (
    <div className="mb-[100px] px-4">
      <div className="flex flex-wrap justify-center gap-[30px]">
        <div className="w-full sm:w-[400px] h-[400px] relative mb-8">
          <Image src={Pharmacy} alt={"pellet"} className="rounded-lg" layout="fill" objectFit="cover" />
          <p className="absolute bottom-0 border bg-blue-300 text-white p-2 w-full text-center">Pellets are used for thermic heating system and Hot air generators.</p>
        </div>
        <div className="w-full sm:w-[400px] h-[400px] relative mb-8">
          <Image src={Bakery} alt={"pellet"} className="rounded-lg" layout="fill" objectFit="cover" />
          <p className="absolute bottom-0 border bg-blue-300 text-white p-2 w-full text-center">Pellets are used for Baking Bakery items like Bread, cake.</p>
        </div>
        <div className="w-full sm:w-[400px] h-[400px] relative mb-8">
          <Image src={boiler} alt={"pellet"} className="rounded-lg" layout="fill" objectFit="cover" />
          <p className="absolute bottom-0 border bg-blue-300 text-white p-2 w-full text-center">Pellets are used for Thermal Fluid, Hot air generators and Steam boilers.</p>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-[30px]">
        <div className="w-full sm:w-[400px] h-[400px] relative mb-8">
          <Image src={Dye} alt={"pellet"} className="rounded-lg" layout="fill" objectFit="cover" />
          <p className="absolute bottom-0 border bg-blue-300 text-white p-2 w-full text-center">Pellets are used for creating colors in Pigment industries.</p>
        </div>
        <div className="w-full sm:w-[400px] h-[400px] relative mb-8">
          <Image src={Burner} alt={"pellet"} className="rounded-lg" layout="fill" objectFit="cover" />
          <p className="absolute bottom-0 border bg-blue-300 text-white p-2 w-full text-center">Pellets are used as stove(chulo) for home cooking appliances.</p>
        </div>
        <div className="w-full sm:w-[400px] h-[400px] relative mb-8">
          <Image src={Print} alt={"pellet"} className="rounded-lg" layout="fill" objectFit="cover" />
          <p className="absolute bottom-0 border bg-blue-300 text-white p-2 w-full text-center">Pellets are used for heating element while printing Papers.</p>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-[30px]">
        <div className="w-full sm:w-[400px] h-[400px] relative mb-8">
          <Image src={texttile} alt={"pellet"} className="rounded-lg" layout="fill" objectFit="cover" />
          <p className="absolute bottom-0 border bg-blue-300 text-white p-2 w-full text-center">Pellets are used for Thermal Fluid, Hot air generators and Steam boilers.</p>
        </div>
        <div className="w-full sm:w-[400px] h-[400px] relative mb-8">
          <Image src={Dairy} alt={"pellet"} className="rounded-lg" layout="fill" objectFit="cover" />
          <p className="absolute bottom-0 border bg-blue-300 text-white p-2 w-full text-center">Pellets are used for making Dairy products like ghee, curd.</p>
        </div>
        <div className="w-full sm:w-[400px] h-[400px] relative mb-8">
          <Image src={namkeen} alt={"pellet"} className="rounded-lg" layout="fill" objectFit="cover" />
          <p className="absolute bottom-0 border bg-blue-300 text-white p-2 w-full text-center">Pellets are used for frying and baking sev like Peanuts, Dal Bhujia.</p>
        </div>
      </div>
    </div>
  );
};

export default ImageGrid;
