import { MdOutlineMailOutline } from "react-icons/md";
import { CiPhone } from "react-icons/ci";
import Link from "next/link";

export default function Bar() {
  return (
    <div className="w-full fixed top-0 left-0 right-0 z-10 flex items-center justify-between min-h-14 bg-green-400 px-8">
      <div className="hidden lg:flex lg:items-center gap-4 cursor-pointer">
        <div className="flex justify-between gap-1 items-center">
          <MdOutlineMailOutline className="w-5 h-5 text-white" />
          <a href="mailto:info@bakas.com.np" className="text-xl text-white">info@bakas.com.np</a>
        </div>
        <div className="flex justify-between items-center gap-1">
          <CiPhone className="w-5 h-5 text-white cursor-pointer" />
          <a href="tel:+977-01-5111032" className="text-xl text-white">
            +977-01-5111032 | +977-9765545315
          </a>
        </div>
      </div>
      <div className="flex gap-4">
        <Link href="/contact" className="text-xl text-white">
          Contact Us
        </Link>
      </div>
    </div>
  );
}
