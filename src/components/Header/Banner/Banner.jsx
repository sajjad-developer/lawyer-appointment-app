import React from "react";
import heroBgImg from "../../../assets/images/banner-image/banner-img.png";

const Banner = () => {
  return (
    <section
      className="mx-2  mt-10 md:mx-10  bg-center bg-no-repeat bg-cover rounded-xl hero lg:mx-20 w-[95%] md:w-[89%] lg:w-[87%]"
      style={{
        backgroundImage: `url(${heroBgImg})`,
      }}
    >
      <div className=" hero-content text-[#FFFFFF] text-center mt-80 ">
        <div className="space-y-4">
          <h2 className="px-0 mx-0 text-2xl font-extrabold lg:text-4xl">
            Find Verified Lawyers Online — Anytime, Anywhere
          </h2>
          <p className="mx-0 text-sm font-medium leading-relaxed text-justify lg:px-4 lg:text-xl">
            Connect instantly with licensed and experienced lawyers across a
            wide range of specialties — each thoroughly vetted for
            professionalism and trust. Whether you need a quick consultation or
            ongoing legal support, book appointments online with ease and
            confidence.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Banner;
