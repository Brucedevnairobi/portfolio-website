import React from "react";
import NavBar from "@/components/NavBar";
import Image from 'next/image'
const page = () => {
  return (
    <div>
       <nav className="mt-10"><NavBar /></nav>
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
              <button className="bg-slate-300 rounded-3xl p-2 text-slate-900 text-xs leading-3 tracking-tighter">
                Next
              </button>
              <button className="bg-slate-300 rounded-3xl p-2 text-slate-900 text-xs leading-3 tracking-tighter">
                TypeScript
              </button>
              <button className="bg-slate-300 rounded-3xl text-slate-900 p-2 text-xs leading-3 tracking-tighter">
                Tailwind
              </button>
            </div>
          </div>
          <h6 className="text-slate-500 leading-4 tracking-tighter text-xs mb-4 md:text-sm">
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
              <button className="bg-slate-300 rounded-3xl p-2 text-xs leading-3 tracking-tighter">
                React(ts)
              </button>
              <button className="bg-slate-300 rounded-3xl p-2 text-xs leading-3 tracking-tighter">
                EC2
              </button>
              <button className="bg-slate-300 rounded-3xl p-2 text-xs leading-3 tracking-tighter">
                Tailwind
              </button>
            </div>
          </div>
          <h6 className="text-slate-500 leading-4 tracking-tighter text-xs mb-4 md:text-sm">
            Here is a deep-dive breakdown illustration showing why Tailwind CSS
            is a key developer asset for large projects and visually-stunning
            UIs.
          </h6>
        </div>
        <div className="">
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
              <button className="bg-slate-300 leading-3 tracking-tighter rounded-3xl p-2 px-4 text-xs">
                TypeScript
              </button>
              <button className="bg-slate-300 leading-3 tracking-tighter rounded-3xl p-2 px-4 text-xs">
                CI/CD
              </button>
              <button className="bg-slate-300 rounded-3xl leading-3 tracking-tighter p-2 px-4 text-xs">
                Python
              </button>
            </div>
          </div>
          <h6 className="text-slate-500 leading-4 tracking-tighter text-xs md:text-sm mb-4">
            For frontend tooling, Vite can be said to have made create-react-app
            obsolete. Hot Module Replacement and performance make it an asset
            for the front end. To explore more about Vite check out this article
          </h6>
        </div>
      </section>
    </div>
  );
};

export default page;
