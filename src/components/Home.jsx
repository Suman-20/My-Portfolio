// import React from "react";

// import { FaGithub } from "react-icons/fa";
// import { FaLinkedin } from "react-icons/fa";
// import { FaSquareXTwitter } from "react-icons/fa6";
// import { FaFacebook } from "react-icons/fa";

// import { SiMongodb } from "react-icons/si";
// import { SiExpress } from "react-icons/si";
// import { FaReact } from "react-icons/fa";
// import { FaNode } from "react-icons/fa6";

// import { ReactTyped } from "react-typed";

// const Home = () => {
//   return (
//     <>
//       <div name ="Home" className="max-w-screen-2xl container mx-auto px-4 md:px-20 pt-32 pb-10">
//         <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
//           <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
//             <span className="text-xl md:text-2xl">👋 Welcome to My Portfolio!</span>
//             <div className="flex flex-wrap space-x-1 text-2xl md:text-4xl">
//               <h1>Hello, I'm a</h1>
//               {/* <span className="text-red-700 font-bold">Suman</span> */}
//               <ReactTyped
//                 className="text-red-700 font-bold"
//                 strings={["Developer"]}
//                 typeSpeed={40}
//                 backSpeed={50}
//                 loop={true}
//               />
//             </div>
//             <br />
//             <p className=" text-shadow-md md:text-xl text-justify">
//               I'm Suman — a passionate Frontend Developer creating modern,
//               responsive web apps using React and Tailwind CSS.
//             </p>
//             <br />
//             {/* Sosal media icon */}
//             <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0">
//               <div className="space-y-3">
//                 <h1 className="text-xl md:text-2xl font-semibold">
//                   Available on..
//                 </h1>
//                 <ul className="flex space-x-5 ">
//                   <li>
//                     <a href="https://github.com/Suman-20">
//                     <FaGithub className="text-2xl  md:text-3xl cursor-pointer" />
//                   </a>
//                   </li>

//                   <li>
//                     <a href="https://www.linkedin.com/in/suman-raul-900a99290/">
//                     <FaLinkedin className="text-2xl  md:text-3xl cursor-pointer" />
//                     </a>
//                   </li>

//                   <li>
//                     <a href="https://x.com/suman_raul75812">

//                     <FaSquareXTwitter className="text-2xl  md:text-3xl cursor-pointer" />
//                     </a>
//                   </li>
//                   <li>
//                     <a href="https://www.facebook.com/raul.s.5494">
//                     <FaFacebook className="text-2xl  md:text-3xl cursor-pointer" />
//                     </a>
//                   </li>
//                 </ul>
//               </div>

//               <div className="space-y-3">
//                 <h1 className="text-xl md:text-2xl font-semibold">
//                   Currently Working on..
//                 </h1>
//                 <div className="flex space-x-5 text-center ml-10  ">
//                   <SiMongodb className="text-2xl  md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
//                   <SiExpress className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
//                   <FaReact className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
//                   <FaNode className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="md:w-1/2 ml-6 md:ml-48 mt-8 md:mt-20 order-1">
//             <img
//               className="h-[300px] w-[300px] md:h-[350px] md:w-[350px] rounded-full border-2 border-blue-500  "
//               src="/Suman.jpg"
//               alt="Suman"
//             />
//           </div>
//         </div>
//       </div>

//       <div className="mt-16 flex justify-center">
//         <div className="w-2/3 border-t-2 border-dashed border-gray-600"></div>
//       </div>
//     </>
//   );
//  };

//  export default Home;

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
                strings={["MERN-Stack-Developer","Programmer","Coder"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>
            <br />
            <br />
            <p className=" md:text-xl text-justify text-gray-700">
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
              className="h-[220px] w-[220px] md:h-[350px] md:w-[350px] rounded-full border-2 border-blue-500 object-cover  "
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




