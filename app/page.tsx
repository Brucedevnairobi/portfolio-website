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

export default function Home() {
  return (
    <div className="relative w-full md:max-w-screen-2xl mx-auto overflow-hidden">
      <nav className="mt-10">
        <NavBar />
      </nav>

      <div className=" pt-4 flex flex-col md:flex-row md:justify-between">
        <main className="mx-12 md:mt-36">
          <h1 className="text-3xl md:text-6xl tracking-tighter text-slate-500">
            Hire a <br />
            <span className="font-bold text-slate-700">Software Craftsman</span>
          </h1>
          <p className="leading-12 tracking-tighter text-sm md:text-md pt-4 text-slate-500 md:w-1/2">
            Strategic, multi-disciplinary, creative software developer with a
            strong belief in highly crafted digital experiences, an eye for
            innovation, and an obsession for pixel perfection.
            <br />
            With 3 years experience, I am quite passionate about application
            performance, code quality and scalable architectural solutions.
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
            <section className="flex flex-col">
              <button className="bg-slate-300 rounded-3xl p-2">
                <Link
                  href="./daas"
                  className="text-sm font-normal tracking-tighter"
                >
                  Subscription-Based Developer
                </Link>
              </button>
            </section>
          </section>
        </main>
        <div className="flex flex-col md:translate-y-52 items-center mt-10">
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
          <p className="mx-auto text-xs flex text-slate-500 pb-2 leading-6 tracking-tighter md:mr-16">
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
            href="http://"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs flex justify-center items-center mt-2 gap-2 md:mr-16 text-slate-400 leading-6 tracking-tighter"
          >
            Download Resume
          </a>
        </div>
      </div>
      <h1 className="text-2xl md:text-3xl font-bold text-center pt-40 text-slate-700 leading-6 tracking-tighter">
        Trusted by world leading brands
      </h1>
      <div className="flex flex-row w-full pt-8 items-center justify-center gap-x-10 md:gap-x-20">
        <Image src="/assets/images/bw.webp" width={100} height={100} alt="bw" />
        <Image
          src="/assets/images/jwf.webp"
          width={100}
          height={100}
          alt="jwf"
        />
        <Image src="/assets/images/ms.webp" width={100} height={100} alt="ms" />
      </div>
      <h1 className="text-3xl md:text-6xl text-slate-700 text-center mt-8 font-bold tracking-tighter">
        Services
      </h1>
      <p className="flex text-slate-500 mt-4 leading-6 tracking-tighter md:mx-60 text-md mx-10 text-center">
        I`ve been working as a software engineer for over 3 years. My hands-on
        experience spans various aspects, including software architecture,
        software development, UI/UX design, and product management. For the past
        3 years, I`ve also led developer teams, honing my skills in team
        management, mentoring, hiring, and interviewing.
      </p>
      <h3 className="text-2xl md:text-3xl leading-6 tracking-tighter font-semibold text-slate-700 mt-8 mx-12">
        Seamless <span className="font-bold">Onboarding</span>
      </h3>
      <p className="text-slate-500 mx-12 leading-6 tracking-tighter text-xs md:text-sm mb-2">
        I’ve streamlined the onboarding process to make it as easy as possible
        for you to get started. Here’s how it works:
      </p>
      <section className="items-center flex-col md:flex-row flex">
        <div className="w-80 h-36 border-[1px] border-slate-900 hover:cursor-pointer rounded-2xl p-4 mb-4 shadow-lg mx-auto">
          <h3 className="text-xl font-bold text-slate-700 leading-6 tracking-tighter">
            Select a Plan
          </h3>
          <p className="text-sm text-slate-600 leading-6 tracking-tighter">
            Not sure which plan is right for you? Book a call and I’ll help you
            choose the best plan for your project.
          </p>
        </div>
        <div className="w-80 h-36 border-[1px] hover:cursor-pointer border-slate-900 rounded-xl p-4 shadow-lg mx-auto mb-4">
          <h3 className="text-xl tracking-tighter leading-6 font-bold text-slate-700">
            Onboarding Email
          </h3>
          <p className="text-sm tracking-tighter leading-6 text-slate-600">
            You will receive a welcome email with all the details you need to
            get started. We’ll also schedule a kick-off call to discuss your
            project.
          </p>
        </div>
        <div className="w-80 h-36 border-[1px] hover:cursor-pointer border-slate-900 rounded-xl p-4 shadow-lg mx-auto mb-4">
          <h3 className="text-xl font-bold text-slate-700 tracking-tighter leading-6">
            Start Development
          </h3>
          <p className="text-sm tracking-tighter leading-6 text-slate-600">
            After our chat, I’ll dive into your project. Expect regular updates
            and opportunities to give your input—your feedback is crucial!
          </p>
        </div>
      </section>
      <h3 className="text-3xl font-semibold text-slate-700 pt-10 mx-12 leading-6 tracking-tighter">
        End-to-End
        <span className="font-bold"> Development</span>
      </h3>
      <section className="flex flex-col md:flex-row md:space-x-32 md:items-center mx-12">
        <h1 className="text-sm md:text-md text-slate-500 leading-6 tracking-tighter">
          Bridging the gap between innovation and functionality, my experience
          offers an integrated suite of services for full-stack development,
          cloud computing, and technical writing. <br />
          <br />
          From dynamic front-end designs to robust back-end architectures, I
          bridge technology with innovation to create impactful digital
          experiences. <br />
          <br />I have acquired skills in all phases of software development
          with a bias towards frontend development and cloud computing,
          including but not limited to;
        </h1>
        <div className="mx-auto pt-4">
          <section className="flex flex-row gap-x-16">
            <SiNextdotjs className="text-slate-500 w-12 h-12" />
            <SiTypescript className="text-slate-500 w-12 h-12" />
            <FaReact className="text-slate-500 w-12 h-12" />
          </section>
          <section className="flex flex-row gap-x-16 pt-4">
            <SiPostgresql className="text-slate-500 w-12 h-12" />
            <SiPython className="text-slate-500 w-12 h-12" />
            <FaAws className="text-slate-500 w-12 h-12" />
          </section>
          <section className="flex flex-row gap-x-16 pt-4">
            <SiJest className="text-slate-500 w-12 h-12" />
            <SiTailwindcss className="text-slate-500 w-12 h-12" />
            <SiRedux className="text-slate-500 w-12 h-12" />
          </section>
        </div>
      </section>
      <h1 className="text-3xl md:text-6xl mt-32 leading-6 tracking-tighter text-slate-700 mx-12">
        What People Are <span className="font-bold">Saying</span>
      </h1>
      <p className="text-slate-500 text-xs leading-6 tracking-tighter md:text-sm mx-12">
        My clients say- If I do it, then its done well
      </p>
      <section className=" my-4 mx-12 flex flex-col md:flex-row md:gap-4 gap-2">
        <div className="border-[1px] md:w-1/3 border-slate-400 cursor-pointer rounded-xl p-4 shadow-lg bg-white">
          <p className="text-medium text-slate-500 leading-6 tracking-tighter">
            &quot;Bruce expertly manages our vast product database, uploading
            around 3 million listings every four months to our Shopify store
            with remarkable precision and efficiency. His flexible
            Subscription-Based Developer model has been crucial in handling our
            fluctuating project demands, proving invaluable in our data
            management strategies. We highly recommend Bruce for anyone needing
            top-notch, scalable technical solutions.&quot;
          </p>
          <h3 className="text-md mt-2 font-bold text-slate-700 leading-6 tracking-tighter">
            Kelvin Gatheru
          </h3>
          <p className="text-slate-600 text-xs leading-6 tracking-tighter">
            CEO @ Eighteen Twenty Four
          </p>
        </div>
        <div className="md:w-1/3 max-sm:my-4 border-[1px] border-slate-400 cursor-pointer  rounded-xl p-4 shadow-lg bg-white">
          <p className="text-medium text-slate-500 tracking-tighter leading-6">
            &quot;Bruce has been instrumental in addressing our monthly IT
            inquiries and recently implemented a custom automated integration
            system for our booking platform and CRM. His expertise as a
            Subscription-Based Developer allows us to access specialized skills
            on-demand, enhancing our operational efficiency. We are extremely
            satisfied with his proactive and knowledgeable service.&quot;
          </p>
          <h3 className="text-md mt-2 font-bold text-slate-700 leading-6 tracking-tighter">
            Kephas Mwangi
          </h3>
          <p className="text-slate-600 text-xs leading-6 tracking-tighter">
            CEO @ Zero Eleven
          </p>
        </div>
        <div className="md:w-1/3 border-[1px] border-slate-400 cursor-pointer  rounded-xl p-4 shadow-lg bg-white">
          <p className="text-medium text-slate-500 tracking-tighter leading-6">
            &quot;Setting up our new website was seamless thanks to Bruce. He
            adapted quickly to our needs, offering patient and insightful
            guidance throughout the process. His Subscription-Based Developer
            approach provided us with exactly the right amount of support when
            we needed it, without the overhead of a full-time developer. We are
            thrilled with the results and the flexible, cost-effective service
            he provides.&quot;
          </p>
          <h3 className="text-md mt-2 font-bold text-slate-700 leading-6 tracking-tighter">
            Lawrence Magondu
          </h3>
          <p className="text-slate-600 text-xs leading-6 tracking-tighter">
            CEO @ Seven Eleven
          </p>
        </div>
      </section>
      <h1 className="text-4xl md:text-6xl mt-32 text-slate-700 mx-12 leading-6 tracking-tighter">
        Latest <span className="font-bold">Projects</span>
      </h1>
      <p className="mx-12 text-xs md:text-sm text-slate-500 leading-6 tracking-tighter">
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
            A modern Crowdsourced City Improvement Platform for Nairobi City. It
            addresses the need for increased civic engagement and transparent
            urban planning. Features include; with easy-to-use voting mechanism,
            accessibility features for users with disabilities. Check READme.md.
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
            A modern sneakers eCommerce website landing page. The site features
            a responsive design, intuitive product browsing and search
            functionality, and a streamlined checkout process.
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
      <h1 className="text-4xl md:text-6xl pt-32 text-slate-700 pl-16 tracking-tighter leading-6">
        Latest <span className="font-bold">Articles</span>
      </h1>
      <p className="mx-16 text-xs md:text-sm text-slate-500 leading-6 tracking-tighter">
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
            For frontend tooling, Vite can be said to have made create-react-app
            obsolete. Hot Module Replacement and performance make it an asset
            for the front end. To explore more about Vite check out this article
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
              Build, Deploy, and Host Your Vite App on GitHub Pages with GitHub
              Actions CI/CD
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
  );
}
