"use client";
import Image from 'next/image';
import Link from 'next/link';
import logo from "../../public/logo.png";

import React from "react";
import { FaInstagram, FaTwitter, FaLinkedin, FaYoutube, FaPhoneAlt, FaFacebook } from "react-icons/fa";
import { InputWithButton } from "./EmailInput";
import { FaLocationDot } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";


const Footer: React.FC = () => (
    <>
        <div className="bg-gray-50 h-25 w-full flex md:flex-row flex-col justify-around items-start p-10 bottom-10">
            <div className="p-5 ">
                <ul>
                    <Link href="/">
                        <Image src={logo} alt={'logo'} width={156} height={15} />
                    </Link>
                    <div className="flex  m-3 gap-6 pb-6">
                    <a href="https://www.facebook.com/share/BzrHgdmtV1F9qaqV/?mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer">
                        <FaFacebook className="text-2xl cursor-pointer hover:text-blue-600" />
                    </a>
                    <a href="https://youtube.com/@bakascompany4610?si=w3KOo2G0xjbSt4At" target="_blank" rel="noopener noreferrer">
                         <FaLinkedin className="text-2xl cursor-pointer hover:text-blue-600" />
                    </a>
                    <a href="https://youtube.com/@bakascompany4610?si=w3KOo2G0xjbSt4At" target="_blank" rel="noopener noreferrer">
                        <FaYoutube className="text-2xl cursor-pointer hover:text-red-600" />
                    </a>
                    </div>
                </ul>
            </div>
            <div className="p-5">
                <ul>
                    <p className="text-gray-800 font-bold text-2xl pb-4">Product</p>
                    <Link href="biomass_pellets">
                    <li className="text-gray-500 text-md pb-2 font-semibold hover:text-green-400 cursor-pointer">
                        Biomass Pellets
                    </li>
                    </Link>
                    <Link href="biomass_briqutte">
                    <li className="text-gray-500 text-md pb-2 font-semibold hover:text-green-400 cursor-pointer">
                        Biomass Briqutte
                    </li>
                    </Link>
                </ul>
            </div>
            <div className="p-5">
                <ul>
                    <p className="text-gray-800 font-bold text-2xl pb-4">Contacts</p>
                    <li className="text-gray-500 text-md pb-2 font-semibold hover:text-green-400 cursor-pointer flex items-center gap-1 z-10">
                        <FaPhoneAlt />
                        +977-01-5111032 | +977-9765545315
                    </li>
                    <li className="text-gray-500 text-md pb-2 font-semibold hover:text-green-400 cursor-pointer flex gap-1 justify-between items-center">
                        <FaLocationDot  />
                        8th Floor, Trade Tower, Thapathali, Kathmandu,Nepal
                    </li>
                    <li className="text-gray-500 txt-md pb-2 font-semibold hover:text-green-400 cursor-pointer flex gap-1justify-between items-center">
                        <IoMail />
                        info@bakas.com.np
                    </li>
                </ul>
            </div>
            <InputWithButton />
        </div>
        <div className="flex flex-col justify-center items-center text-center  p-5 bg-gray-50">
            <h1 className=" text-gray-800 font-semibold">
                © All rights reserved |
                <span className="hover:text-blue-600 font-semibold cursor-pointer">
                    Bakas
                </span>
            </h1>
        </div>
    </>
)

export default Footer;
