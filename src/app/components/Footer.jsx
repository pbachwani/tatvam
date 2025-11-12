"use client";
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
            <button className="border px-6 py-2 rounded-full tracking-widest text-base transition-colors focus:outline-none hover:bg-black hover:text-white duration-300 ease-out">
              CONTACT US
            </button>
          </div>
          <ul className="space-y-2 flex flex-col md:flex-col md:items-end items-start w-full">
            <li className="cursor-pointer hover:text-[#AB5F4E] transition-colors duration-200 ease-out">
              ABOUT US
            </li>
            <li className="cursor-pointer hover:text-[#AB5F4E] transition-colors duration-200 ease-out">
              TATVAM TALKS
            </li>
            <li className="cursor-pointer hover:text-[#AB5F4E] transition-colors duration-200 ease-out">
              STORIES OF TATVAM
            </li>
            <li className="cursor-pointer hover:text-[#AB5F4E] transition-colors duration-200 ease-out">
              CAREERS AT TATVAM
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
