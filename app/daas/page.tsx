import React from "react";
import NavBar from "@/components/NavBar";
import Image from "next/image";
const page = () => {
  return (
    <div>
      <nav className="mt-10">
        <NavBar />
      </nav>
      <div className="pl-16 h-screen">
        <h1 className="text-3xl md:text-6xl tracking-tighter leading-12 font-bold  pt-12 text-slate-500">
          Services
        </h1>
        <div className="flex flex-col md:flex-row pr-16">
          <p className="text-lg leading-6 tracking-tighter text-gray-500  my-4 md:w-[800px]">
            I`ve been working as a software engineer for over 3 years. My
            hands-on experience spans various aspects, including software
            architecture, software development, UI/UX design, and product
            management. For the past 3 years, I`ve also led developer teams,
            honing my skills in team management, mentoring, hiring, and
            interviewing.
          </p>
          <Image
            src="/assets/images/daas.png"
            width={441}
            height={232}
            alt="daas"
            className=" rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default page;
