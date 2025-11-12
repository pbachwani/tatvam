"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav
      className={`fixed top-0 w-full ${isOpen ? "h-screen bg-white" : "h-24"} 
       duration-1000 ease-in-out transition-all z-50`}
    >
      <div className="absolute top-0 py-2 w-full flex justify-center items-center h-full">
        <Link href={"/"} className="scale-90">
          <svg
            width="81"
            height="47"
            viewBox="0 0 81 47"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M50.6864 46.7733H44.9646C44.8624 39.0053 41.7468 32.9395 34.9362 28.8231C30.5735 26.1858 26.0073 25.0098 21.0322 25.4995C10.8491 26.5031 2.59572 31.2622 0.00994014 45.136C-0.245171 34.8329 4.41705 27.1911 13.2099 23.4978C24.3664 18.8124 33.625 21.5422 44.513 32.904V3.24888H25.2082L24.8366 -1.10299e-05H80.3282L80.4748 3.28088H50.6864V25.2684V46.7733Z"
              fill="black"
            />
          </svg>
        </Link>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            duration: 0.5,
            delay: 2,
          },
        }}
        exit={{ opacity: 0 }}
        className="max-w-[1440px] mx-auto flex justify-center items-center h-full w-full"
      >
        <AnimatePresence>
          {isOpen && (
            <div className="w-full h-screen grid grid-cols-3 gap-0 place-items-center">
              <div className="flex flex-col justify-between items-center h-[50vh] w-full">
                <div className="flex justify-center items-center">
                  <Link href={"/contact"}>Contact</Link>
                </div>
                <div>some link</div>
                <div className="flex justify-center items-center">bottom</div>
              </div>
              <div className="flex flex-col justify-between items-center h-[50vh] w-full">
                <div className="flex justify-center items-center">
                  <Link href={"/contact"}>Contact</Link>
                </div>
                <div className="flex justify-center items-center">bottom</div>
              </div>
              <div className="flex flex-col justify-between items-center h-[50vh] w-full">
                <div className="flex justify-center items-center">
                  <Link href={"/contact"}>Contact</Link>
                </div>
                <div>some link</div>
                <div className="flex justify-center items-center">bottom</div>
              </div>
            </div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* center logo container */}
      <button
        className="absolute top-4 right-10"
        onClick={() => setIsOpen(!isOpen)}
      >
        toggle nav
      </button>
    </nav>
  );
};

export default Navbar;
