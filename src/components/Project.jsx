import React from 'react';
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title:"Bt-fy",
    description:"Bot-fy – A full-stack AI chatbot application built using React, Node.js, Express, MongoDB, and Axios, featuring real-time messaging, smooth UI, and seamless frontend-backend communication.",
     githubLink:"https://github.com/Suman-20/Bot-fy",
     image:"/chat1.png"
  },
  {
    title: "NeoClock",
    description: "A modern digital clock built with javascript and CSS. Features real-time updates, responsive design & smooth animations",
    githubLink: "https://github.com/Suman-20/Neo-Clock",
    image: "/neoclock.png",
  },
  {
    title: "HabitTrackPro",
    description: "HabitTrackPro is a web app to track your daily habits, set goals, and monitor achievements.",
    githubLink: "https://github.com/Suman-20/HabitTrackPro",
    image: "/habit1.png",
  },
  {
    title: "User Enquiry",
    description: "This project is a simple and clean User Enquiry Management System built using modern web technologies. It allows users to enter their details.",
    githubLink: "https://github.com/Suman-20/User-enquiry-",
    image: "/user1.png",
  },
  {
    title: "Paste-Application",
    description: "A simple and efficient paste management app built with React. Allows users to create, update, delete, and store text snippets using local storage with real-time UI updates.",
    githubLink: "https://github.com/Suman-20/Paste-Application--2.0",
    image: "/paste.png",
  },
  {
    title: "Menncare",
    description: "A modern, responsive mental wellness website built with React and Tailwind CSS.",
    githubLink: "https://github.com/Suman-20/Menncare-Mental-Wellness-website-",
    image: "/menncare.png",
  },
];

const ProjectCard = ({ title, description, githubLink, image }) => {
  return (
    <div name ="Project" className="shadow-md shadow-gray-500 rounded-lg p-4 transfrom transition duration-300 hover:scale-110  max-w-sm">
      <img src={image} alt={title} className="w-full h-40 object-cover rounded-md mb-4" />
      <h2 className="text-2xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className='flex justify-center'>
      <a 
        href={githubLink} 
        target="_blank" 
        className="inline-block bg-black text-white px-16 py-2 text-center rounded-full hover:scale-105  transition">
        <FaGithub className='text-2xl'/>
      </a>
      </div>
    </div>
  );
};

const Project = () => {
  return (
    <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10">
      <h1 className="text-4xl font-bold mb-10 text-center">My Projects 🚀</h1>
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Project;
