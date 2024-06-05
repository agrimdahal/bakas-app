
import Map from "./component/Map";
import Link from "next/link";
import Detail from "./component/Detail";
import Image from "next/image";
import Background from "../../../public/pelletsabout.jpeg";
import { ContactUs } from "./component/Form";

export default function Contact() {
  return (
    <div className="">
      <div className="mt-[100px] flex flex-col justify-center items-center gap-[50px]">
      <h1 className=" mt-[100px] text-8xl font-extrabold text-green-300 "  style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}>Contact US</h1>
        <Link href="/">
          <h1 className="text-blue-200 text-2xl flex justify-center items-center">
            Home
          </h1>
        </Link>
        </div>
      <>
        <Detail />
        <ContactUs/>
        <Map />
      </>
    </div>
  );
}
