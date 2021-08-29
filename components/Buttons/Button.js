import React from "react";
import Link from "next/link";

function Button({ children, destination }) {
  return (
    <div>
      <Link href={destination}>
        <a className=" inline-flex justify-between m-auto  px-8 py-4 text-xs font-semibold uppercase whitespace-no-wrap transition-colors duration-100 bg-transparent border tracking-2 text-p3 border-p3 hover:bg-p2 hover:text-white focus:bg-p2 focus:text-white focus:border-p1  ">
          {children}
        </a>
      </Link>
    </div>
  );
}

export default Button;
