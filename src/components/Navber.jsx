import React, { useState } from "react";
import { TiThMenu } from "react-icons/ti";
import { GiCrossMark } from "react-icons/gi";
import { Link } from "react-scroll";

const Navber = () => {
  const [menu, setMenu] = useState(false);

  const navItems = [
    {
      id: 1,
      text: "Home",
    },
    {
      id: 2,
      text: "About",
    },
    {
      id: 3,
      text: "Project",
    },
    {
      id: 4,
      text: "Skill",
    },
    {
      id: 5,
      text: "Contact",
    },
  ];

  return (
    <div className="w-full shadow-md bg-white fixed top-0 left-0 right-0">
      <div className="max-w-screen-2xl mx-auto px-4 py-4 flex items-center justify-between shadow-md bg-white">
        <div className="flex items-center space-x-4">
          <img
            className="h-16 w-16 rounded-full border-2 border-blue-500"
            src="/suman.png.jpg"
            alt="Suman"
          />
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Suman</h1>
            <p className="text-xl font-semibold text-gray-500">Web Developer</p>
          </div>
        </div>

        <div>
          <ul className="hidden md:flex space-x-8 text-2xl text-gray-700 font-bold">
            {navItems.map(({ id, text }) => (
              <li
                className="hover:scale-105 duration-200 cursor-pointer"
                key={id}
              >
                <Link
                  to={text}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  activeClass="active"
                >
                  {text}
                </Link>
              </li>
            ))}
          </ul>

          <div onClick={() => setMenu(!menu)} className="md:hidden">
            {menu ? <GiCrossMark size={30} /> : <TiThMenu size={30} />}
          </div>
        </div>
      </div>

      {menu && (
        <div >
          <ul className=" md:hidden flex flex-col items-center justify-center h-screen space-y-4 text-xl text-gray-800 font-bold px-10 py-3">
            {navItems.map(({ id, text }) => (
              <li
                className="hover:scale-105 duration-200 cursor-pointer"
                key={id}
              >
                  <Link
                  onClick={()=>setMenu(!menu)}
                  to={text}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  activeClass="active"
                >
                  {text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navber;
