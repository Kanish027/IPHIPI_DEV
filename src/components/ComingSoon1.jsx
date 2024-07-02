import React from "react";
import "./styles.css";

const ComingSoon1 = () => {
  return (
    <div className="coming-soon-container">
      <div className="heading-container">
        <h1 className="heading mb-10 lg:mb-20">
          Introducing our new TWS Upcoming Features
        </h1>
      </div>
      <div className="slider-container">
        <div className="slider">
          <div className="slide">
            <div className="slide-content bg-slate-200 flex items-center lg:px-20 px-4 sm:px-6 h-full rounded-3xl">
              <div>
                <h2
                  className="lg:text-3xl mb-4 font-bold"
                  style={{ color: "#3c4043" }}
                >
                  3D Audio
                </h2>
                <p className="text-sm lg:text-md" style={{ color: "#3c4043" }}>
                  Creates an immersive audio experience by adding spatial
                  effects. Provides a sense of depth and direction in the
                  soundstage.
                </p>
              </div>
            </div>
          </div>
          <div className="slide">
            <img
              src="https://images.pexels.com/photos/4560171/pexels-photo-4560171.jpeg?auto=compress&cs=tinysrgb&w=4000"
              alt=""
            />
          </div>
          <div className="slide">
            <div
              className="slide-content flex items-center lg:px-20 px-4 sm:px-6 h-full rounded-3xl"
              style={{ backgroundColor: "#F0E8DF" }}
            >
              <div>
                <h2
                  className="lg:text-3xl mb-4 font-bold"
                  style={{ color: "#3c4043" }}
                >
                  Real-Time AI Bass Boost
                </h2>
                <p className="text-sm lg:text-md" style={{ color: "#3c4043" }}>
                  Dynamically enhances bass frequencies in real-time based on
                  the audio content. Delivers a powerful and enriched listening
                  experience.
                </p>
              </div>
            </div>
          </div>
          <div className="slide">
            <img
              src="https://images.pexels.com/photos/4050214/pexels-photo-4050214.jpeg?auto=compress&cs=tinysrgb&w=4000"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon1;
