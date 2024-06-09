import React from "react";
import NavBar from "@/components/NavBar";
const page = () => {
  return (
    <div className=" ">
       <nav className="mt-10"><NavBar /></nav>
      <h1 className="pt-32 pl-32 text-6xl text-slate-700">
        Get In Touch <span className="font-bold text-slate-500">Today</span>
      </h1>
      <p className="pl-32">Im eager to meet you and explore what we can create together. Lets connect... </p>
    </div>
  );
};

export default page;
