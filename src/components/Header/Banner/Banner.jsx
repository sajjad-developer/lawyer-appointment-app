import React from "react";
import heroBgImg from "../../../assets/images/banner-image/banner-img.png";

const Banner = () => {
  return (
    <section
      className="hero rounded-xl mx-8 lg:mx-20  mt-10  bg-center bg-cover bg-no-repeat w-[87%]"
      style={{
        backgroundImage: `url(${heroBgImg})`,
      }}
    >
      <div className=" hero-content text-[#FFFFFF] text-center mt-80 ">
        <div className="space-y-4">
          <h2 className="font-extrabold text-2xl lg:text-4xl  px-0 mx-0">
            Find Verified Lawyers Online — Anytime, Anywhere
          </h2>
          <p className="font-medium text-sm lg:text-xl leading-relaxed px-0 mx-0">
            Connect instantly with licensed and experienced lawyers across a
            wide range of specialties — each thoroughly vetted for <br />
            professionalism and trust. Whether you need a quick consultation or
            ongoing legal support, <br /> book appointments online with ease and
            confidence.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Banner;
