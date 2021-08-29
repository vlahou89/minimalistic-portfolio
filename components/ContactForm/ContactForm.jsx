import React from "react";
import Submit from "../Buttons/Submit";

function ContactForm() {
  return (
    <div className="lg:flex lg:flex-row">
      {" "}
      <div className="lg:w-40">
        <h2 className="font-serif font-bold leading-none tracking-tight py-8 text-p3 text-40 xl:text-50 xl:tracking-normal">
          Contact Me
        </h2>
      </div>
      <div className="lg:w-60">
        <form action="submit">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-sm font-bold font-serif py-2">
              Name
            </label>
            <input
              type="text"
              className="bg-t2 my-2 h-10 pl-5 focus:outline-none "
              placeholder="Jane Applessed"
              required
            />
            <label htmlFor="name" className="text-sm font-bold font-serif py-2">
              Email Address
            </label>
            <input
              type="text"
              className="bg-t2 my-2 h-10 pl-5 focus:outline-none"
              placeholder="email@example.com"
              required
            />
            <label
              htmlFor="name"
              className="text-sm font-bold font-serif py-2 "
            >
              Message
            </label>
            <textarea
              type="text"
              className="bg-t2 my-2 h-32 pl-5 p-4 focus:outline-none"
              placeholder="How can I help?"
              required
            />
          </div>
          <Submit type="submit">Send Message</Submit>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
