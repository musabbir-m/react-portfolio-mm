import React from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hm4t7rq",
        "template_635tpnd",
        e.target,
        "O-B1fvp2gR0eAI-Dm"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
   <div id="contact" >
    <h2 className="text-center text-3xl font-bold mt-10 md:mt-24">CONTACT</h2>
    <p className="text-center mt-3 text-xl font-semibold">
      Contact me by filling the form bellow. I will get to you ASAP!
    </p>

     <div className="max-w-lg mx-auto text-center bg-slate-300 p-5 my-10">
        
      <form onSubmit={sendEmail}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            name="user_name"
            type="text"
            placeholder="your name"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            name="user_email"
            placeholder=""
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Meassage</span>
          </label>
          <input
            type="text"
            name="message"
            placeholder="Enter your message"
            className="input input-bordered h-52"
          />
        </div>
        <div className="flex  justify-center">
          <button
            type="submit"
            className=" w-48 mt-5 text-black bg-yellow-400 hover:bg-yellow-600 hover:text-white focus:outline-none focus:ring-4 focus:ring-red-300 font-medium  text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
          >
            Send
          </button>
        </div>
      </form>
    </div>
   </div>
  );
};

export default Contact;
