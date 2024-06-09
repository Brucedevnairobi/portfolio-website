import React from "react";
import NavBar from "@/components/NavBar";
const page = () => {
  return (
    <div>
       <nav className="mt-10"><NavBar /></nav>
      <h1 className="text-4xl md:text-6xl pt-32 text-slate-700 pl-16">
        Latest <span className="font-bold">Articles</span>
      </h1>
      <section className="px-16 pb-16 md:flex gap-8 sm:pt-4">
        <div className="md:w-80 h-36 border-[1px] hover:cursor-pointer rounded-xl p-4 shadow-lg sm:w-full text-slate-700">
          <h3 className="text-xl font-bold">Select a Plan</h3>
          <p className="text-sm text-slate-700">
            Not sure which plan is right for you? Book a call and I’ll help you
            choose the best plan for your project.
          </p>
        </div>
        <div className="md:w-80 h-36 border-[1px]  hover:cursor-pointer border-teal-100 rounded-xl p-4 shadow-l sm:w-full text-slate-700">
          <h3 className="text-xl font-bold">Onboarding Email</h3>
          <p className="text-sm text-slate-700">
            You will receive a welcome email with all the details you need to
            get started. We’ll also schedule a kick-off call to discuss your
            project.
          </p>
        </div>
        <div className="md:w-80 h-36 border-[1px]  hover:cursor-pointer border-teal-100 rounded-xl p-4 shadow-lg sm:w-full text-slate-700">
          <h3 className="text-xl font-bold">Start Development</h3>
          <p className="text-sm text-slate-700">
            After our chat, I’ll dive into your project. Expect regular updates
            and opportunities to give your input—your feedback is crucial!
          </p>
        </div>
      </section>
    </div>
  );
};

export default page;
