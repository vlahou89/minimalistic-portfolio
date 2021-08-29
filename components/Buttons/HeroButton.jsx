import React from "react";
import Link from "next/link";

function HeroButton({ children, destination }) {
  return (
    <div>
      <Link href={destination}>
        <a className=" inline-flex justify-between m-auto  px-8 py-4 text-xs font-semibold uppercase whitespace-no-wrap transition-colors duration-100 bg-transparent border tracking-2 bg-p2 text-white border-p3 hover:bg-p1 hover:text-white focus:bg-p ">
          {children}
        </a>
      </Link>
    </div>
  );
}

export default HeroButton;
