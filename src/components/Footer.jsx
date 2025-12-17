import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="py-4 mt-5">
        <div className="max-w-screen-xl mx-auto px-4 md:px-20">
          <div className="flex flex-col items-center justify-center">
            <div className="flex space-x-4 ">
              <a href="https://github.com/Suman-20">
                <FaGithub
                  className="cursor-pointer hover:scale-110 duration-200"
                  size={33}
                />
              </a>
              <a href="https://www.linkedin.com/in/suman-raul-900a99290/">
                <FaLinkedin
                  className="cursor-pointer hover:scale-110 duration-200"
                  size={33}
                />
              </a>
              <a href="https://x.com/suman_raul75812">
                <FaSquareXTwitter
                  className="cursor-pointer hover:scale-110 duration-200"
                  size={33}
                />
              </a>
              <a href="https://www.facebook.com/raul.s.5494">
                <FaFacebook
                  className="cursor-pointer hover:scale-110 duration-200"
                  size={33}
                />
              </a>
            </div>
            <div className="mt-8 border-t border-gray-700 border-dashed pt-8 flex flex-col items-center">
              <p className="text-sm text-gray-400 mb-2 md:mb-0">
                {" "}
                © {new Date().getFullYear()} Suman . All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
