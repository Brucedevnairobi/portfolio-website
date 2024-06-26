import React from "react";
import { NavLinks } from "@/constants";
import Link from "next/link";

const NavBar = () => {
  return (
    <div>
      <nav className=" text-slate-400 tracking-tighter font-200">
        <ul className="hidden md:flex md:items-center md:justify-center gap-8">
          {NavLinks.map((link, index) => (
            <li key={index}>
              <Link
                href={link.route}
                className="hover:text-gray-400 hover:font-bold focus:text-gray-700 focus:underline focus:font-bold leading-6 tracking-tighter"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
