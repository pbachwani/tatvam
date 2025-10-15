"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      if (currentY > lastScrollY && currentY > 50) {
        // scrolling down
        setShow(false);
      } else {
        // scrolling up
        setShow(true);
      }

      setLastScrollY(currentY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav
      className={`fixed top-0 w-full ${isOpen ? "h-screen" : "h-20"} ${
        // scrolled ? "" : "" ""
        ""
      } duration-700 ease-in-out transition-all z-50`}
    >
      <div className="max-w-[1440px] mx-auto flex justify-center items-center h-full w-full ">
        {isOpen && <div>content</div>}
      </div>

      {/* center logo container */}
      <div className="absolute top-0 py-2 w-full flex justify-center items-center h-full">
        <Link href={"/"} className="scale-80">
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
