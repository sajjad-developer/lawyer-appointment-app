import React, { useState } from "react";
import navbarLogo from "../../../assets/images/logo-image/logo.svg";
import { NavLink, Link } from "react-router";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [hamburgerMenu, setHamburgerMenu] = useState(false);
  return (
    <section
      className={`${
        hamburgerMenu ? "mb-40" : ""
      } navbar   shadow-sm md:px-10 lg:px-20 text-[#0F0F0F] bg-[#FFFFFF]`}
    >
      <div className="space-x-2 text-4xl font-extrabold lg:space-x-6 navbar-start">
        <img src={navbarLogo} alt="" />
        <Link to="/" className="text-3xl lg:text-4xl">
          Law.BD
        </Link>
      </div>
      <div className="hidden navbar-center lg:flex">
        <ul className="menu menu-horizontal px-1 font-medium  text-[20px] space-x-10">
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "text-indigo-700" : "")}
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/my-bookings"
              className={({ isActive }) => (isActive ? "text-indigo-700" : "")}
            >
              My-Bookings
            </NavLink>
          </li>

          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "text-indigo-700" : "")}
              to="/blogs"
            >
              Blogs
            </NavLink>
          </li>

          <li>
            <NavLink
              to="contact-us"
              className={({ isActive }) =>
                `btn-block ${isActive ? "text-indigo-700" : ""}`
              }
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <NavLink className=" hidden md:flex btn bg-[#0EA106]  p-4 lg:p-8 rounded-3xl font-bold  text-[20px]">
          Contact Now
        </NavLink>
        <div className="relative">
          <GiHamburgerMenu
            onClick={() => setHamburgerMenu((prev) => !prev)}
            className="text-4xl cursor-pointer md:hidden"
          />
          <ul
            className={`absolute z-50 top-16 right-10 p-0  font-medium md:hidden ${
              hamburgerMenu
                ? "text-xl bg-transparent menu menu-vertical"
                : "hidden"
            }`}
          >
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-indigo-700 p-0 m-0" : "p-0 m-0"
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  `whitespace-nowrap p-0 m-0 ${
                    isActive ? "text-indigo-700 " : ""
                  }`
                }
                to="/my-bookings"
              >
                My-Bookings
              </NavLink>
            </li>

            <li>
              <NavLink
                className={({ isActive }) =>
                  `p-0 m-0 ${isActive ? "text-indigo-700 " : ""}`
                }
                to="/blogs"
              >
                Blogs
              </NavLink>
            </li>

            <li>
              <NavLink
                className={({ isActive }) =>
                  `whitespace-nowrap p-0 m-0 btn-block ${
                    isActive ? "text-indigo-700  " : ""
                  }`
                }
                to="/contact-us"
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
