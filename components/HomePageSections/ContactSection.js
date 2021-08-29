import React from "react";
import Button from "../Buttons/Button";

function ContactSection() {
  return (
    <div>
      {" "}
      <div className="flex flex-col items-center md:flex-row py-24 lg:py-4 ">
        <h2 className="font-serif font-bold leading-tight px-5 text-center md:text-left  text-4xl md:text-2xl lg:text-4xl text-p3 md:px-0 ">
          <span className="md:whitespace-no-wrap">Interested in doing</span>{" "}
          <br className="hidden md:block" />
          <span className="md:whitespace-no-wrap "> a project together?</span>
        </h2>
        <div className="hidden sm:10 md:w-30 lg:w-40 xl:w-half mx-8 border-b opacity-25 md:block border-p3" />
        <div className="mt-10 md:mt-0">
          <Button destination="/contact">CONTACT ME</Button>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
