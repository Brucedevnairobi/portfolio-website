"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import NavBar from "@/components/NavBar";
import { BsGithub } from "react-icons/bs";
import { BsTwitterX } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { SiTypescript } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiPostgresql } from "react-icons/si";
import { SiPython } from "react-icons/si";
import { FaAws } from "react-icons/fa6";
import { SiJest } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { ArrowRight } from "lucide-react";
import { AiOutlineTool } from "react-icons/ai";
import { AiTwotoneApi } from "react-icons/ai";
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import { SiReactquery } from "react-icons/si";

export default function Home() {
  return (
    <div className="relative w-full md:max-w-screen-2xl mx-auto overflow-hidden">
      <nav className="mt-10">
        <NavBar />
      </nav>
      <div className=" pt-4 flex flex-col md:flex-row md:justify-between">
        <main className="mx-12 md:mt-20">
          <h1 className="text-slate-500">
            <span className="leading-6 tracking-tighter text-[16px] text-slate-500">
              Hire a
            </span>{" "}
            <br />
            <span className="text-[26px] tracking-tighter font-bold text-slate-700">
              Software Craftsman
            </span>
          </h1>
          <p className="leading-12 tracking-tighter text-[16px] text-slate-500 md:w-1/2">
            Hi, I`m Bruce Simiyu, a web frontend engineer living in Nairobi,
            Kenya. <br />
            Strategic, multi-disciplinary, creative with a strong belief in
            highly crafted digital experiences, an eye for innovation, and an
            obsession for pixel perfection.
            <br />
            With over 3 years of experience, I am quite passionate about
            application performance, code quality, and scalable architectural
            solutions.
            <br />
            <br /> Forever chasing that elusive zero-bug state.
          </p>
          <section className="flex flex-row  gap-4 mt-8">
            <section className="flex flex-col">
              <button className="bg-slate-900 rounded-3xl p-2">
                <Link
                  target="blank"
                  href="https://calendly.com/bruce14simiyu"
                  className="text-sm tracking-tighter text-slate-200 font-bold"
                >
                  Book a Call
                </Link>
              </button>
            </section>
          </section>
        </main>
        <div className="flex flex-col md:translate-y-52 mx-auto mt-10">
          <Image
            src="/assets/images/profile.jpg"
            width={180}
            height={180}
            alt="Profile Picture"
            className="rounded-full shadow-lg md:float-right md:mr-16 mx-auto"
          />
          <h1 className="text-center text-sm font-bold pt-4 text-slate-700 leading-6 tracking-tighter md:mr-16">
            Bruce Simiyu
          </h1>
          <p className="mx-auto text-xs flex text-slate-500 pb-2 leading-6 tracking-tighter md:mr-10">
            Frontend Developer | Technical Writer
          </p>

          <div className="flex items-center justify-center space-x-2 pt-2 text-slate-600 leading-6 tracking-tighter md:mr-16">
            <Link
              href="https://www.linkedin.com/in/o-bruce-simiyu-2947a0240/"
              target="blank"
            >
              {" "}
              <BsLinkedin />
            </Link>
            <Link href="https://x.com/BRUCESIMIYU2" target="blank">
              {" "}
              <BsTwitterX />
            </Link>
            <Link href="https://github.com/Brucedevnairobi" target="blank">
              {" "}
              <BsGithub />
            </Link>
          </div>
          <a
            href="https://docs.google.com/document/d/1tpEiOyXql9S2oIHFQ7l8WEmi-CD6kyVbExHy_fPWwqg/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs flex justify-center items-center mt-2 gap-2 md:mr-16 text-slate-400 leading-6 tracking-tighter"
          >
            Download CV
          </a>
        </div>
      </div>
      <div className="h-screen mt-16">
        <h1 className=" tracking-tighter text-[18px] text-center md:pt-28 pb-2 text-slate-700">
          About me
        </h1>
        <h1 className="text-[24px] font-light text-slate-700 text-center mt-[-16px] leading-12 tracking-tighter">
          The man behind the code
        </h1>
        <div className="h-[2px] w-[60px] bg-slate-700 mx-auto"></div>
        <div className="h-[1px] w-[98px] mt-[6px] bg-slate-700 mx-auto"></div>
        <div className=" relative flex flex-col md:flex-row">
          <Image
            src="/assets/images/grok2.jpg"
            width={240}
            height={240}
            alt="Profile Picture"
            className="rounded-md shadow-lg md:float-left md:ml-16 mx-auto mt-12"
          />
          <div className="mx-12 flex flex-col md:w-1/2 justify-center md:mx-auto">
            <h1 className="text-[36px] font-bold text-slate-700">
              Bruce Simiyu
            </h1>
            <p className="text-[16px] italic text-slate-500 mt-[-12px] ">
              Software Engineer
            </p>
            <p className="text-slate-500 mt-2 leading-6 tracking-tighter">
              Hello! You can call me <span className="font-bold">Bruce.</span> I
              am a Software Engineer who works with the React ecosystem and
              writes to teach people how to rebuild and redefine fundamental
              concepts through mental models.
              <br />
              <br /> I was born in 2000 in Nairobi, Kenya. When the pandemic hit
              5 years ago, my university was closed for a few months, and I
              started to learn web development, especially front-end
              development, out of curiosity and boredom.
              <br />
              <br /> As part of my learning journey, I started writing blog
              articles as a way to solidify my knowledge. When I posted them
              here as documentation, I discovered that many people found them
              valuable. Hopefully, it can help you too.
              <br />
              <br /> My experience spans from a variety of technologies, here
              are my current favorite stack:
            </p>
            <section className="flex flex-row gap-x-4 pt-4">
              <SiNextdotjs className="text-slate-500 w-10 h-10" />
              <SiTypescript className="text-slate-500 w-10 h-10" />
              <FaReact className="text-slate-500 w-10 h-10" />
              <SiReactquery className="text-slate-500 w-10 h-10" />
              <SiJest className="text-slate-500 w-10 h-10" />
              <SiTailwindcss className="text-slate-500 w-10 h-10" />
              <SiRedux className="text-slate-500 w-10 h-10" />
            </section>
          </div>
        </div>
      </div>
      <div className="mt-80 md:mt-24">
        <h1 className=" tracking-tighter text-[18px] text-center pt-14 md:pt-4 text-slate-700">
          Services
        </h1>
        <h1 className="text-[28px] font-light text-slate-700 text-center mt-[-16px] leading-12 tracking-tighter">
          what I bring to the table
        </h1>
        <div className="h-[2px] w-[60px] bg-slate-700 mx-auto"></div>
        <div className="h-[1px] w-[98px] mt-[5px] bg-slate-700 mx-auto"></div>
        <div className=" relative flex flex-col md:flex-col pt-4">
          <section className="mx-12 gap-2 items-center flex-col md:flex-row flex">
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
                  Expert in modern CSS tools like TailwindCSS, MUI,
                  ShadCN
                </li>
                <li className="text-[12px]">
                  SQL(PostgreSQL) & NoSQL(MongoDB) databases
                </li>
                <li className="text-[12px]">
                  Deep gist of Algorithms and Data
                  structures
                </li>
                <li className="text-[12px]">
                  Performance optimization; lazy loading, code splitting
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
                  Experience in creating well-documented, versioned REST APIs
                </li>
                <li className="text-[12px]">
                  Comprehensive API documentation using Swagger OpenAPI
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
                  Proficiency in JS, TS, Reactjs, Next, Nodejs, and Expressjs
                </li>
                <li className="text-[12px]">
                  Expertise in modern frontend technologies like TailwindCSS and
                  state management with Zustand
                </li>
                <li className="text-[12px]">
                  Experience with both SQL(PostgreSQL) and NoSQL(MongoDB)
                  Databases
                </li>
                <li className="text-[12px]">
                  Strong problem solving skills and a deep understanding of Data
                  structures and algorithms
                </li>
              </ul>
              <p className="text-sm tracking-tighter leading-6 text-slate-600"></p>
            </div>
          </section>
        </div>

        <h1 className="text-[36px] mt-32 text-slate-700 mx-12 leading-6 tracking-tighter">
          Latest <span className="font-bold">Projects</span>
        </h1>
        <p className="mx-12 mt-2 text-md text-slate-500 leading-6 tracking-tighter">
          I`m always working on something. Here are some of my latest projects.
        </p>
        <section className="mx-12 mt-8 gap-12 sm:grid grid-cols-2 md:grid-cols-3 md:gap-16  mb-20">
          <Link
            href="https://github.com/Brucedevnairobi/stack_overflow_with_ai"
            target="blank"
          >
            <div className="cursor-pointer rounded-xl shadow-lg">
              <Image
                src="/assets/images/chat-with-log.png"
                width={548}
                height={300}
                alt="chatwithlogimage"
                className="rounded-xl w-auto h-auto"
              />
            </div>
            <div className="flex justify-end space-x-6 mb-4">
              <div className=" space-x-2 mx-right mt-4">
                <button className="bg-slate-300 rounded-3xl p-2 text-slate-900 text-xs leading-3 tracking-tighter">
                  Next
                </button>
                <button className="bg-slate-300 rounded-3xl p-2 text-slate-900 text-xs leading-3 tracking-tighter">
                  ShadCN
                </button>
                <button className="bg-slate-300 rounded-3xl text-slate-900 p-2 text-xs leading-3 tracking-tighter">
                  Tailwind
                </button>
              </div>
            </div>
            <h6 className="text-slate-500 leading-4 tracking-tighter text-xs mb-4 md:text-sm">
              Code queries meet AI wizardry: This innovative platform transforms
              the way developers tackle challenges, offering instant, AI-powered
              solutions at any hour. By seamlessly blending the comprehensive
              knowledge base of a traditional coding forum with cutting-edge AI
              technology, it provides personalized, context-aware answers that
              evolve with each query.
            </h6>
          </Link>
          <div>
            <div className="cursor-pointer rounded-xl shadow-lg">
              <Image
                src="/assets/images/aws-amplify.png"
                width={548}
                height={300}
                alt="chatwithlogimage"
                className="rounded-xl"
              />
            </div>
            <div className="flex justify-end space-x-6 mb-4">
              <div className="md:flex md:items-end space-x-2 mt-4">
                <button className="bg-slate-300 rounded-3xl p-2 text-xs leading-3 tracking-tighter">
                  React(ts)
                </button>
                <button className="bg-slate-300 rounded-3xl p-2 text-xs leading-3 tracking-tighter">
                  Redux
                </button>
                <button className="bg-slate-300 rounded-3xl p-2 text-xs leading-3 tracking-tighter">
                  Tailwind
                </button>
              </div>
            </div>
            <h6 className="text-slate-500 leading-4 tracking-tighter text-xs mb-4 md:text-sm">
              A modern Crowdsourced City Improvement Platform for Nairobi City.
              It addresses the need for increased civic engagement and
              transparent urban planning. Features include; with easy-to-use
              voting mechanism, accessibility features for users with
              disabilities. Check READme.md.
            </h6>
          </div>
          <Link
            href="https://github.com/Brucedevnairobi/Nikestore"
            target="blank"
          >
            <div className="cursor-pointer rounded-xl shadow-lg">
              <Image
                src="/assets/images/invest.png"
                width={548}
                height={300}
                alt="chatwithlogimage"
                className="rounded-xl"
              />
            </div>
            <div className="flex justify-end space-x-6 mb-4">
              <div className="flex flex-end space-x-2 mt-4">
                <button className="bg-slate-300 rounded-3xl p-2 px-4 text-xs leading-3 tracking-tighter">
                  React
                </button>
                <button className="bg-slate-300 rounded-3xl p-2 px-4 text-xs leading-3 tracking-tighter">
                  CI/CD
                </button>
                <button className="bg-slate-300 rounded-3xl p-2 px-4 text-xs leading-3 tracking-tighter">
                  TailwindCSS
                </button>
              </div>
            </div>
            <h6 className="text-slate-500 leading-4 tracking-tighter text-xs mb-4 md:text-sm">
              A modern sneakers eCommerce website landing page. The site
              features a responsive design, intuitive product browsing and
              search functionality, and a streamlined checkout process.
            </h6>
          </Link>
          <Link
            href="https://github.com/Brucedevnairobi/stack_overflow_with_ai"
            target="blank"
          >
            <div className="cursor-pointer rounded-xl shadow-lg">
              <Image
                src="/assets/images/vitereact.png"
                width={548}
                height={300}
                alt="chatwithlogimage"
                className="rounded-xl"
              />
            </div>
            <div className="flex justify-end space-x-6 mb-4">
              <div className="flex flex-end space-x-2 mt-4">
                <button className="bg-slate-300 rounded-3xl p-2 px-4 text-xs leading-3 tracking-tighter">
                  Next
                </button>
                <button className="bg-slate-300 rounded-3xl p-2 px-4 text-xs leading-3 tracking-tighter ">
                  Zod
                </button>
                <button className="bg-slate-300 rounded-3xl p-2 px-4 text-xs leading-3 tracking-tighter ">
                  tRPC
                </button>
              </div>
            </div>
            <h6 className="text-slate-500 leading-4 tracking-tighter text-xs mb-4 md:text-sm">
              A Robust Task Management App with CRUD operations for tasks, tasks
              categorization, priority levels, due dates and reminders, Data
              export and backup using formats CSV or JSON
            </h6>
          </Link>
        </section>
        <h1 className="text-[36px] pt-10 text-slate-700 pl-16 tracking-tighter leading-6">
          Featured <span className="font-bold">Articles</span>
        </h1>
        <p className="mx-16 mt-2 text-md text-slate-500 leading-6 tracking-tighter">
          Learning and writing tech staff. Interact with my blog
        </p>
        <section className="mx-12 mt-8 gap-12 sm:grid grid-cols-2 md:grid-cols-3 md:gap-16  mb-20">
          <Link
            href="https://javascript.works-hub.com/learn/creating-a-react-project-using-vite-pre-bundler-55de3"
            target="blank"
          >
            <div className="cursor-pointer rounded-xl shadow-lg">
              <Image
                src="/assets/images/crypto-trading.png"
                width={548}
                height={300}
                alt="chatwithlogimage"
                className="rounded-xl"
              />
            </div>
            <div className="flex justify-end space-x-6 mb-4">
              <div className="flex flex-end space-x-2 mt-4">
                <button className="bg-slate-300 rounded-3xl p-2 px-4 text-xs leading-3 tracking-tighter">
                  Vite
                </button>
                <button className="bg-slate-300 rounded-3xl p-2 px-4 text-xs leading-3 tracking-tighter">
                  React
                </button>
                <button className="bg-slate-300 rounded-3xl p-2 px-4 text-xs leading-3 tracking-tighter ">
                  HMR
                </button>
              </div>
            </div>
            <h6 className="text-slate-500 leading-4 tracking-tighter text-xs mb-4 md:text-sm">
              For frontend tooling, Vite can be said to have made
              create-react-app obsolete. Hot Module Replacement and performance
              make it an asset for the front end. To explore more about Vite
              check out this article
            </h6>
          </Link>
          <React.Fragment>
            <Link
              href="https://dev.to/brucedevnairobi/build-deploy-and-host-your-vite-app-on-github-pages-with-github-actions-cicd-2g51"
              target="blank"
            >
              <div className="cursor-pointer rounded-xl shadow-lg">
                <Image
                  src="/assets/images/aws-amplify.png"
                  width={548}
                  height={300}
                  alt="chatwithlogimage"
                  className="rounded-xl"
                />
              </div>
              <div className="flex justify-end space-x-6 mb-4">
                <div className="md:flex md:items-end space-x-2 mt-4">
                  <button className="bg-slate-300 rounded-3xl p-2 text-xs leading-3 tracking-tighter">
                    React
                  </button>
                  <button className="bg-slate-300 rounded-3xl p-2 text-xs leading-3 tracking-tighter">
                    CI/CD
                  </button>
                  <button className="bg-slate-300 rounded-3xl p-2 text-xs leading-3 tracking-tighter">
                    Vite
                  </button>
                </div>
              </div>
              <h6 className="text-slate-500 leading-4 tracking-tighter text-xs mb-4 md:text-sm">
                Build, Deploy, and Host Your Vite App on GitHub Pages with
                GitHub Actions CI/CD
              </h6>
            </Link>
          </React.Fragment>
          <Link
            href="https://dev.to/brucedevnairobi/beginners-guide-to-tailwind-css-and-the-just-in-time-engine-18jf"
            target="blank"
          >
            <div className="cursor-pointer rounded-xl shadow-lg">
              <Image
                src="/assets/images/invest.png"
                width={548}
                height={300}
                alt="chatwithlogimage"
                className="rounded-xl"
              />
            </div>
            <div className="flex justify-end space-x-6 mb-4">
              <div className="flex flex-end space-x-2 mt-4">
                <button className="bg-slate-300 rounded-3xl p-2 px-4 text-xs leading-3 tracking-tighter">
                  CSS
                </button>
                <button className="bg-slate-300 rounded-3xl p-2 px-4 text-xs leading-3 tracking-tighter">
                  JIT Engine
                </button>
                <button className="bg-slate-300 rounded-3xl p-2 px-4 text-xs leading-3 tracking-tighter">
                  TailwindCSS
                </button>
              </div>
            </div>
            <h6 className="text-slate-500 leading-4 tracking-tighter text-xs mb-4 md:text-sm">
              Beginner`s Guide to TailwindCSS and the Just-In-Time Engine
            </h6>
          </Link>
        </section>
      </div>
    </div>
  );
}
