import React from "react";

const page = () => {
  return (
    <section className="min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-center items-center md:items-start gap-40 h-full font-andale mt-8">
        <div className="flex-1 flex justify-center items-center relative">
          <img
            src="/images/contactus2.jpg"
            alt=""
            className="object-cover w-[420px] h-auto"
          />
          <img
            src="/images/Untitled_Artwork.png"
            alt=""
            className="absolute size-48 md:size-80 md:-right-24 md:-bottom-10 -bottom-32"
          />
        </div>
        <div className="flex-1 flex flex-col justify-center items-start gap-10">
          <p>PHONE: +91 8947832863</p>
          <p>EMAIL: admin@tatvamjaipur.com</p>
          <p>
            ADDRESS: F-135, Chaitanya Marg, behind bagadiya bhawan, C scheme,
            Jaipur, Rajasthan 302012
          </p>
          <p>@tatvamjaipur</p>
        </div>
      </div>
    </section>
  );
};

export default page;
