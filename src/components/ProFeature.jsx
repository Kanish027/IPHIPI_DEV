import React from "react";
import AppDemo from "./AppDemo";

const ProFeature = () => {
  return (
    <div className="my-24 justify-center">
      <div className="w-full mb-5 lg:flex gap-5">
        <div className="w-full mb-8 lg:mb-0">
          <img
            src="https://images.pexels.com/photos/9204671/pexels-photo-9204671.jpeg?auto=compress&cs=tinysrgb&w=4000&lazy=load"
            alt=""
            className="w-full rounded-3xl"
          />
        </div>
        <div className="lg:w-2/3  md:p-16 lg:p-0 mb-8 lg:mb-0 w-full rounded-3xl bg-blue-100">
          <h1 className="text-center px-8 text-2xl mt-20 mb-10 font-bold">
            AI ENC Pro
          </h1>
          <ul className="px-10 list-disc mb-20">
            <li className="mb-3">
              Provides superior speech clarity using advanced AI models.
            </li>
            <li className="mb-3">
              Offers enhanced call quality in extremely noisy environments.
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full lg:flex gap-5 mb-5">
        <div className="border lg:hidden mb-8 lg:mb-0 w-full rounded-3xl">
          <img
            src="https://images.pexels.com/photos/5928312/pexels-photo-5928312.jpeg?auto=compress&cs=tinysrgb&w=4000"
            alt=""
            className="w-full rounded-3xl"
          />
        </div>
        <div className="border  md:p-16 lg:p-0 mb-8 lg:mb-0 lg:w-2/3 w-full bg-blue-100 rounded-3xl">
          <h1 className="text-center px-8 text-2xl mt-20 mb-10 font-bold">
            Handsfree with Voice Print
          </h1>
          <ul className="px-10 list-disc mb-20">
            <li className="mb-3">
              Recognizes and verifies the user’s voice for personalized
              responses and increased security.
            </li>
            <li className="mb-3">
              Allows for a more tailored hands-free experience.
            </li>
          </ul>
        </div>
        <div className="border hidden lg:block mb-8 lg:mb-0 w-full rounded-3xl">
          <img
            src="https://images.pexels.com/photos/5928312/pexels-photo-5928312.jpeg?auto=compress&cs=tinysrgb&w=4000"
            alt=""
            className="w-full rounded-3xl"
          />
        </div>
      </div>
    </div>
  );
};

export default ProFeature;
