import { LiaIndustrySolid } from "react-icons/lia";
import Image from "next/image";
import WoodCollection from "../../../../public/Woodwaste.jpeg";
import Chipping from "../../../../public/shreding machine.png";
import Rotary from "../../../../public/rotary.png";
import Peletization from "../../../../public/pelletiza.png";
import Pellet from "../../../../public/collectpellets.jpeg";
import Right from "../../../../public/right.png";
import Left from "../../../../public/left.png";

export default function WorkingProcess() {
  return (
    <div className="flex flex-col justify-center items-center mb-16 lg:mb-24">
      <h1 className="mt-16 lg:mt-24 text-5xl lg:text-8xl font-extrabold text-green-300 text-center" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}>How does it work?</h1>

      {/* step-1 */}
      <div className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-[290px] mt-8 lg:mt-12">
        <div className="lg:w-1/2 flex flex-col gap-5">
          <div className="flex justify-center items-center gap-3">
            <span className="w-16 h-16  rounded-lg bg-green-400 flex justify-center items-center"><LiaIndustrySolid className="w-10 h-10 text-white" /></span>
            <h1 className="text-2xl lg:text-3xl">Collection of Wood</h1>
          </div>
          <p className="max-w-lg text-center lg:text-left">Transforming forest floor waste alongside discarded materials from the plywood and furniture industries into the essential raw materials for wood pellet production. </p>
        </div>
        <div className="w-full lg:w-full h-[200px] lg:h-[400px] relative">
          <Image src={WoodCollection} alt="Industry image" className="rounded-lg" layout="fill" />
        </div>
      </div>
      <Image src={Right} alt="" className="w-full mt-8" />

      {/* step-2 */}
      <div className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-[290px] mt-8 lg:mt-12">
        <div className="lg:w-1/2 flex flex-col gap-5">
          <div className="flex justify-center items-center gap-4">
            <span className="w-16 h-16  rounded-lg bg-green-400 flex justify-center items-center"><LiaIndustrySolid className="w-10 h-10 text-white" /></span>
            <h1 className="text-2xl lg:text-3xl">Chipping of Wood</h1>
          </div>
          <p className="max-w-lg text-center lg:text-left">The collected wood waste and forest floor debris are chipped into small pieces, ready for the next process to reduce moisture.</p>
        </div>
        <div className="w-full lg:full h-[200px] lg:h-[400px] relative">
          <Image src={Chipping} alt="Industry image" className="rounded-lg" layout="fill" />
        </div>
      </div>
      <Image src={Left} alt="" className="w-full  mt-8" />

      {/* step-3 */}
      <div className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-[290px] mt-8 lg:mt-12">
        <div className="lg:w-full flex flex-col gap-5">
          <div className="flex justify-center items-center gap-4">
            <span className="w-16 h-16  rounded-lg bg-green-400 flex justify-center items-center"><LiaIndustrySolid className="w-10 h-10 text-white" /></span>
            <h1 className="text-2xl lg:text-3xl">Rotary Screen</h1>
          </div>
          <p className="max-w-lg text-center lg:text-left">
          The chipped biomass is dried in the RFD dryer, which includes both rotary and flash drying processes to accommodate sawdust as well as wood chips.
          </p>
        </div>
        <div className="w-full lg:full h-[200px] lg:h-[400px] relative">
          <Image src={Rotary} alt="Industry image" className="rounded-lg" layout="fill" />
        </div>
      </div>
      <Image src={Right} alt="" className="w-full  mt-8" />

      {/* step-4 */}
      <div className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-[290px] mt-8 lg:mt-12">
        <div className="lg:w-1/2 flex flex-col gap-5">
          <div className="flex justify-center items-center gap-4">
            <span className="w-16 h-16  rounded-lg bg-green-400 flex justify-center items-center"><LiaIndustrySolid className="w-10 h-10 text-white" /></span>
            <h1 className="text-2xl lg:text-3xl">Pelletization</h1>
          </div>
          <p className="max-w-lg text-center lg:text-left">The dried wood chips are processed through pelletization using an Andritz European machine. This PLC-automated machine hammers the wood into dust, pelletizes the raw material, cools the formed pellets, and then sends them to the packaging chamber.</p>
        </div>
        <div className="w-full lg:w-full h-[200px] lg:h-[400px] relative">
          <Image src={Peletization} alt="Industry image" className="rounded-lg" layout="fill" />
        </div>
      </div>
      <Image src={Left} alt="" className="w-full  mt-8" />

      {/* step-5 */}
      <div className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-[290px] mt-8 lg:mt-12">
        <div className="lg:w-1/2 flex flex-col gap-5">
          <div className="flex justify-center items-center gap-4">
            <span className="w-16 h-16 rounded-lg bg-green-400 flex justify-center items-center"><LiaIndustrySolid className="w-10 h-10 text-white" /></span>
            <h1 className="text-2xl lg:text-3xl">Baggage of Pellets</h1>
          </div>
          <p className="max-w-lg text-center lg:text-left">
            The pellets are sieved into the required sizes and then packaged using a semi-automatic machine, with package weights varying according to the requirement 25 kg, 30 kg, 50 kg, and even 1 ton.
            </p>
        </div>
        <div className="w-full lg:w-full h-[200px] lg:h-[400px] relative">
          <Image src={Pellet} alt="Industry image" className="rounded-lg" layout="fill" />
        </div>
      </div>

    </div>
  );
}
