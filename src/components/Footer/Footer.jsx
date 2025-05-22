import React from "react";
import { NavLink } from "react-router";
import navbarLogo from "../../assets/images/logo-image/logo.svg";

import { FaFacebook } from "react-icons/fa";

import { BsTwitterX } from "react-icons/bs";

import { FaLinkedin } from "react-icons/fa";

import { FaYoutube } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="mt-26 footer footer-horizontal footer-center bg-[#0F0F0F] text-[#FFFFFF] rounded p-10">
      <div className="footer-up space-x-6 font-extrabold text-4xl">
        <img src={navbarLogo} alt="" />
        <h1 className="text-4xl">Law.BD</h1>
      </div>
      <div className="footer-down hidden lg:flex ">
        <ul className="menu menu-horizontal px-1 font-medium  text-[20px] space-x-10">
          <li>
            <NavLink>Home</NavLink>
          </li>
          <li>
            <NavLink>My-Bookings</NavLink>
          </li>

          <li>
            <NavLink>Blogs</NavLink>
          </li>

          <li>
            <NavLink>Contact Us</NavLink>
          </li>
        </ul>
      </div>

      <hr className="w-[80%] border-t-2  border-dotted border-white" />
      <nav>
        <div className="flex justify-center items-center gap-10 ">
          <NavLink to={"https://www.facebook.com/"} target="_blank">
            <FaFacebook size={50} className="text-[#006AFF]  rounded-full" />

            {/* <CiFacebook /> */}
          </NavLink>
          <NavLink to={"https://x.com/"} target="_blank">
            <BsTwitterX size={40} />
          </NavLink>
          <NavLink
            to={"https://www.linkedin.com/"}
            target="_blank"
            className="rounded-lg"
          >
            <FaLinkedin size={50} className="rounded-lg text-[#0575B3]" />
          </NavLink>
          <NavLink
            to={"https://www.youtube.com/"}
            target="_blank"
            className="flex justify-center items-center w-14 h-14 bg-red-700 rounded-full"
          >
            <FaYoutube size={40} />
          </NavLink>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
