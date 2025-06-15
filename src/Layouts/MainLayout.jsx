import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Header/Navbar/Navbar";
import { Outlet, useRouteError } from "react-router";
import { ToastContainer } from "react-toastify";

const MainLayout = () => {
  const error = useRouteError();
  if (error) {
    return <Outlet></Outlet>;
  }
  return (
    <>
      <ToastContainer className="text-xl font-bold font-inter"></ToastContainer>
      <Navbar></Navbar>
      <div className=" min-h-[calc(100vh - (4 rem + 420px))]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </>
  );
};

export default MainLayout;
