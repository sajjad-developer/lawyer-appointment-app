import React, { useEffect, useRef, useState } from "react";
import LawyerCard from "./LawyerCard/LawyerCard";
import { Link } from "react-router";

const LawyersContainer = ({ lawyers }) => {
  const [displayLawyers, setDisplayLawyers] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const refSection = useRef(null);
  useEffect(() => {
    if (showAll) {
      setDisplayLawyers(lawyers);
    } else {
      setDisplayLawyers(lawyers.slice(0, 6));
    }
  }, [lawyers, showAll]);

  return (
    <>
      <div
        ref={refSection}
        className="grid grid-cols-1 gap-2 mx-2 md:mx-10 mt-6 lg:mx-20 lg:grid-cols-2 lg:gap-6"
      >
        {displayLawyers.map((lawyer) => (
          <LawyerCard key={lawyer.id} lawyer={lawyer}></LawyerCard>
        ))}
      </div>
      <div className="flex justify-center items-center mt-10">
        <Link
          to="#_"
          className="inline-block relative justify-center text-lg text-center group"
        >
          <button className="inline-block relative text-lg cursor-pointer group">
            <span className="block overflow-hidden relative z-10 px-5 py-3 font-medium leading-tight text-gray-800 rounded-lg border-2 border-gray-900 transition-colors duration-300 ease-out group-hover:text-white">
              <span className="absolute inset-0 px-5 py-3 w-full h-full bg-gray-50 rounded-lg"></span>
              <span className="absolute left-0 -ml-2 w-48 h-48 bg-gray-900 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 group-hover:-rotate-180 ease"></span>
              <span className="relative">Button Text</span>
            </span>
            <span
              className="absolute right-0 bottom-0 -mr-1 -mb-1 w-full h-12 bg-gray-900 rounded-lg transition-all duration-200 ease-linear group-hover:mb-0 group-hover:mr-0"
              data-rounded="rounded-lg"
            ></span>
          </button>
          <button
            onClick={() => {
              setShowAll((prv) => !prv);
              if (showAll) refSection.current.scrollIntoView();
            }}
            className="container-btn bg-[#0EA106] border-none   relative z-10 block px-10 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white text-white"
          >
            <span className="absolute left-0 -ml-2 w-48 h-48 bg-gray-900 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 group-hover:-rotate-180 ease"></span>
            <span className="relative">
              {showAll ? "show less" : "show all"}
            </span>
          </button>
        </Link>
      </div>
    </>
  );
};

export default LawyersContainer;
