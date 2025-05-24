import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Header/Navbar/Navbar";
import React from "react";
import { Outlet, useRouteError } from "react-router";
import { ToastContainer } from "react-toastify";

const MainLayout = () => {
  const error = useRouteError();
  if (error) {
    return <Outlet></Outlet>;
  }
  return (
    <>
      <ToastContainer></ToastContainer>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
};

export default MainLayout;
