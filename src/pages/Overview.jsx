import React from "react";
import Landing from "../components/Landing";
import Features from "../components/Features";
import FinalCall from "../components/FinalCall";
import AppDemo from "../components/AppDemo";
import ComingSoon from "../components/ComingSoon";

const Overview = () => {
  return (
    <div>
      <div className="lg:mx-5">
        <Landing />
      </div>
      <Features />
      {/* <AppDemo /> */}
      <div className="py-28">
        <ComingSoon />
      </div>
      <FinalCall />
    </div>
  );
};

export default Overview;
