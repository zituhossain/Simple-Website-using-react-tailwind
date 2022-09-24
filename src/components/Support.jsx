import React from "react";
import { PhoneIcon, ArrowSmallRightIcon } from "@heroicons/react/24/outline";
import { CpuChipIcon, UserGroupIcon } from "@heroicons/react/24/solid";

import supportImg from "../assets/support.jpg";

const Support = () => {
  return (
    <div name='support' className="w-full mt-24">
      <div className="w-full h-[700px] bg-gray-900/90 absolute">
        <img
          className="w-full h-full object-cover mix-blend-overlay"
          src={supportImg}
          alt="/"
        />
      </div>
      <div className="max-w-[1240px] mx-auto text-white relative">
        <div className="px-4 py-12">
          <h2 className="text-3xl pt-8 text-slate-300 text-center uppercase">
            Support
          </h2>
          <h3 className="text-5xl font-bold py-6 text-center">
            Finding the right team
          </h3>
          <p className="text-3xl text-slate-300 py-4 text-center">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos,
            molestias porro? Ad amet nesciunt voluptatibus.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black">
          <div className="bg-white rounded-xl shadow-2xl">
            <div className="p-8">
              <PhoneIcon className="w-14 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]" />
              <h3 className="text-2xl font-bold my-6">Sales</h3>
              <p className="text-gray-600 text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
                magnam adipisci voluptates consectetur vero praesentium?
              </p>
            </div>
            <div className="bg-slate-200 pl-8 py-4">
              <p className="flex items-center text-indigo-600">
                Contact Us <ArrowSmallRightIcon className="w-4" />{" "}
              </p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-2xl">
            <div className="p-8">
              <UserGroupIcon className="w-14 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]" />
              <h3 className="text-2xl font-bold my-6">Technical Support</h3>
              <p className="text-gray-600 text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
                magnam adipisci voluptates consectetur vero praesentium?
              </p>
            </div>
            <div className="bg-slate-200 pl-8 py-4">
              <p className="flex items-center text-indigo-600">
                Contact Us <ArrowSmallRightIcon className="w-4" />{" "}
              </p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-2xl">
            <div className="p-8">
              <CpuChipIcon className="w-14 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]" />
              <h3 className="text-2xl font-bold my-6">Media Inquiries</h3>
              <p className="text-gray-600 text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
                magnam adipisci voluptates consectetur vero praesentium?
              </p>
            </div>
            <div className="bg-slate-200 pl-8 py-4">
              <p className="flex items-center text-indigo-600">
                Contact Us <ArrowSmallRightIcon className="w-4" />{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
