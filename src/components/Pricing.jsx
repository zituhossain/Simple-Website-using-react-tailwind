import React from "react";
import { CheckIcon } from "@heroicons/react/24/solid";

const Pricing = () => {
  return (
    <div name='pricing' className="w-full text-white my-24">
      <div className="w-full h-[800px] absolute bg-slate-900 mix-blend-overlay"></div>
      <div className="max-w-[1240px] mx-auto py-12">
        <div className="text-center text-slate-300 py-8">
          <h2 className="text-3xl uppercase">Pricing</h2>
          <h3 className="text-5xl text-white font-bold py-8">
            The right price for your research
          </h3>
          <p className="text-3xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
            deserunt.
          </p>
        </div>

        <div className="grid md:grid-cols-2">
          <div className="bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative">
            <span className="text-sm uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl">
              Standard
            </span>
            <div>
              <p className="text-6xl font-bold py-4 flex">
                $49{" "}
                <span className="text-xl text-slate-500 flex flex-col justify-end">
                  /mo
                </span>
              </p>
            </div>
            <p className="text-2xl text-slate-500 py-4">
              Lorem ipsum dolor sit, amet consectetur adipisicing.
            </p>
            <div className="text-2xl">
              <p className="flex py-3">
                <CheckIcon className="w-8 mr-5 text-green-600" />
                Lorem, ipsum dolor.
              </p>
              <p className="flex py-3">
                <CheckIcon className="w-8 mr-5 text-green-600" />
                Lorem, ipsum dolor.
              </p>
              <p className="flex py-3">
                <CheckIcon className="w-8 mr-5 text-green-600" />
                Lorem, ipsum dolor.
              </p>
              <p className="flex py-3">
                <CheckIcon className="w-8 mr-5 text-green-600" />
                Lorem, ipsum dolor.
              </p>
              <p className="flex py-3">
                <CheckIcon className="w-8 mr-5 text-green-600" />
                Lorem, ipsum dolor.
              </p>
              <button className="w-full py-3 my-2">Get Started</button>
            </div>
          </div>
          <div className="bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative">
            <span className="text-sm uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl">
              Premium
            </span>
            <div>
              <p className="text-6xl font-bold py-4 flex">
                $99{" "}
                <span className="text-xl text-slate-500 flex flex-col justify-end">
                  /mo
                </span>
              </p>
            </div>
            <p className="text-2xl text-slate-500 py-4">
              Lorem ipsum dolor sit, amet consectetur adipisicing.
            </p>
            <div className="text-2xl">
              <p className="flex py-3">
                <CheckIcon className="w-8 mr-5 text-green-600" />
                Lorem, ipsum dolor.
              </p>
              <p className="flex py-3">
                <CheckIcon className="w-8 mr-5 text-green-600" />
                Lorem, ipsum dolor.
              </p>
              <p className="flex py-3">
                <CheckIcon className="w-8 mr-5 text-green-600" />
                Lorem, ipsum dolor.
              </p>
              <p className="flex py-3">
                <CheckIcon className="w-8 mr-5 text-green-600" />
                Lorem, ipsum dolor.
              </p>
              <p className="flex py-3">
                <CheckIcon className="w-8 mr-5 text-green-600" />
                Lorem, ipsum dolor.
              </p>
              <button className="w-full py-3 my-2">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
