import React from "react";
import Button from "../Buttons/Button";

function AboutSection() {
  return (
    <div>
      <div className="h-auto">
        <div className="justify-between sm:flex md:justify-start lg:w-80  ">
          <div className="md:w-90">
            <picture>
              <source
                media="(min-width: 1440px)"
                srcSet="images/homepage/desktop/image-homepage-profile@2x.jpg"
              />
              <source
                media="(min-width: 1024px)"
                srcSet="images/homepage/desktop/image-homepage-profile.jpg"
              />
              <source
                media="(min-width: 640px)"
                srcSet="images/homepage/tablet/image-homepage-profile.jpg"
              />
              <img
                src="images/homepage/mobile/image-homepage-profile.jpg"
                className="object-cover object-right w-full h-full md:flex-shrink-0"
                alt="Alex Spencer in profile"
              ></img>
            </picture>
          </div>

          <div className="flex flex-col justify-between  md:w-2/4 lg:w-3/6 sm:ml-8 md:ml-16 lg:ml-24 xl:ml-32">
            <div className="my-8 border-b opacity-25 sm:mt-0 border-p3" />
            <div>
              <h2
                id="about_me"
                className="font-serif font-bold leading-none tracking-tight text-40 text-p3"
              >
                About Me
              </h2>

              <p className="leading-7 pt-7 text-p3 ">
                I’m a junior front-end developer looking for a new role in an
                exciting company. I focus on writing accessible HTML, using
                modern CSS practices and writing clean JavaScript. When writing
                JavaScript code, I mostly use React, but I can adapt to whatever
                tools are required. I’m based in London, UK, but I’m happy
                working remotely and have experience in remote teams. When I’m
                not coding, you’ll find me outdoors. I love being out in nature
                whether that’s going for a walk, run or cycling. I’d love you to
                check out my work.
              </p>
            </div>

            <div className="mt-10">
              <Button destination="/portfolio" className="p-4 borfer">
                go to portfolio
              </Button>
            </div>
            <div className="mt-8 border-b opacity-25 border-p3" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
