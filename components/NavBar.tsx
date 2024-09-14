"use client";
import React from "react";
import { NavLinks } from "@/constants";
import Link from "next/link";
import Theme from "./Theme";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const MobileNav = () => {
  return (
    <React.Fragment>
      <Sheet>
        <SheetTrigger asChild>
          <Image
            src="assets/icons/hamburger.svg"
            alt="Menu"
            width={20}
            height={20}
            className="md:hidden"
          />
        </SheetTrigger>
        <SheetContent side="left" className="border-none">
         
        </SheetContent>
      </Sheet>
    </React.Fragment>
  );
};

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
          <section className="ml-auto md:ml-4 flex items-center gap-4">
            <section className="flex items-center pr-4">
              <Theme />
              <MobileNav />
            </section>
          </section>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
