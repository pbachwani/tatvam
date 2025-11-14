"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import clsx from "clsx";
import { delay } from "motion";

const Navbar = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08, // controls delay between boxes
        delayChildren: 0.5, // delay before first box starts
      },
    },
  };
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  const [isOpen, setIsOpen] = useState(false);
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Scroll hide/show
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      if (currentY > lastScrollY && currentY > 10) {
        setShow(false);
      } else {
        setShow(true);
      }

      setLastScrollY(currentY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <motion.nav
      className={clsx(
        `fixed top-0 w-full h-24 z-50
         flex items-center justify-center transition-transform duration-1000 ease-out`,
        show ? "translate-y-0" : "-translate-y-24"
      )}
    >
      {/* Centered Logo */}
      <Link href="/" className="scale-90">
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

      {/* Hamburger button */}
      <button
        className="absolute right-8 top-1/2 -translate-y-1/2 hover:cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <img
          src="/images/hamburger.png"
          alt=""
          className="w-8 h-8 object-cover"
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, height: 0 }}
            animate={{
              opacity: 1,
              y: 0,
              height: "calc(100vh - 96px)",
              transition: { duration: 1, ease: "easeOut" },
            }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="fixed left-0 top-24 w-full h-[calc(100vh-96px)] bg-background flex justify-center items-center z-40"
          >
            {/* STAGGERED GRID CONTAINER */}
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="grid grid-cols-3 gap-8 w-full justify-items-center"
            >
              {/* BOX 1 */}
              <motion.div variants={item}>
                <Link
                  href="/about"
                  onClick={() => setIsOpen(false)}
                  className="p-10"
                >
                  About1
                </Link>
              </motion.div>

              {/* BOX 2 */}
              <motion.div variants={item}>
                <Link
                  href="/work"
                  onClick={() => setIsOpen(false)}
                  className="p-10"
                >
                  Work1
                </Link>
              </motion.div>

              {/* BOX 3 */}
              <motion.div variants={item}>
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="p-10"
                >
                  Contact1
                </Link>
              </motion.div>

              {/* BOX 4 */}
              <motion.div variants={item}>
                <Link
                  href="/about"
                  onClick={() => setIsOpen(false)}
                  className="p-10"
                >
                  About2
                </Link>
              </motion.div>

              {/* BOX 5 */}
              <motion.div variants={item}>
                <Link
                  href="/work"
                  onClick={() => setIsOpen(false)}
                  className="p-10"
                >
                  Work2
                </Link>
              </motion.div>

              {/* BOX 6 */}
              <motion.div variants={item}>
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="p-10"
                >
                  Contact2
                </Link>
              </motion.div>

              {/* BOX 7 */}
              <motion.div variants={item}>
                <Link
                  href="/about"
                  onClick={() => setIsOpen(false)}
                  className="p-10"
                >
                  About3
                </Link>
              </motion.div>

              {/* BOX 8 */}
              <motion.div variants={item}>
                <Link
                  href="/work"
                  onClick={() => setIsOpen(false)}
                  className="p-10"
                >
                  Work3
                </Link>
              </motion.div>

              {/* BOX 9 */}
              <motion.div variants={item}>
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="p-10"
                >
                  Contact3
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;

{
  /* <AnimatePresence mode="wait">
  {isOpen && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1, delay: 0.5 } }}
      exit={{ opacity: 0, duration: 0.5 }}
      className="max-w-[1440px] mx-auto flex justify-center items-center h-full w-full"
    >
      <div className="w-full h-screen grid grid-cols-3 gap-0 place-items-center">
        <div className="flex flex-col justify-between items-center h-[50vh] w-full">
          <div className="flex justify-center items-center">
            <a href={"/contact"}>Contact</a>
          </div>
          <div>some link</div>
          <div className="flex justify-center items-center">bottom</div>
        </div>

        <div className="flex flex-col justify-between items-center h-[50vh] w-full">
          <div className="flex justify-center items-center">
            <a href={"/contact"}>Contact</a>
          </div>
          <div className="flex justify-center items-center">bottom</div>
        </div>

        <div className="flex flex-col justify-between items-center h-[50vh] w-full">
          <a
            href={"/contact"}
            className="flex justify-center items-center"
          >
            Contact
          </a>
          <div>some link</div>
          <div className="flex justify-center items-center">bottom</div>
        </div>
      </div>
    </motion.div>
  )}
</AnimatePresence> */
}

{
  /* Hamburger button */
}
{
  /* <button
  className="absolute top-4 right-10 h-10"
  onClick={() => setIsOpen(!isOpen)}
>
  <img
    src="/images/hamburger.png"
    alt=""
    className="object-cover w-10 h-10"
  />
</button> */
}
