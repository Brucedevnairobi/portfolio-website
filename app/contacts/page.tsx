import React from "react";
import NavBar from "@/components/NavBar";
const page = () => {
  return (
    <div className=" ">
      <nav className="mt-10">
        <NavBar />
      </nav>
      <h1 className="pt-12 mx-12 text-4xl md:text-6xl text-slate-500 leading-12 tracking-tighter">
        Get In Touch <span className="font-bold text-slate-500">Today</span>
      </h1>
      <p className="mx-12 text-slate-500 leading-6 tracking-tighter">
        Shoot me a message via
        <a href="https://mail.google.com/mail" target="blank">
          mail
        </a>
        or find through my socials ...
      </p>
    </div>
  );
};

export default page;
