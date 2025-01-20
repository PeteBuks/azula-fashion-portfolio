"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Nav from "./Nav";

//componenrs

const Header = () => {
  {
    /* Click event */
  }
  const [isClicked, setisClicked] = useState(false);
  const handleClick = () => {
    setisClicked(!isClicked);
  };
  const pathname = usePathname();

  useEffect(() => {
    if (isClicked) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  });

  useEffect(() => {
    setisClicked(false);
  }, [pathname]);

  return (
    <header className="py-5 px-5 xl:py-5 text-black z-20 bg-[#B6B6B6]">
      <div
        className={`text-white fixed container mx-auto flex justify-center items-center bg-black opacity-0 transition-all duration-300 transform h-[0px] translate-y-[-40vh] ${
          isClicked && "opacity-100 h-[70vh] md:h-[15vh] translate-y-[0vh]"
        }`}
      >
        <Nav />
      </div>
      <div className="container mx-auto flex justify-end items-center">
        <div className="z-10 fixed p-4 pt-6 bg-black mt-[30px]">
          <button
            className="inline-block w-[40px] items-center"
            onClick={handleClick}
          >
            <div
              className={`w-[100%] h-[4px] bg-white mb-[10px] transform ease-[cubic-bezier(0.28, 0.55, 0.385, 1.65)] duration-300 ${
                isClicked && "translate-y-[7px] rotate-45 h-[4px]"
              }`}
            ></div>
            <div
              className={`w-[100%] h-[4px] bg-white transform ease-[cubic-bezier(0.28, 0.55, 0.385, 1.65)] duration-300 ${
                isClicked && "translate-y-[-7px] -rotate-45 h-[4px]"
              }`}
            ></div>
          </button>
        </div>
      </div>
      {/* dropdown */}
    </header>
  );
};

export default Header;
