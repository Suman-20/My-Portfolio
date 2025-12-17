
import React, { useState } from "react";
import { TiThMenu } from "react-icons/ti";
import { GiCrossMark } from "react-icons/gi";
import { Link } from "react-scroll";

const Navber = () => {
  const [menu, setMenu] = useState(false);

  const navItems = [
    { id: 1, text: "Home" },
    { id: 2, text: "About" },
    { id: 3, text: "Project" },
    { id: 4, text: "Skill" },
    { id: 5, text: "Contact" },
  ];

  return (
    <div className="w-full shadow-md bg-[#020617] sticky z-50 h-20 top-0 left-0 right-0">
      <div className="max-w-screen-2xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center space-x-4">
          <img
            className="h-16 w-16 rounded-full border-2 border-blue-500"
            src="/suman.png.jpg"
            alt="Suman"
          />
          <div>
            <h1 className="text-3xl font-bold text-gray-600">Suman</h1>
            <p className="text-xl font-semibold text-gray-500">Web Developer</p>
          </div>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-2xl text-gray-500 font-md">
          {navItems.map(({ id, text }) => (
            <li key={id} className="relative group cursor-pointer">
              <Link
                to={text}
                smooth={true}
                duration={500}
                offset={-70}
                className="relative"
              >
                {text}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-red-700 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Icon */}
        <div onClick={() => setMenu(!menu)} className="md:hidden text-gray-500 cursor-pointer">
          {menu ? <GiCrossMark size={30} /> : <TiThMenu size={30} />}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-[#020617] transition-all duration-300 overflow-hidden ${
          menu ? "max-h-screen py-4" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col px-6 space-y-4 text-xl text-gray-200 font-bold ">
          {navItems.map(({ id, text }) => (
            <li key={id} className="hover:text-red-500 transition-colors duration-500 ">
              <Link
                to={text}
                smooth={true}
                duration={500}
                offset={-80}
                onClick={() => setMenu(false)}
              >
                {text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navber;
