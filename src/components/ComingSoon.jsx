import React from "react";
import "./styles.css";

const ComingSoon = () => {
  return (
    <div className="coming-soon-container">
      <div className="heading-container">
        <h1 className="heading mb-10 lg:mb-20">
          Introducing our new TWS Upcoming Features
        </h1>
      </div>
      <div className="slider-container">
        <div className="slider">
          <div className="slide  hidden lg:block">
            <div className="slide-content flex items-center lg:px-20 px-7 h-full bg-blue-100 rounded-3xl">
              <div>
                <h2
                  className="lg:text-3xl mb-4 font-bold"
                  style={{ color: "#3c4043" }}
                >
                  3D Audio
                </h2>
                <p className="text-sm lg:text-md" style={{ color: "#3c4043" }}>
                  Creates an immersive audio experience by adding spatial
                  effects.Provides a sense of depth and direction in the
                  soundstage.
                </p>
              </div>
            </div>
          </div>
          <div className="slide  hidden lg:block">
            <img
              src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-40-bhm-202401?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1703005205962"
              alt=""
            />
          </div>
          <div className="slide  hidden lg:block">
            <div className="slide-content flex items-center lg:px-20 px-7 h-full bg-blue-100 rounded-3xl">
              <div>
                <h2
                  className="lg:text-3xl mb-4 font-bold"
                  style={{ color: "#3c4043" }}
                >
                  Real-Time AI Bass Boost
                </h2>
                <p className="text-sm lg:text-md" style={{ color: "#3c4043" }}>
                  Dynamically enhances bass frequencies in real-time based on
                  the audio content.Delivers a powerful and enriched listening
                  experience.
                </p>
              </div>
            </div>
          </div>
          <div className="slide  hidden lg:block">
            <img
              src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-40-bhm-202401?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1703005205962"
              alt=""
            />
          </div>
          <div className="slide">
            {/* Adjust padding for different screen sizes */}
            <div className="slide-content bg-slate-200 flex items-center lg:px-20 px-4 sm:px-6 h-full rounded-3xl">
              <div>
                <h2
                  className="lg:text-3xl mb-4 font-bold"
                  style={{ color: "#3c4043" }}
                >
                  Two-Way Conversation Sensor
                </h2>
                <p className="text-sm lg:text-md" style={{ color: "#3c4043" }}>
                  Detects conversation when the user starts speaking and when
                  someone calls the user with a registered name. Pauses music
                  and switches on transparency mode with vocal boost to ensure
                  the user never misses important interactions.
                </p>
              </div>
            </div>
          </div>
          <div className="slide">
            <img
              src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-40-bhm-202401?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1703005205962"
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
                  AI Dynamic Equalizer
                </h2>
                <p className="text-sm lg:text-md" style={{ color: "#3c4043" }}>
                  Adjusts audio EQ in real-time based on the genre. Optimizes
                  sound quality for different types of content. Allows user to
                  tweak EQ settings for more{" "}
                  <span className="text-xs lg:text-sm">personalized</span>{" "}
                  experience
                </p>
              </div>
            </div>
          </div>
          <div className="slide hidden lg:block">
            <img
              src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-40-veteran-202309?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1700069399720"
              alt=""
            />
          </div>
          <div className="slide hidden lg:block">
            <div
              className="slide-content flex items-center lg:px-20 px-7 h-full rounded-3xl"
              style={{ backgroundColor: "#DAE0E2" }}
            >
              <div>
                <h2
                  className="lg:text-3xl mb-4 font-bold"
                  style={{ color: "#3c4043" }}
                >
                  AI Spatial Audio
                </h2>
                <p className="text-sm lg:text-md" style={{ color: "#3c4043" }}>
                  Utilizes HRTF-based algorithms to create a 3D audio effect.
                  Provides an immersive experience for movies and music recorded
                  in spatial audio formats.
                </p>
              </div>
            </div>
          </div>
          <div className="slide">
            <img
              src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-40-bhm-202401?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1703005205962"
              alt=""
            />
          </div>
          <div className="slide hidden lg:block">
            <div
              className="slide-content flex items-center lg:px-20 px-7 h-full rounded-3xl"
              style={{ background: "#FAC7B4" }}
            >
              <div>
                <h2
                  className="lg:text-3xl mb-4 font-bold"
                  style={{ color: "#3c4043" }}
                >
                  AI ANC (Active Noise Cancellation)
                </h2>
                <p className="text-sm lg:text-md" style={{ color: "#3c4043" }}>
                  Employs AI to adaptively cancel out ambient noise. Offers
                  superior noise reduction by adjusting in real-time to
                  different environments.
                </p>
              </div>
            </div>
          </div>
          <div className="slide hidden lg:block">
            <img
              src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-40-bhm-202401?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1703005205962"
              alt=""
            />
          </div>
          <div className="slide hidden lg:block">
            <div className="slide-content flex items-center lg:px-20 px-7 h-full rounded-3xl bg-emerald-100">
              <div>
                <h2
                  className="lg:text-3xl mb-4 font-bold"
                  style={{ color: "#3c4043" }}
                >
                  AI Advanced Transparency
                </h2>
                <p className="text-sm lg:text-md" style={{ color: "#3c4043" }}>
                  Enhances transparency mode by using AI to selectively allow
                  important sounds through.Ensures user safety and awareness
                  while maintaining audio immersion.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
