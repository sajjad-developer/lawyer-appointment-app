import React from "react";
import MainContent from "../components/MainContent/MainContent";
import { useLoaderData } from "react-router";
import Banner from "@/components/Header/Banner/Banner";

const Home = () => {
  const data = useLoaderData();
  return (
    <>
      <Banner></Banner>
      <MainContent lawyers={data}></MainContent>
    </>
  );
};

export default Home;
