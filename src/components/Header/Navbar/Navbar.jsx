import React from "react";
import navbarLogo from "../../../assets/images/logo-image/logo.svg";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  return (
    <section className="navbar  shadow-sm px-20 text-[#0F0F0F] bg-[#FFFFFF]">
      <div className="navbar-start space-x-6 font-extrabold text-4xl">
        <img src={navbarLogo} alt="" />
        <Link to="/" className=" text-4xl">
          Law.BD
        </Link>
      </div>
      <div className="navbar-center  hidden lg:flex ">
        <ul className="menu menu-horizontal px-1 font-medium  text-[20px] space-x-10">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="">My-Bookings</Link>
          </li>

          <li>
            <Link to="/blogs">Blogs</Link>
          </li>

          <li>
            <Link className=" btn-block">Contact Us</Link>
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
