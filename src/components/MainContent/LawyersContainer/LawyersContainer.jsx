import React, { useEffect, useState } from "react";
import LawyerCard from "./LawyerCard/LawyerCard";
import { Link } from "react-router";

const LawyersContainer = ({ lawyers }) => {
  const [displayLawyers, setDisplayLawyers] = useState([]);
  const [showAll, setShowAll] = useState(false);
  useEffect(() => {
    if (showAll) {
      setDisplayLawyers(lawyers);
    } else {
      setDisplayLawyers(lawyers.slice(0, 6));
    }
  }, [lawyers, showAll]);

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-6 mx-20">
        {displayLawyers.map((lawyer) => (
          <LawyerCard key={lawyer.id} lawyer={lawyer}></LawyerCard>
        ))}
      </div>
      <div className=" flex  justify-center  items-center mt-10">
        <Link
          to="#_"
          className="relative justify-center inline-block text-lg group  text-center  "
        >
          <button
            onClick={() => setShowAll((prev) => !prev)}
            className="container-btn bg-[#0EA106] border-none   relative z-10 block px-10 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white text-white"
          >
            <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
            <span className="relative">
              {showAll ? "Show less" : "Show more"}
            </span>
          </button>
        </Link>
      </div>
    </>
  );
};

export default LawyersContainer;
