import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      message: data.message,
    };
    try {
      await axios.post("https://getform.io/f/azywemdb", userInfo);
      toast.success("your message has been sent");
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <>
      <div
        name="Contact"
        className="max-w-screen-xl mx-auto px-4 md:px-20 mt-10"
      >
        <h1 className="text-4xl font-bold text-center mb-10">Contact Me 📬</h1>

        <div className="flex flex-col items-center justify-center mt-5">
          <form
            onSubmit={handleSubmit(onSubmit)}
            //  action="https://getform.io/f/azywemdb"
            // method="POST"
            className="bg-slate-200 w-90 md:w-96 px-8 py-6 rounded-xl mx-auto "
          >
            <h1 className="text-xl font-semibold mb-4"> Send your message</h1>
            <div className="space-y-4 flex flex-col mb-4">
              <label className="text-xl font-semibold black text-gray-700">
                FullName
              </label>
              <input
                {...register("name", { required: true })}
                type="text"
                id="input"
                name="name"
                placeholder="Enter Your Name"
                className="w-full rounded-2xl border bg-white border-gray-200  px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-200"
                required
              />
              {errors.name && <span>This field is required</span>}
              <label className="text-xl font-semibold black text-gray-700">
                Email Address
              </label>
              <input
                {...register("email", { required: true })}
                type="text"
                id="lable"
                name="email"
                placeholder="Enter Your Email"
                className="w-full border bg-white border-gray-200 rounded-2xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-200"
                required
              />
              {errors.email && <span>This field is required</span>}
              <label className="text-xl font-semibold black text-gray-700">
                Message
              </label>
              <textarea
                {...register("message", { required: true })}
                rows="4"
                id="textarea"
                name="message"
                placeholder="Your Message"
                className="w-full bg-white border border-gray-300 rounded-2xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              {errors.message && <span>This field is required</span>}

              <button
                type="submit"
                className="bg-cyan-500 text-white px- py-2 rounded-md hover:bg-cyan-700 transition cursor-pointer"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
