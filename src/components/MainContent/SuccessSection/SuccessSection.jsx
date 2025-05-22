import React from "react";

import starRating from "../../../assets/images/success-images/success-review.png";
import successLawyer from "../../../assets/images/success-images/success-lawyer.png";
import successCases from "../../../assets/images/success-images/success-cases.png";
import successStaffs from "../../../assets/images/success-images/success-staffs.png";
import CountUp from "react-countup";

const SuccessSection = () => {
  return (
    <section className=" mt-18 success-sections space-y-10 px-20 ">
      <div className="success-intro leading-relaxed flex flex-col justify-center items-center space-y-3">
        <h1 className="text-[#0F0F0F] font-extrabold text-[40px]">
          We Provide Best Law Services
        </h1>
        <p className="font-normal px-8 leading-relaxed text-xl text-[#0F0F0F]">
          Our platform connects you with verified, experienced Lawyers across
          various special arena — all at your convenience.
        </p>
      </div>
      <div className="success-container flex gap-6 ">
        {/* success card 1 */}
        <div className="stats space-y-4 flex flex-col justify-center items-center bg-gray-200 w-76 aspect-[1/1]">
          <div className="star-rating">
            <img src={successLawyer} alt="success rating displayed" />
          </div>
          <div className="stat-value font-extrabold text-5xl text-[#0F0F0F]">
            <CountUp start={0} end={199} suffix="+" duration={5}>
              199
            </CountUp>
          </div>
          <div className="stat-desc font-medium text-xl text-[rgba(15,15,15,0.6)]">
            Total Lawyer
          </div>
        </div>
        {/* success card 2 */}
        <div className="stats space-y-4 flex flex-col justify-center items-center bg-gray-200 w-76 aspect-[1/1]">
          <div className="star-rating">
            <img src={starRating} alt="success rating displayed" />
          </div>
          <div className="stat-value font-extrabold text-5xl text-[#0F0F0F]">
            <CountUp start={0} end={467} suffix="+" duration={5}>
              467
            </CountUp>
          </div>
          <div className="stat-desc font-medium text-xl text-[rgba(15,15,15,0.6)]">
            Total Reviews
          </div>
        </div>
        {/* success card 3 */}
        <div className="stats space-y-4 flex flex-col justify-center items-center bg-gray-200 w-76 aspect-[1/1]">
          <div className="star-rating">
            <img src={successCases} alt="success rating displayed" />
          </div>
          <div className="stat-value font-extrabold text-5xl text-[#0F0F0F]">
            <CountUp start={0} end={1900} suffix="+" duration={5}>
              1900
            </CountUp>
          </div>
          <div className="stat-desc font-medium text-xl text-[rgba(15,15,15,0.6)]">
            Cases Initiated
          </div>
        </div>
        {/* success card 4 */}
        <div className="stats space-y-4 flex flex-col justify-center items-center bg-gray-200 w-76 aspect-[1/1]">
          <div className="star-rating">
            <img src={successStaffs} alt="success rating displayed" />
          </div>
          <div className="stat-value font-extrabold text-5xl text-[#0F0F0F]">
            <CountUp start={0} end={300} suffix="+" duration={5}>
              300
            </CountUp>
          </div>
          <div className="stat-desc font-medium text-xl text-[rgba(15,15,15,0.6)]">
            Total Staffs
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessSection;
