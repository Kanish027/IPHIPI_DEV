import React, { useState } from "react";
import BasicFeature from "./BasicFeature";
import ProFeature from "./ProFeature";

const Features = () => {
  const [tab, setTab] = useState("basic");

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:my-28 lg:px-8">
      <div className="flex justify-center items-start">
        <h1
          className="max-w-2xl text-center"
          style={{ color: "#3c4043", fontWeight: "600", fontSize: "32px" }}
        >
          With immersive audio, clearer calls, and more, they're the perfect TWS
        </h1>
      </div>

      <div className="flex my-20">
        <div
          onClick={() => setTab("basic")}
          className={`w-full flex justify-center cursor-pointer ${
            tab === "basic" && "lg:bg-blue-100"
          } py-2 rounded-lg`}
        >
          <h1
            className={`max-w-2xl text-center ${
              tab === "basic" ? "text-blue-500" : "text-gray-700"
            }`}
            style={{ fontWeight: "600", fontSize: "24px" }}
          >
            AI Basics
          </h1>
        </div>
        <div
          onClick={() => setTab("pro")}
          className={`w-full flex justify-center cursor-pointer ${
            tab === "pro" && "lg:bg-blue-100"
          } py-2 rounded-lg`}
        >
          <h1
            className={`max-w-2xl text-center ${
              tab === "pro" ? "text-blue-500" : "text-gray-700"
            }`}
            style={{ fontWeight: "600", fontSize: "24px" }}
          >
            AI Pro
          </h1>
        </div>
      </div>

      {tab === "basic" && <BasicFeature />}
      {tab === "pro" && <ProFeature />}
    </div>
  );
};

export default Features;
