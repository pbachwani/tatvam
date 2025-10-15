import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section className="w-full h-full min-h-[90vh] flex justify-center items-center">
      <div className="text-4xl">
        <Link href={"/projects"}>All Projects</Link>
      </div>
    </section>
  );
};

export default Hero;
