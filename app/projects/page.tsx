import React from "react";
import NavBar from "@/components/NavBar";
import Image from "next/image";

const page = () => {
  return (
    <div className="w-full mx-auto px-4 pb-16">
      <nav className="mt-10">
        <NavBar />
      </nav>
      <h1 className="text-4xl md:text-6xl mt-32 text-slate-700 mx-12 leading-6 tracking-tighter">
        Latest <span className="font-bold">Projects</span>
      </h1>
      <p className="mx-12 text-xs md:text-sm text-slate-500 leading-6 tracking-tighter">
        I`m always working on something. Here are some of my latest projects.
      </p>
      <section className="mx-12 mt-8 gap-12 sm:grid grid-cols-2 md:grid-cols-3 md:gap-16  mb-20">
        <div>
          <div className="cursor-pointer rounded-xl shadow-lg">
            <Image
              src="/assets/images/chat-with-log.png"
              width={548}
              height={300}
              alt="chatwithlogimage"
              className="rounded-xl"
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
                TailwindCSS
              </button>
            </div>
          </div>
          <h6 className="text-slate-500 leading-4 tracking-tighter text-xs mb-4 md:text-sm">
          Code queries meet AI wizardry: This innovative platform transforms the way
            developers tackle challenges, offering instant, AI-powered solutions
            at any hour. By seamlessly blending the comprehensive knowledge base
            of a traditional coding forum with cutting-edge AI technology, it
            provides personalized, context-aware answers that evolve with each
            query.
          </h6>
        </div>
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
             It addresses the need for increased civic engagement and transparent urban planning. 
             Features include; with easy-to-use voting mechanism,
             accessibility features for users with disabilities. Check READme.md.
          </h6>
        </div>
        <div>
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
        </div>
        <div>
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
                TypeScript
              </button>
              <button className="bg-slate-300 rounded-3xl p-2 px-4 text-xs leading-3 tracking-tighter">
                CI/CD
              </button>
              <button className="bg-slate-300 rounded-3xl p-2 px-4 text-xs leading-3 tracking-tighter ">
                Python
              </button>
            </div>
          </div>
          <h6 className="text-slate-500 leading-4 tracking-tighter text-xs mb-4 md:text-sm">
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
