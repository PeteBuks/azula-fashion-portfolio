"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

{
  /* Links */
}

const links = [
  {
    name: "home",
    link: "/",
  },
  {
    name: "videos",
    link: "#videos",
  },
  {
    name: "colabs",
    link: "#colabs",
  },
  {
    name: "portfolio",
    link: "#portfolio",
  },
  {
    name: "about",
    link: "#about",
  },
  {
    name: "instagram",
    link: "#instagram",
  },
  {
    name: "contact",
    link: "/contact",
  },
];

const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col xl:flex-row gap-5 md:gap-10">
      {links.map((link, index) => {
        return (
          <Link
            href={link.link}
            key={index}
            className={`${
              link.link === pathname && "border-b-[2px] border-black"
            } text-center text-[18px] hover:border-black capitalize font-medium hover:border-b-[2px]`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
