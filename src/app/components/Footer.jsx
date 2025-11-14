"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Footer = () => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <footer className={`${pathname === "/" ? "hidden" : "block"}`}>
      <div className="mx-auto py-10 px-4 md:px-8 font-andale max-w-7xl">
        {/* Top border line */}
        <hr className="border-t mb-8" />

        {/* Main section: Flex for desktop, stacked for mobile */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
          <div className="mb-8 md:mb-0 flex flex-col justify-between items-start w-full">
            <h2 className="tracking-widest text-lg sm:text-xl mb-6">
              LET US BUILD YOUR DREAM
            </h2>
            <button className="border px-6 py-2 rounded-full tracking-widest text-base transition-colors focus:outline-none hover:bg-[#AB5F4E] hover:border-[#AB5F4E] hover:text-white duration-300 ease-out hover:cursor-pointer">
              <Link href={"/contact"}>CONTACT US</Link>
            </button>
          </div>
          <ul className="space-y-2 flex flex-col md:flex-col md:items-end items-start w-full">
            <li className="cursor-pointer hover:text-[#AB5F4E] transition-colors duration-200 ease-out">
              <Link href={"/about"}>ABOUT US</Link>
            </li>
            <li className="cursor-pointer hover:text-[#AB5F4E] transition-colors duration-200 ease-out">
              TATVAM TALKS
            </li>
            <li className="cursor-pointer hover:text-[#AB5F4E] transition-colors duration-200 ease-out">
              STORIES OF TATVAM
            </li>
            <li className="cursor-pointer hover:text-[#AB5F4E] transition-colors duration-200 ease-out">
              <Link href={"/career"}>CAREERS AT TATVAM</Link>
            </li>
            <li className="cursor-pointer hover:text-[#AB5F4E] transition-colors duration-200 ease-out">
              FOLLOW TATVAM JAIPUR
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
