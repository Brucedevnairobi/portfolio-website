import React from "react";
import NavBar from "@/components/NavBar";
import Image from "next/image";
const page = () => {
  return (
    <div>
      <nav className="mt-10">
        <NavBar />
      </nav>
      <div className="bg-red-500 ">
        <h1 className="text-4xl md:text-6xl tracking-tighter leading-6 font-bold  pt-32 text-slate-700">
          Developer as a Service
        </h1>
        <p className="text-lg leading-6 tracking-tighter text-gray-500  my-4 md:w-[800px]">
          Enjoy the versatility of accessing expert developer talent on a
          project basis, without the long-term obligations of permanent hiring.
          My Subscription-Based Developer offering provides scalable and
          adaptable resources tailored to the dynamic requirements of your
          project. <br /> Subscription-Based Development offers a cost-effective
          solution for your project needs, providing you with the expertise you
          need, when you need it.
        </p>
        <div>
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
