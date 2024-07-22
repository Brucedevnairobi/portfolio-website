"use client";
import React from "react";
import { NavLinks } from "@/constants";
import Link from "next/link";
import Theme from "./Theme";

const NavBar = () => {
  return (
    <header>
      <nav className=" text-slate-400 tracking-tighter font-200">
        <div className="flex">
          <ul className="hidden md:flex md:items-center md:justify-center gap-8 mx-auto">
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
          <section className="ml-auto md:ml-12">
            <Theme />
          </section>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
