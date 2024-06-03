import React from "react";
import Image from 'next/image'

const page = () => {
  return (
    <div className="w-full mx-auto px-4 pb-16">
       <h1 className="text-4xl md:text-6xl pt-32 text-slate-700 pl-16">
        Latest <span className="font-bold">Projects</span>
      </h1>
      <p className="pl-16 text-slate-500">I`m always working on something. Here are some of my latest projects;</p>
      <section className="px-16 pt-5 gap-2 sm:grid sm:grid-cols-2 md:grid-cols-3 md:gap-16">
        <div className="cursor-pointer rounded-xl shadow-lg">
          <Image
            src="/chat-with-log.png"
            width={100}
            height={100}
            alt="chatwithlogimage"
            className=" sm:w-[300px] md:w-[360px] rounded-xl"
          />
        </div>
        <div className="cursor-pointer rounded-xl shadow-lg">
          <Image
            src="/aws-amplify.png"
            width={100}
            height={100}
            alt="awsamplifyimage"
            className=" sm:w-[300px] md:w-[360px] rounded-xl"
          />
        </div>
        <div className="cursor-pointer rounded-xl shadow-lg">
          <Image
            src="/invest.png"
            width={100}
            height={100}
            alt="investimage"
            className=" sm:w-[300px] md:w-[360px] rounded-xl"
          />
        </div>
        <div className="cursor-pointer rounded-xl shadow-lg">
          <Image
            src="/crypto-trading.png"
            width={100}
            height={100}
            alt="cryptotradingimage"
            className=" sm:w-[300px] md:w-[360px] rounded-xl"
          />
        </div>
      </section>
    </div>
  );
};

export default page;
