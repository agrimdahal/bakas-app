"use client";
import Image from 'next/image';
import Link from 'next/link';
import logo from "../../public/logo.png";
import { useState } from 'react';
import { IoCloseCircleOutline } from 'react-icons/io5';
import { RiArrowDropDownLine } from 'react-icons/ri';

function NavBar() {
  const [navbar, setNavbar] = useState(false);

  return (
    <div>
      <nav className="w-full bg-white fixed top-0 left-0 right-0 z-10 shadow-lg mt-[50px]">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              {/* LOGO */}
              <Link href="/">
                <Image src={logo} alt={'logo'} width={156} height={15} />
              </Link>
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <IoCloseCircleOutline size={30} />
                  ) : (
                    <Image
                      src="/hamburger.jpeg"
                      width={30}
                      height={30}
                      alt="open menu"
                      className="focus:border-none active:border-none"
                    />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? 'p-12 md:p-0 block' : 'hidden'
              }`}
            >
              <ul className="h-screen md:h-auto items-center justify-center md:flex">
                <li className="pb-6 text-xl text-black py-2 md:px-6 text-center md:hover:text-green-400 md:hover:bg-transparent hover:bg-hsl-152-27-61">
                  <Link href="/about" onClick={() => setNavbar(!navbar)}>
                    About
                  </Link>
                </li>
                <li className="relative pb-6 text-xl text-black py-2 md:px-6 text-center md:hover:text-green-400 md:hover:bg-transparent hover:bg-hsl-152-27-61 group">
                  <button className="flex items-center w-full justify-center" onClick={() => setNavbar(!navbar)}>
                    Products
                    <RiArrowDropDownLine />
                  </button>
                  <ul className="absolute left-0 mt-2 w-48 bg-white shadow-lg hidden group-hover:block md:group-hover:block md:left-auto md:right-0">
                    <li className="py-2 px-4 hover:bg-gray-200">
                      <Link href="/biomass_pellets" onClick={() => setNavbar(false)}>
                        Biomass Pellets
                      </Link>
                    </li>
                    <li className="py-2 px-4 hover:bg-gray-200">
                      <Link href="/biomass_briqutte" onClick={() => setNavbar(false)}>
                        Biomass Briquette
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="pb-6 text-xl text-black py-2 md:px-6 text-center md:hover:text-green-400 md:hover:bg-transparent hover:bg-hsl-152-27-61">
                  <Link href="/application" onClick={() => setNavbar(!navbar)}>
                    Application
                  </Link>
                </li>
                <li className="pb-6 text-xl text-black py-2 md:px-6 text-center md:hover:text-green-400 md:hover:bg-transparent hover:bg-hsl-152-27-61">
                  <Link href="/gallery" onClick={() => setNavbar(!navbar)}>
                    Gallery
                  </Link>
                </li>
                <li className="pb-6 text-xl text-black py-2 md:px-6 text-center md:hover:text-green-400 md:hover:bg-transparent hover:bg-hsl-152-27-61">
                  <Link href="/faqs" onClick={() => setNavbar(!navbar)}>
                    FAQs
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
