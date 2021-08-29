import CloseButton from "../Buttons/CloseButton.jsx";
import NavLink from "./NavLink.jsx";
import NavLinkMobile from "./NavLinkMobile.jsx";
import NavTransition from "./NavTransition.js";
import { useState } from "react";

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }
  return (
    <div className="my-6">
      <div className="relative">
        <nav className="flex items-center justify-end sm:h-10">
          <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
            <div className="flex items-center justify-between w-full md:w-auto">
              <a href="/" aria-label="Home">
                <img className="h-8" src="../images/logo.svg" alt="Logo"></img>
              </a>
              <div className="-mr-2 flex items-center md:hidden">
                <button
                  type="button"
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 
                focus:outline-none
                transition duration-150 ease-in-out"
                  id="main-menu"
                  aria-label="Main menu"
                  aria-haspopup="true"
                  onClick={toggleMenu}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="18"
                    fill="currentColor"
                    viewBox="0 -2 24 16"
                    strokeWidth="0"
                  >
                    <g fillRule="evenodd">
                      <path d="M0 0h24v1H0zM0 6h24v1H0zM0 12h24v1H0z" />
                    </g>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          {/* will space-x-10 work on ios? */}
          <div className="hidden md:flex md:space-x-10">
            <NavLink slug="/">HOME</NavLink>
            <NavLink slug="/portfolio">PORTFOLIO</NavLink>
            <NavLink slug="/contact">CONTACT ME</NavLink>
          </div>
        </nav>
        {/* mobile menu */}
        <NavTransition>
          <div className="absolute top-0 right-0   transition transform origin-top-right md:hidden w-64 z-10">
            <div
              className="bg-transparent overflow-hidden z-10"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="main-menu"
            >
              <div className="flex items-center justify-end">
                <div className="-mr-3">
                  <CloseButton ariaLabel="Close Menu" handler={toggleMenu}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="18"
                      viewBox="-1 0 24 18"
                      fill="currentColor"
                      className="text-p3"
                    >
                      <path
                        fillRule="evenodd"
                        d="M17.132.661l.707.707L9.707 9.5l8.132 8.132-.707.707L9 10.207.868 18.34l-.707-.707L8.293 9.5.161 1.368.868.661 9 8.793 17.132.661z"
                      />
                    </svg>
                  </CloseButton>
                </div>
              </div>
              <div
                className="mt-6 pt-2 pb-10 bg-p3 text-s1 shadow-md flex flex-col items-center"
                role="menu"
              >
                <div className="mt-8" role="menuitem">
                  <NavLinkMobile href="/">HOME</NavLinkMobile>
                </div>
                <div className="mt-8">
                  <NavLinkMobile href="/portfolio" role="menuitem">
                    PORTFOLIO
                  </NavLinkMobile>
                </div>
                <div className="mt-8" role="menuitem">
                  <NavLinkMobile href="/contact">CONTACT ME</NavLinkMobile>
                </div>
              </div>
            </div>
          </div>
        </NavTransition>
      </div>
      <NavTransition
        show={menuOpen}
        enter="duration-150 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <div className="absolute top-0 right-0 transition transform origin-top-right md:hidden w-64 z-10">
          <div
            className="bg-transparent overflow-hidden z-10"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="main-menu"
          >
            <div className="flex items-center justify-end">
              <div className="-mr-3">
                <CloseButton ariaLabel="Close Menu" handler={toggleMenu}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="18"
                    viewBox="-1 0 24 18"
                    fill="currentColor"
                    className="text-p3"
                  >
                    <path
                      fillRule="evenodd"
                      d="M17.132.661l.707.707L9.707 9.5l8.132 8.132-.707.707L9 10.207.868 18.34l-.707-.707L8.293 9.5.161 1.368.868.661 9 8.793 17.132.661z"
                    />
                  </svg>
                </CloseButton>
              </div>
            </div>
            <div
              className="mt-6 pt-2 pb-10 bg-p3 text-s1 shadow-md flex flex-col items-center"
              role="menu"
            >
              <div className="mt-8" role="menuitem">
                <NavLinkMobile href="/">HOME</NavLinkMobile>
              </div>
              <div className="mt-8">
                <NavLinkMobile href="/portfolio" role="menuitem">
                  PORTFOLIO
                </NavLinkMobile>
              </div>
              <div className="mt-8" role="menuitem">
                <NavLinkMobile href="/contact">CONTACT ME</NavLinkMobile>
              </div>
            </div>
          </div>
        </div>
      </NavTransition>
    </div>
  );
}

export default Nav;
