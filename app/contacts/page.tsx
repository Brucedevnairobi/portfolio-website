'use client'

import React from "react";
import NavBar from "@/components/NavBar";
import { BsGithub } from "react-icons/bs";
import { BsTwitterX } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import Link from "next/link";

const page = () => {
  return (
    <div className="w-full h-screen">
      <nav className="mt-10">
        <NavBar />
      </nav>
      <h1 className="pt-12 mx-12 text-4xl md:text-6xl text-slate-500 leading-12 tracking-tighter">
        Get In Touch <span className="font-bold text-slate-500">Today</span>
      </h1>
      <p className="mx-12 text-slate-500 leading-6 tracking-tighter">
        Shoot me a message via {" "}
        <a href="https://mail.google.com/mail" target="blank">
          mail {" "}
        </a>
        or find me through my socials ...
      </p>
      <ul className="italic text-black dark:text-slate-400 mx-12 leading-6 tracking-tighter mt-16">
        <li><span className="text-slate-600 font-medium ">Email:</span> bruce14simiyu@gmail.com</li>
        <li><span className="text-slate-600 font-medium ">Phone:</span> (+254)736-368-320</li>
        <li><span className="text-slate-600 font-medium ">Address:</span> 663-00219 Nairobi, Kenya</li>
      </ul>
      <div className="flex items-center justify-center space-x-16 text-[24px] pt-24 text-slate-600 leading-6 tracking-tighter">
            <Link
              href="https://www.linkedin.com/in/o-bruce-simiyu-2947a0240/"
              target="blank"
            >
              <BsLinkedin />
            </Link>
            <Link href="https://x.com/BRUCESIMIYU2"
             target="blank"
            >
              <BsTwitterX />
            </Link>
            <Link href="https://github.com/Brucedevnairobi" target="blank">
              <BsGithub />
            </Link>
        </div>
        <hr className="text-black dark:text-white mt-2 md:mt-8" />
        <h1 className="text-center text-xs italic text-slate-700 dark:text-slate-400 mt-2">Software and temples are much the same- first we build then we pray</h1>
        <h1 className="text-center text-xs italic text-slate-700 dark:text-slate-400">@2025</h1>
    </div>
  );
};

export default page;
