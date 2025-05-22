import React from "react";

import SuccessSection from "./SuccessSection/SuccessSection";
import LawyersContainer from "./LawyersContainer/LawyersContainer";

const MainContent = ({ lawyers }) => {
  return (
    <main className="main mt-20 w-full mx-auto">
      <div className="flex flex-col justify-center items-center space-y-4 aspect-[3/1] max-w-full">
        <h2 className="text-[#0F0F0F] font-extrabold text-[40px]">
          Our Best Lawyers
        </h2>
        <p className="text-[rgba(15,15,15,0.8)] font-normal text-xl leading-relaxed w-[80%] mx-auto">
          Our platform connects you with verified, experienced Lawyers across
          various specialties — all at your convenience. Whether it's a routine
          checkup or urgent consultation, book appointments in minutes and
          receive quality care you can trust.
        </p>
      </div>
      <LawyersContainer lawyers={lawyers}></LawyersContainer>

      <SuccessSection></SuccessSection>
    </main>
  );
};

export default MainContent;
