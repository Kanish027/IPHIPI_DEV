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
            <div className="slide-content bg-gradient-to-br from-blue-100 to-blue-200 flex items-center lg:px-20 px-6 sm:px-10 h-full rounded-3xl shadow-lg">
              <div className="max-w-md">
                <h2 className="lg:text-4xl text-3xl mb-6 font-bold text-blue-800">
                  3D Audio
                </h2>
                <p className="text-sm lg:text-lg text-blue-700 leading-relaxed">
                  Experience immersive soundscapes with our cutting-edge 3D
                  Audio technology. Dive into a world where sound comes alive,
                  providing unparalleled depth and directionality to your audio
                  experience.
                </p>
                <div className="mt-8">
                  <span className="inline-block bg-blue-500 text-white text-sm px-4 py-2 rounded-full font-semibold">
                    Coming Soon
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="slide">
            <img
              src="https://images.pexels.com/photos/4560171/pexels-photo-4560171.jpeg?auto=compress&cs=tinysrgb&w=4000"
              alt="Person wearing headphones"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="slide">
            <div className="slide-content bg-gradient-to-br from-amber-100 to-amber-200 flex items-center lg:px-20 px-6 sm:px-10 h-full rounded-3xl shadow-lg">
              <div className="max-w-md">
                <h2 className="lg:text-4xl text-3xl mb-6 font-bold text-amber-800">
                  Real-Time AI Bass Boost
                </h2>
                <p className="text-sm lg:text-lg text-amber-700 leading-relaxed">
                  Feel the power of intelligent bass enhancement. Our AI-driven
                  technology dynamically adjusts bass levels in real-time,
                  ensuring rich, deep tones that adapt to your music for an
                  unmatched listening experience.
                </p>
                <div className="mt-8">
                  <span className="inline-block bg-amber-500 text-white text-sm px-4 py-2 rounded-full font-semibold">
                    Launching Soon
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="slide">
            <img
              src="https://images.pexels.com/photos/4050214/pexels-photo-4050214.jpeg?auto=compress&cs=tinysrgb&w=4000"
              alt="Person enjoying music"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon1;
