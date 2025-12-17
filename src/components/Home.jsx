

import React from "react";

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";

// import { SiMongodb } from "react-icons/si";
// import { SiExpress } from "react-icons/si";
// import { FaReact } from "react-icons/fa";
// import { FaNode } from "react-icons/fa6";

import { ReactTyped } from "react-typed";

const Home = () => {
  return (
    <>
      <div name ="Home" className="max-w-screen-2xl container mx-auto px-4 md:px-20 pt-32 pb-10">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-1/2 space-y-4">
            <span className="text-xl md:text-2xl">👋 Welcome to My Portfolio!</span>
            <div className="flex flex-wrap gap-2 text-2xl md:text-4xl">
              <h1>Hello, I'm a</h1>
              {/* <span className="text-red-700 font-bold">Suman</span> */}
              <ReactTyped
                className="text-red-700 font-bold "
                strings={["MERN Stack Developer","Programmer","Coder"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>
            <br />
            <br />
            <p className=" md:text-xl text-justify text-gray-400">
              I'm Suman — a passionate Frontend Developer creating modern,
              responsive web apps using React and Tailwind CSS.
            </p>
          
            {/* Sosal media icon */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-6">
              <div className="">
                <h1 className="text-lg md:text-xl font-semibold mb-2">
                  Available on..
                </h1>
                <ul className="flex gap-5 text-2xl ">
                  <li>
                    <a href="https://github.com/Suman-20">
                    <FaGithub className="text-2xl  md:text-3xl cursor-pointer" />
                  </a>
                  </li>

                  <li>
                    <a href="https://www.linkedin.com/in/suman-raul-900a99290/">
                    <FaLinkedin className="text-2xl  md:text-3xl cursor-pointer" />
                    </a>
                  </li>

                  <li>
                    <a href="https://x.com/suman_raul75812">

                    <FaSquareXTwitter className="text-2xl  md:text-3xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.facebook.com/raul.s.5494">
                    <FaFacebook className="text-2xl  md:text-3xl cursor-pointer" />
                    </a>
                  </li>
                </ul>
              </div>

              {/* <div className="">
                <h1 className="text-lg md:text-xl font-semibold mb-2">
                  Currently Working on..
                </h1>
                <div className="flex gap-5  ">
                  <SiMongodb className="text-2xl  md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
                  <SiExpress className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
                  <FaReact className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
                  <FaNode className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
                </div>
              </div> */}

            </div>
          </div>

         <div className="w-full md:w-1/2 flex justify-center">
  <img
    className="h-[220px] w-[220px] md:h-[350px] md:w-[350px] rounded-full border-2 border-gray-500 object-cover 
               shadow-lg shadow-gray-500/50"
    src="/suman.png.jpg"
    alt="Suman"
  />
</div>

        </div>
      </div>

      <div className="mt-10 flex justify-center">
        <div className="w-11/12 md:w-2/3 border-t-2 border-dashed border-gray-600"></div>
      </div>
    </>
  );
 };

 export default Home;




