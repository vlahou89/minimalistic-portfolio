import React from "react";

function Submit({ children }) {
  return (
    <div>
      <button className="inline-block px-8 py-4 text-xs font-semibold leading-none my-5 text-white uppercase whitespace-no-wrap transition-colors duration-100 bg-p2 transparentborder tracking-2 focus:shadow-outline focus:bg-p1  ">
        {children}
      </button>
    </div>
  );
}

export default Submit;
