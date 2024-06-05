import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { LiaIndustrySolid } from "react-icons/lia";

export default function Detail() {
  return (
    <div className="mt-12 lg:mt-24 flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-16 ">
      {/* Detail 1 */}
      <div className="w-full lg:w-[450px] h-[400px] border border-gray-500 rounded-lg shadow-md flex flex-col justify-center items-center gap-3 p-4">
        <span>
          <HiOutlineBuildingOffice2 className="w-16 h-16 text-green-400" />
        </span>
        <h1 className="text-2xl lg:text-3xl">Head Office</h1>
        <p>8th Floor, Trade Tower, Thapathali,</p>
        <span>Kathmandu, Nepal</span> 
        <a href="mailto:info@bakas.com.np">info@bakas.com.np</a>
        <a href="tel:+977-01-5111032">+977-01-5111032</a>
        <a href="tel:+977-9765545315">+977-9765545315</a>
      </div>
      
      {/* Detail 2 */}
      <div className="w-full lg:w-[450px] h-[400px] border border-gray-500 rounded-lg shadow-md flex flex-col justify-center items-center gap-3 p-4">
        <LiaIndustrySolid className="w-16 h-16 text-green-400" />
        <h1 className="text-2xl lg:text-3xl">Branch Office</h1>
        <p>5th Floor, Plaza Building, Jamal,</p>
        <span>Kathmandu, Nepal</span> 
        <a href="mailto:info@bakas.com.np">info@bakas.com.np</a>
        <a href="tel:+977-01-5111032">+977-01-5111032</a>
        <a href="tel:+977-9765545315">+977-9765545315</a>
      </div>
    </div>
  );
}
