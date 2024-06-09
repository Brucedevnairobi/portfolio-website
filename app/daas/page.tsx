import React from "react";
import NavBar from "@/components/NavBar";
const page = () => {
  return (
    <div>
       <nav className="mt-10"><NavBar /></nav>
      <h1 className="text-6xl font-bold text-center pt-32 text-slate-700">
        Developer as a Service
      </h1>
      <p className="text-lg text-gray-500 text-center py-4 md:w-[800px] mx-auto">
        Enjoy the versatility of accessing expert developer talent on a project
        basis, without the long-term obligations of permanent hiring. My Subscription-Based Developer
        offering provides scalable and adaptable resources tailored to the
        dynamic requirements of your project. <br /> Subscription-Based Development
        offers a cost-effective solution for your project needs, providing you
        with the expertise you need, when you need it.
      </p>
    </div>
  );
};

export default page;
