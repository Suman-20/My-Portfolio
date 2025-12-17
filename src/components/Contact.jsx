
// import React from "react";
// import { useForm } from "react-hook-form";
// import axios from "axios";
// import toast from "react-hot-toast";

// const Contact = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = async (data) => {
//     const userInfo = {
//       name: data.name,
//       email: data.email,
//       message: data.message,
//     };
//     try {
//       await axios.post("https://getform.io/f/azywemdb", userInfo);
//       toast.success("Your message has been sent 🚀");
//     } catch (error) {
//       console.log(error)
//       toast.error("Something went wrong!");
//     }
//   };

//   return (
//     <div
//       name="Contact"
//       className="min-h-screen bg-[#0a192f] flex items-center justify-center px-4"
//     >
//       <div className="w-full max-w-lg bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-2xl p-8">
        
//         <h1 className="text-3xl font-bold text-center text-white mb-2">
//           Contact Me 📬
//         </h1>
//         <p className="text-center text-gray-300 mb-6">
//           Let’s build something together
//         </p>

//         <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

//           {/* Name */}
//           <div>
//             <label className="text-sm text-gray-300 font-medium">
//               Full Name
//             </label>
//             <input
//               {...register("name", { required: true })}
//               type="text"
//               placeholder="Enter you name"
//               className="w-full mt-1 bg-white/90 text-black rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400"
//             />
//             {errors.name && (
//               <span className="text-red-400 text-sm">
//                 Name is required
//               </span>
//             )}
//           </div>

//           {/* Email */}
//           <div>
//             <label className="text-sm text-gray-300 font-medium">
//               Email Address
//             </label>
//             <input
//               {...register("email", { required: true })}
//               type="email"
//               placeholder="example@email.com"
//               className="w-full mt-1 bg-white/90 text-black rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400"
//             />
//             {errors.email && (
//               <span className="text-red-400 text-sm">
//                 Email is required
//               </span>
//             )}
//           </div>

//           {/* Message */}
//           <div>
//             <label className="text-sm text-gray-300 font-medium">
//               Message
//             </label>
//             <textarea
//               {...register("message", { required: true })}
//               rows="4"
//               placeholder="Your message..."
//               className="w-full mt-1 bg-white/90 text-black rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400"
//             />
//             {errors.message && (
//               <span className="text-red-400 text-sm">
//                 Message is required
//               </span>
//             )}
//           </div>

//           {/* Button */}
//           <button
//             type="submit"
//             className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold py-2 rounded-xl shadow-lg hover:scale-[1.02] hover:shadow-cyan-500/40 transition duration-300"
//           >
//             Send Message 🚀
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Contact;



import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // old data fetch
    const oldData =
      JSON.parse(localStorage.getItem("contactMessages")) || [];

    // new data add
    const updatedData = [...oldData, data];

    // save to localStorage
    localStorage.setItem(
      "contactMessages",
      JSON.stringify(updatedData)
    );

    toast.success("Message saved locally ✅");

    // clear inputs
    reset();
  };

  return (
    <div
      name="Contact"
      className="min-h-screen bg-[#0a192f] flex items-center justify-center px-4 "
    >
      <div className="w-full max-w-lg bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-md shadow-gray-500 p-8">
        <h1 className="text-3xl font-bold text-center text-white mb-2">
          Contact Me 📬
        </h1>
        <p className="text-center text-gray-300 mb-6">
          Let’s build something together
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

          {/* Name */}
          <div>
            <label className="text-sm text-gray-300 font-medium">
              Full Name
            </label>
            <input
              {...register("name", { required: true })}
              type="text"
              placeholder="Enter your name"
              className="w-full mt-1 bg-white/90 text-black rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
            {errors.name && (
              <span className="text-red-400 text-sm">
                Name is required
              </span>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="text-sm text-gray-300 font-medium">
              Email Address
            </label>
            <input
              {...register("email", { required: true })}
              type="email"
              placeholder="example@email.com"
              className="w-full mt-1 bg-white/90 text-black rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
            {errors.email && (
              <span className="text-red-400 text-sm">
                Email is required
              </span>
            )}
          </div>

          {/* Message */}
          <div>
            <label className="text-sm text-gray-300 font-medium">
              Message
            </label>
            <textarea
              {...register("message", { required: true })}
              rows="4"
              placeholder="Your message..."
              className="w-full mt-1 bg-white/90 text-black rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
            {errors.message && (
              <span className="text-red-400 text-sm">
                Message is required
              </span>
            )}
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold py-2 rounded-xl shadow-lg hover:scale-[1.02] hover:shadow-cyan-500/40 transition duration-300"
          >
            Save Message 🚀
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

