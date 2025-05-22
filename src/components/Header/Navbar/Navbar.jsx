import React from "react";
import navbarLogo from "../../../assets/images/logo-image/logo.svg";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <section className="navbar  shadow-sm px-20 text-[#0F0F0F] bg-[#FFFFFF]">
      <div className="navbar-start space-x-6 font-extrabold text-4xl">
        <img src={navbarLogo} alt="" />
        <h1 className=" text-4xl">Law.BD</h1>
      </div>
      <div className="navbar-center  hidden lg:flex ">
        <ul className="menu menu-horizontal px-1 font-medium  text-[20px] space-x-10">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink>My-Bookings</NavLink>
          </li>

          <li>
            <NavLink to="/blogs">Blogs</NavLink>
          </li>

          <li>
            <NavLink>Contact Us</NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end ">
        <NavLink className="btn bg-[#0EA106] p-8 rounded-3xl font-bold text-[20px]">
          Contact Now
        </NavLink>
      </div>
    </section>
  );
};

export default Navbar;
