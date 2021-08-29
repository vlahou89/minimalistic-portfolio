import React from "react";
import HeroButton from "../Buttons/HeroButton";

function HeroSection() {
  return (
    <div className="relative">
      <div className="mb-24 sm:relative">
        <picture>
          <source
            media="(min-width: 1440px)"
            srcSet="../images/homepage/desktop/image-homepage-hero@2x.jpg"
          />
          <source
            media="(min-width: 1024px)"
            srcSet="images/homepage/desktop/image-homepage-hero.jpg"
          />
          <source
            media="(min-width: 426px)"
            srcSet="images/homepage/tablet/image-homepage-hero.jpg"
          />
          <img
            src="images/homepage/mobile/image-homepage-hero@2x.jpg"
            alt="stock image of a desktop computer screen"
            className="object-cover w-full"
          />
        </picture>
        <div className="bottom-0 left-0 bg-white sm:absolute md:w-70 xl:w-40">
          <div className="pt-6 pb-8 sm:pt-11 sm:pb-12 sm:pr-11 xl:pb-11 ">
            <h1 className="font-serif font-bold leading-10 tracking-tighter align-top text-p3 text-40 xl:text-50 xl:tracking-normal md:max-w-80 ">
              Hey, I’m Alex Spencer and I love building beautiful websites
            </h1>
          </div>
          <div className="flex justify-between">
            <HeroButton destination="#about_me">
              <div className="pr-9">
                <svg
                  className="animate-bounce"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="14"
                >
                  <g fill="none" fill-rule="evenodd" stroke="#5FB4A2">
                    <path d="M0 9l8 4 8-4" />
                    <path opacity=".5" d="M0 5l8 4 8-4" />
                    <path opacity=".25" d="M0 1l8 4 8-4" />
                  </g>
                </svg>
              </div>
              About me
            </HeroButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
