import { useState } from "react";

import LawyersContainer from "./LawyersContainer/LawyersContainer";
import SuccessSection from "./SuccessSection/SuccessSection";

import { FaSearch } from "react-icons/fa";

const MainContent = ({ lawyers, handleSearch }) => {
  const [searchText, setSearchText] = useState("");

  return (
    <main className="mx-auto mt-20 w-full main">
      <div className="flex flex-col justify-center items-center space-y-4 aspect-[3/1] max-w-full">
        <h2 className="text-[#0F0F0F] text-center font-extrabold text-3xl  lg:text-[40px]">
          Our Best Lawyers
        </h2>
        <p className=" text-[rgba(15,15,15,0.8)] font-normal text-justify text-base  lg:text-xl leading-relaxed w-[95%] md:w-[85%] lg:w-[80%] mx-auto">
          Our platform connects you with verified, experienced Lawyers across
          various specialties — all at your convenience. Whether it's a routine
          checkup or urgent consultation, book appointments in minutes and
          receive quality care you can trust.
        </p>

        <form
          onSubmit={(e) => {
            handleSearch(e, searchText);
            // reset input state
            setSearchText("");
          }}
          className="flex gap-4 justify-center items-center mx-auto mt-10 w-[96%] md:w-full md:gap-6"
        >
          <label htmlFor="search" className="sr-only">
            Search Query
          </label>
          <input
            id="search"
            name="search_text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            type="text"
            placeholder="Type your search query here"
            className="bg-white text-black font-mulish  text-base md:text-xl   font-semibold p-6 md:w-[30%]  rounded-xl border-green-300 border-3   focus:outline-none focus:shadow-outline input"
            title="Your search text"
          />

          <button type="submit" className="inline-block relative text-lg group">
            <span className="block overflow-hidden relative z-10 px-4 py-3 font-medium leading-tight text-gray-800 rounded-lg border-2 border-gray-900 transition-colors duration-300 ease-out group-hover:text-white">
              <span className="absolute inset-0 px-4 py-2 w-full h-full bg-gray-50 rounded-lg"></span>
              <span className="absolute left-0 -ml-2 w-48 h-48 bg-gray-900 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 group-hover:-rotate-180 ease"></span>
              <span className="relative">
                <div className="flex gap-4">
                  <span>
                    <FaSearch className="mt-1 text-green-500" />
                  </span>
                  <span className="hidden md:block">Search</span>
                </div>
              </span>
            </span>
            <span
              className="absolute right-0 bottom-0 -mr-1 -mb-1 w-full h-12 bg-gray-900 rounded-lg transition-all duration-200 ease-linear group-hover:mb-0 group-hover:mr-0"
              data-rounded="rounded-lg"
            ></span>
          </button>
        </form>
      </div>

      <LawyersContainer lawyers={lawyers}></LawyersContainer>

      <SuccessSection></SuccessSection>
    </main>
  );
};

export default MainContent;
