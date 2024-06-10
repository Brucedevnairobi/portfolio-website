"use client";
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

export default function Home() {
  return (
    <div className="relative w-full md:max-w-screen-2xl mx-auto overflow-hidden">
      <nav className="mt-10">
        <NavBar />
      </nav>

      <div className="flex flex-row pt-4 gap-60">
        <main className="mx-12 md:mt-36">
          <h1 className="text-3xl md:text-6xl tracking-tighter text-slate-500">
            Hire a <br />
            <span className="font-bold text-slate-700">Software Craftsman</span>
          </h1>
          <p className="leading-12 tracking-tighter text-sm md:text-md pt-4 text-slate-500">
            Strategic, multi-disciplinary, creative software developer with a{" "}
            <br /> strong belief in highly crafted digital experiences, an eye
            for innovation, <br /> and an obsession for pixel perfection.
            <br />
            <br />
            With 3 years experience, I am quite passionate about application
            performance,
            <br /> code quality and scalable architectural solutions.
            <br /> Forever chasing that elusive zero-bug state.
          </p>
          <section className="flex flex-row  gap-4 mt-8">
            <section className="flex flex-col">
              <button className="bg-slate-300 rounded-3xl p-2">
                <Link
                target='blank'
                  href="https://calendly.com/bruce14simiyu"
                  className="text-xs leading-6 tracking-tighter"
                >
                  Book a Call
                </Link>
              </button>
            </section>
            <section className="flex flex-col">
              <button className="bg-slate-300 rounded-3xl p-2">
                <Link href="./daas" className="text-xs leading-6 tracking-tighter">
                  Subscription-Based Developer
                </Link>
              </button>
            </section>
          </section>
        </main>
        <div className="hidden md:flex flex-col md:translate-y-52">
          <Image
            src="/profile.jpg"
            width={260}
            height={260}
            alt="Profile Picture"
            className="rounded-3xl shadow-lg"
          />
          <h1 className="text-center text-sm font-bold pt-4 text-slate-700 leading-6 tracking-tighter">
            Bruce Simiyu
          </h1>
          <p className="mx-auto text-xs flex text-slate-500 pb-2 leading-6 tracking-tighter">
            Software Engineer | Technical Writer
          </p>

          <div className="flex items-center justify-center space-x-2 pt-2 text-slate-600 leading-6 tracking-tighter">
            <BsLinkedin />
            <BsTwitterX />
            <BsGithub />
          </div>
          <a
            href="http://"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm flex justify-center pt-2 text-indigo-500 leading-6 tracking-tighter"
          >
            Download Resume
          </a>
        </div>
      </div>
      <h1 className="text-2xl md:text-3xl font-bold text-center pt-60 text-slate-700 leading-6 tracking-tighter">
        Trusted by world leading brands
      </h1>
      <div className="flex flex-row w-full pt-8 items-center justify-center gap-x-10 md:gap-x-20">
        <Image src="/bw.webp" width={100} height={100} alt="bw" />
        <Image src="/jwf.webp" width={100} height={100} alt="jwf" />
        <Image src="/ms.webp" width={100} height={100} alt="ms" />
      </div>
      <h1 className="text-3xl md:text-6xl text-slate-700 text-center mt-8 font-bold tracking-tighter">
        Developer as a Service
      </h1>
      <p className="flex text-slate-500 mt-4 leading-6 tracking-tighter md:mx-60 text-md mx-10 text-center">
        As a Subscription-Based Developer, I offer businesses the versatility of
        accessing my wide-ranging expertise across multiple technology stacks
        and domains on a project basis. This allows you to leverage top
        developer talent without the long-term obligations of permanent hiring.
        My DaaS solution provides a scalable and adaptable resource tailored
        specifically to the dynamic requirements of your project. Whether you
        need full-stack development, specialized skills like frontend
        development, cloud, or securing an entire cross-functional team, I can
        deliver the right skills at the right time while aligning costs with
        your evolving needs.
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
      <h3 className="text-3xl font-semibold text-slate-700 pt-10 mx-12">
        End-to-End
        <span className="font-bold"> Development</span>
      </h3>
      <section className="flex flex-col md:flex-row md:space-x-32 md:items-center mx-12">
        <h1 className="text-sm md:text-md text-slate-500">
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
        <div className="mx-auto pt-4 ">
          <section className="flex flex-row gap-x-24">
            <SiNextdotjs className="text-slate-500 w-12 h-12" />
            <SiTypescript className="text-slate-500 w-12 h-12" />
            <FaReact className="text-slate-500 w-12 h-12" />
          </section>
          <section className="flex flex-row gap-x-24 pt-4">
            <SiPostgresql className="text-slate-500 w-12 h-12" />
            <SiPython className="text-slate-500 w-12 h-12" />
            <FaAws className="text-slate-500 w-12 h-12" />
          </section>
          <section className="flex flex-row gap-x-24 pt-4">
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
          <h3 className="text-md mt-2 font-bold text-slate-700">
            Kelvin Gatheru
          </h3>
          <p className="text-slate-600 text-xs">CEO @ Eighteen Twenty Four</p>
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
          <h3 className="text-md mt-2 font-bold text-slate-700">
            Kephas Mwangi
          </h3>
          <p className="text-slate-600 text-xs">CEO @ Zero Eleven</p>
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
          <h3 className="text-md mt-2 font-bold text-slate-700">
            Lawrence Magondu
          </h3>
          <p className="text-slate-600 text-xs">CEO @ Seven Eleven</p>
        </div>
      </section>
      <h1 className="text-4xl md:text-6xl mt-32 text-slate-700 mx-12 leading-6 tracking-tighter">
        Latest <span className="font-bold">Projects</span>
      </h1>
      <p className="mx-12 text-xs md:text-sm text-slate-500 leading-6 tracking-tighter">
        I`m always working on something. Here are some of my latest projects.
      </p>
      <section className="mx-12 mt-8 gap-2 sm:grid grid-cols-2 md:grid-cols-3 md:gap-16 mb-20">
      <div>
          <div className="cursor-pointer rounded-xl shadow-lg">
            <Image
              src="/chat-with-log.png"
              width={300}
              height={300}
              alt="chatwithlogimage"
              className="w-[360px] rounded-xl"
            />
          </div>
          <div className="flex justify-end space-x-6 mb-4">
            <div className=" space-x-2 mx-right mt-4">
              <button className="bg-slate-300 rounded-3xl p-2 text-slate-900 text-xs">
                Next
              </button>
              <button className="bg-slate-300 rounded-3xl p-2 text-slate-900 text-xs">
                TypeScript
              </button>
              <button className="bg-slate-300 rounded-3xl text-slate-900 p-2 text-xs">
                Tailwind
              </button>
            </div>
          </div>
          <h6 className="text-slate-500 leading-4 text-xs mb-4">
            GitHub Actions, a powerful CI/CD tool, seamlessly integrates with
            Vite applications, streamlining the development process and
            enhancing collaboration among teams.
          </h6>
        </div>
        <div>
          <div className="cursor-pointer rounded-xl shadow-lg">
            <Image
              src="/aws-amplify.png"
              width={300}
              height={300}
              alt="chatwithlogimage"
              className="w-[360px] rounded-xl"
            />
          </div>
          <div className="flex justify-end space-x-6 mb-4">
            <div className="md:flex md:items-end space-x-2 mt-4">
              <button className="bg-slate-300 rounded-3xl p-2 text-xs">
                React(ts)
              </button>
              <button className="bg-slate-300 rounded-3xl p-2 text-xs">
                EC2
              </button>
              <button className="bg-slate-300 rounded-3xl p-2 text-xs">
                Tailwind
              </button>
            </div>
          </div>
          <h6 className="text-slate-500 leading-4 text-xs mb-4">
            Here is a deep-dive breakdown illustration showing why Tailwind CSS
            is a key developer asset for large projects and visually-stunning
            UIs.
          </h6>
        </div>
        <div>
          <div className="cursor-pointer rounded-xl shadow-lg">
            <Image
              src="/invest.png"
              width={300}
              height={300}
              alt="chatwithlogimage"
              className="w-[360px] rounded-xl"
            />
          </div>
          <div className="flex justify-end space-x-6 mb-4">
            <div className="flex flex-end space-x-2 mt-4">
              <button className="bg-slate-300 rounded-3xl p-2 px-4 text-xs">
                TypeScript
              </button>
              <button className="bg-slate-300 rounded-3xl p-2 px-4 text-xs">
                CI/CD
              </button>
              <button className="bg-slate-300 rounded-3xl p-2 px-4 text-xs">
                Python
              </button>
            </div>
          </div>
          <h6 className="text-slate-500 leading-4 text-xs mb-4">
            For frontend tooling, Vite can be said to have made create-react-app
            obsolete. Hot Module Replacement and performance make it an asset
            for the front end. To explore more about Vite check out this article
          </h6>
        </div>
        <div>
          <div className="cursor-pointer rounded-xl shadow-lg">
            <Image
              src="/crypto-trading.png"
              width={300}
              height={300}
              alt="chatwithlogimage"
              className="w-[360px] rounded-xl"
            />
          </div>
          <div className="flex justify-end space-x-6 mb-4">
            <div className="flex flex-end space-x-2 mt-4">
              <button className="bg-slate-300 rounded-3xl p-2 px-4 text-xs">
                TypeScript
              </button>
              <button className="bg-slate-300 rounded-3xl p-2 px-4 text-xs">
                CI/CD
              </button>
              <button className="bg-slate-300 rounded-3xl p-2 px-4 text-xs">
                Python
              </button>
            </div>
          </div>
          <h6 className="text-slate-500 leading-4 text-xs mb-4">
            For frontend tooling, Vite can be said to have made create-react-app
            obsolete. Hot Module Replacement and performance make it an asset
            for the front end. To explore more about Vite check out this article
          </h6>
        </div>
      </section>
      <h1 className="text-4xl md:text-6xl pt-32 text-slate-700 pl-16 tracking-tighter leading-6">
        Latest <span className="font-bold">Articles</span>
      </h1>
      <p className="mx-16 text-xs md:text-sm text-slate-500 leading-6 tracking-tighter">
        Learning and writing tech staff. Interact with my blog
      </p>
      <section className="mx-16 mt-8 gap-2 sm:grid sm:grid-cols-2 md:grid-cols-3 md:gap-16 sm:gap-12 pb-20">
        <div>
          <div className="cursor-pointer rounded-xl shadow-lg">
            <Image
              src="/chat-with-log.png"
              width={300}
              height={300}
              alt="chatwithlogimage"
              className="w-[360px] rounded-xl"
            />
          </div>
          <div className="flex justify-end space-x-6 mb-4">
            <div className=" space-x-2 mx-right mt-4">
              <button className="bg-slate-300 rounded-3xl p-2 text-slate-900 text-xs">
                Next
              </button>
              <button className="bg-slate-300 rounded-3xl p-2 text-slate-900 text-xs">
                TypeScript
              </button>
              <button className="bg-slate-300 rounded-3xl text-slate-900 p-2 text-xs">
                Tailwind
              </button>
            </div>
          </div>
          <h6 className="text-slate-500 leading-4 text-xs mb-4">
            GitHub Actions, a powerful CI/CD tool, seamlessly integrates with
            Vite applications, streamlining the development process and
            enhancing collaboration among teams.
          </h6>
        </div>
        <div>
          <div className="cursor-pointer rounded-xl shadow-lg">
            <Image
              src="/aws-amplify.png"
              width={300}
              height={300}
              alt="chatwithlogimage"
              className="w-[360px] rounded-xl"
            />
          </div>
          <div className="flex justify-end space-x-6 mb-4">
            <div className="md:flex md:items-end space-x-2 mt-4">
              <button className="bg-slate-300 rounded-3xl p-2 text-xs">
                React(ts)
              </button>
              <button className="bg-slate-300 rounded-3xl p-2 text-xs">
                EC2
              </button>
              <button className="bg-slate-300 rounded-3xl p-2 text-xs">
                Tailwind
              </button>
            </div>
          </div>
          <h6 className="text-slate-500 leading-4 text-xs mb-4">
            Here is a deep-dive breakdown illustration showing why Tailwind CSS
            is a key developer asset for large projects and visually-stunning
            UIs.
          </h6>
        </div>
        <div>
          <div className="cursor-pointer rounded-xl shadow-lg">
            <Image
              src="/invest.png"
              width={300}
              height={300}
              alt="chatwithlogimage"
              className="w-[360px] rounded-xl"
            />
          </div>
          <div className="flex justify-end space-x-6 mb-4">
            <div className="flex flex-end space-x-2 mt-4">
              <button className="bg-slate-300 rounded-3xl p-2 px-4 text-xs">
                TypeScript
              </button>
              <button className="bg-slate-300 rounded-3xl p-2 px-4 text-xs">
                CI/CD
              </button>
              <button className="bg-slate-300 rounded-3xl p-2 px-4 text-xs">
                Python
              </button>
            </div>
          </div>
          <h6 className="text-slate-500 leading-4 text-xs mb-4">
            For frontend tooling, Vite can be said to have made create-react-app
            obsolete. Hot Module Replacement and performance make it an asset
            for the front end. To explore more about Vite check out this article
          </h6>
        </div>
      </section>
    </div>
  );
}
