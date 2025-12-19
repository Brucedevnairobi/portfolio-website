"use client";
import React from "react";
import { NavLinks } from "@/constants";
import Link from "next/link";
import Theme from "./Theme";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetClose,
  SheetTrigger,
} from "@/components/ui/sheet";
import { usePathname } from "next/navigation";

const NavContent = () => {
  const pathname = usePathname();
  return (
    <section>
      {NavLinks.map((item) => {
        const isActive =
          (pathname.includes(item.route) && item.route.length > 1) ||
          pathname === item.route;

        return (
          <SheetClose asChild key={item.route}>
            <Link
              href={item.route}
              className={`${
                isActive
                  ? "primary-gradient rounded-lg text-light-900"
                  : "text-dark300_light900"
              } flex items-center justify-start gap-4 bg-transparent p-4`}
            >
              <p className={`${isActive ? "base-bold" : "base-medium"}`}>
                {item.label}
              </p>
            </Link>
          </SheetClose>
        );
      })}
    </section>
  );
};

const MobileNav = () => {
  return (
    <React.Fragment>
      <Sheet>
        <SheetTrigger asChild>
          <Menu className="w-6 h-6 md:hidden text-gray-400" size={24}  />
        </SheetTrigger>
        <SheetContent side="left" className="border-none">
          <div className="no-scrollbar flex grow flex-col justify-between overflow-y-auto">
            <SheetClose asChild>
              <NavContent />
            </SheetClose>
          </div>
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
