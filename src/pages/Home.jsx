import Banner from "@/components/Header/Banner/Banner";
import { useState } from "react";
import { useLoaderData } from "react-router";
import { toast } from "react-toastify";
import MainContent from "../components/MainContent/MainContent";

const Home = () => {
  const data = useLoaderData();
  const [lawyers, setLawyers] = useState(data);

  const handleSearch = (e, text) => {
    e.preventDefault();

    const searchedLawyers = lawyers.filter(
      (lawyer) =>
        lawyer?.name?.toLowerCase().split(" ").includes(text?.toLowerCase()) ||
        lawyer?.speciality
          ?.toLowerCase()
          .split(" ")
          .includes(text?.toLowerCase())
    );
    searchedLawyers.length > 0
      ? toast.success("Your search is successful!")
      : toast.info(
          <span className="h-[200%]">
            No lawyers found. Please, type at least one word.
          </span>
        );
    setLawyers(searchedLawyers);
  };

  return (
    <>
      <Banner></Banner>

      <MainContent handleSearch={handleSearch} lawyers={lawyers}></MainContent>
    </>
  );
};

export default Home;
