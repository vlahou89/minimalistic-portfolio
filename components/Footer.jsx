import React from "react";
import NavLinkMobile from "./Navbar/NavLinkMobile";
import SocialMedia from "./SocialMedia";

function Footer() {
  return (
    <div>
      <footer className="w-full px-8 py-12 pt-8 md:py-6 xl:py-8 bg-p3 md:px-10 xl:px-0 ">
        <div className="flex flex-col items-center justify-between max-w-6xl py-2 mx-auto md:py-0 md:flex-row">
          <div className="flex flex-col items-center md:flex-row">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="text-white"
              width="61"
              height="32"
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M60.082 5.878L44.408 32 28.735 5.878h31.347zM15.673 0l15.674 26.122H0L15.673 0z"
              />
            </svg>
            <div className="flex flex-col items-center pb-10 mt-2 md:mt-0 md:pb-0 bg-p3 text-s1 md:flex-row">
              <div className="mt-8 md:mt-0 md:ml-12">
                <NavLinkMobile href="/">HOME</NavLinkMobile>
              </div>
              <div className="mt-8 md:mt-0 md:ml-10">
                <NavLinkMobile href="/portfolio">PORTFOLIO</NavLinkMobile>
              </div>
              <div className="mt-8 md:mt-0 md:ml-10">
                <NavLinkMobile href="/contact">CONTACT ME</NavLinkMobile>
              </div>
            </div>
          </div>
          <div className="text-white">
            <SocialMedia />
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
