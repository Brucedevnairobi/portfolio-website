import React from "react";
import NavBar from "@/components/NavBar";
import Image from "next/image";
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import { AiOutlineTool, AiTwotoneApi } from "react-icons/ai";
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
          <p className=" leading-8 tracking-tighter text-gray-500  my-4 md:w-[800px]">
            I`ve been working as a software engineer for over 3 years. My
            hands-on experience spans various aspects, including software
            architecture, software development, UI/UX design, and product
            management. For the past 3 years, I`ve also led developer teams,
            honing my skills in team management, mentoring, hiring, and
            interviewing.
            <br />I have implemented MVPs in several startups, gaining extensive
            experience in planning, leading, and executing product development.
            <br />
            With a strong focus on client-side web development and a knack for
            creating efficient modern user-centric websites, Here is what I
            bring to the table:
          </p>
          <Image
            src="/assets/images/daas.png"
            width={441}
            height={232}
            alt="daas"
            className=" rounded-xl"
          />
        </div>
        <section className="mx-12 gap-2 items-center flex-col md:flex-row flex pt-8">
          <div className="w-full md:w-1/3 border-[1px] border-slate-900 hover:cursor-pointer rounded-sm p-2 mb-4 shadow-lg mx-auto">
            <AiOutlineTool className="h-10 w-10 text-slate-700" />
            <h3 className="text-xl font-bold text-slate-700 leading-6 tracking-tighter">
              Frontend Development
            </h3>
            <ul className="text-slate-500">
              <li className="text-[12px] ">
                Proficiency in JS, TS, Reactjs, and Next
              </li>
              <li className="text-[12px]">
                Expert in modern CSS tools like MUI, ShadCN
              </li>
              <li className="text-[12px]">
                SQL(PostgreSQL) & NoSQL(MongoDB) databases
              </li>
              <li className="text-[12px]">
                Deep gist of Algorithms and Data structures
              </li>
              <li className="text-[12px]">
                Lazy loading, code splitting for performance
              </li>
            </ul>
            <p className="text-sm text-slate-600 leading-6 tracking-tighter"></p>
          </div>
          <div className="w-full md:w-1/3 border-[1px] hover:cursor-pointer border-slate-900 rounded-sm p-2 shadow-lg mx-auto mb-4">
            <AiTwotoneApi className="h-10 w-10 text-slate-700" />
            <h3 className="text-xl tracking-tighter leading-6 font-bold text-slate-700">
              API Development
            </h3>

            <ul className="text-slate-500">
              <li className="text-[12px] ">
                Creating well-documented, versioned REST APIs
              </li>
              <li className="text-[12px]">
                API documentation using Swagger OpenAPI
              </li>
              <li className="text-[12px]">
                Thorough API testing using Postman
              </li>
            </ul>
            <p className="text-sm tracking-tighter leading-6 text-slate-600"></p>
          </div>
          <div className="w-full md:w-1/3 border-[1px] hover:cursor-pointer border-slate-900 rounded-sm p-2 shadow-lg mx-auto mb-4">
            <BiSolidQuoteAltLeft className="h-10 w-10 text-slate-700" />
            <h3 className="text-xl font-bold text-slate-700 tracking-tighter leading-6">
              Technical Writing
            </h3>
            <ul className="text-slate-500">
              <li className="text-[12px] ">
                Proficiency in JS, TS, Reactjs, and Next
              </li>
              <li className="text-[12px]">
                Expert in modern CSS tools like MUI, ShadCN
              </li>
              <li className="text-[12px]">
                SQL(PostgreSQL) & NoSQL(MongoDB) databases
              </li>
              <li className="text-[12px]">
                Deep gist of Algorithms and Data structures
              </li>
              <li className="text-[12px]">
                Lazy loading, code splitting for performance
              </li>
            </ul>
            <p className="text-sm tracking-tighter leading-6 text-slate-600"></p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default page;
