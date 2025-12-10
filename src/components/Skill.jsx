import React from 'react'
import { FaHtml5,FaCss3Alt,FaPython,FaNode,FaGitAlt, FaBootstrap   } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss, SiRedux,SiNetlify,SiFirebase } from "react-icons/si";
import { FaC } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { BiLogoCPlusPlus } from "react-icons/bi";
import { RiVercelLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";



const Skills = [
    {
        name:"C",
        icon:<FaC className='text-blue-400' />,
    }, 
   
    {
        name:"C++",
        icon:< BiLogoCPlusPlus className='text-blue-400' />,
    }, 
    {
     name:"PYTHON",
     icon:<FaPython className='text-yellow-400'/>
    },

    {
        name:"HTML",
        icon:<FaHtml5 className='text-orange-600' />,
    },
    {
        name:"CSS",
        icon:<FaCss3Alt className='text-blue-500' />,
    },
    {
        name:"JavaScript",
        icon:<FaJsSquare className='text-yellow-300' />,
    },
    {
        name:"React",
        icon:<FaReact className='text-cyan-400' />,
    },

    {
        name:"Redux",
        icon:< SiRedux className='text-purple-400' />,
    },
    {
        name:"NODE js",
        icon:<FaNode  className='text-green-400' />,
    },
    {
        name:"MongoDB",
        icon:<SiMongodb className='text-green-600' />,
    },
    {
        name:"Express js",
        icon:<SiExpress className='text-gray-600 ' />,
    },
    {
        name:"Tailwind",
        icon:<SiTailwindcss className='text-blue-400' />,
    },
    {
        name:"Bootstrap",
        icon:< FaBootstrap className='text-purple-500' />,
    },

    {
        name:"GitHub",
        icon:<FaGithub className='text-black ' />,
    },
    {
        name:"Git",
        icon:<FaGitAlt className='text-orange-500 ' />,
    },
    {
        name:"Vercel",
        icon:<RiVercelLine className='text-black ' />,
    },
    {
        name:"Netlify",
        icon:<SiNetlify className='text-cyan-500 ' />,
    },
    {
        name:"Firebase",
        icon:<SiFirebase className='text-orange-600 ' />,
    },
    

]

const Skill = () => {
  return (
    <div name ="Skill" className='max-w-screen-xl mx-auto px-4 py-16'>
          <h2 className='text-4xl font-bold text-center mb-10'>My Skills 💻</h2> 
          <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 place-items-center'>
            {
                Skills.map((skill,index)=>(
                    <div key={index} className='flex flex-col items-center bg-white shadow-md shadow-gray-300 p-6 rounded-xl w-32 h-32 transfrom transition hover:scale-110'>
                       <div className='text-5xl mb-4'>{skill.icon}</div>
                       <p className="text-md font-bold text-gray-700 text-center">{skill.name}</p>
                    </div>
                ))
            }
          </div>
    </div>
  )
}

export default Skill