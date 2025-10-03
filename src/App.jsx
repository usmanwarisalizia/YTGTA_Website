import React, { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";

function App() {
  const [showContent, setShowContent] = useState(false);

  // Intro Animation
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(".vi-mask-group", {
      rotate: 10,
      duration: 2,
      ease: "Power4.easeInOut",
      transformOrigin: "50% 50%",
    }).to(".vi-mask-group", {
      scale: 10,
      duration: 2,
      delay: -1.8,
      ease: "Expo.easeInOut",
      transformOrigin: "50% 50%",
      opacity: 0,
      onUpdate: function () {
        if (this.progress() >= 0.9) {
          document.querySelector(".svg").remove();
          setShowContent(true);
          this.kill();
        }
      },
    });
  });

  // Landing Animation
  useGSAP(() => {
    if (!showContent) return;

    gsap.to(".main", {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: "-1",
      ease: "Expo.easeInOut",
    });

    gsap.to(".sky", {
      scale: 1.1,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

    gsap.to(".bg", {
      scale: 1.1,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

    gsap.to(".character", {
      scale: 1.4,
      x: "-50%",
      bottom: "-25%",
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

    gsap.to(".text", {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

    const main = document.querySelector(".main");

    main?.addEventListener("mousemove", function (e) {
      const xMove = (e.clientX / window.innerWidth - 0.5) * 40;
      gsap.to(".main .text", {
        x: `${xMove * 0.4}%`,
      });
      gsap.to(".sky", {
        x: xMove,
      });
      gsap.to(".bg", {
        x: xMove * 1.7,
      });
    });
  }, [showContent]);

  return (
    <>
      {/* Intro Mask */}
      <div className="svg flex items-center justify-center fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-black">
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="250"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                >
                  VI
                </text>
              </g>
            </mask>
          </defs>
          <image
            href="./bg.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
      </div>

      {/* Main Content */}
      {showContent && (
        <div className="main w-full rotate-[-10deg] scale-[1.5] sm:scale-[1.7]">
          <div className="landing overflow-hidden relative w-full h-screen bg-black">
            {/* Navbar */}
            <div className="navbar absolute top-0 left-0 z-[10] w-full py-6 sm:py-10 px-6 sm:px-10">
              <div className="logo flex gap-4 sm:gap-7">
                <div className="lines flex flex-col gap-[4px] sm:gap-[5px]">
                  <div className="line w-10 sm:w-15 h-1.5 sm:h-2 bg-white"></div>
                  <div className="line w-6 sm:w-8 h-1.5 sm:h-2 bg-white"></div>
                  <div className="line w-4 sm:w-5 h-1.5 sm:h-2 bg-white"></div>
                </div>
                <h3 className="text-2xl sm:text-4xl -mt-1 sm:-mt-[8px] leading-none text-white">
                  Rockstar
                </h3>
              </div>
            </div>

            {/* Images + Title Text */}
            <div className="imagesdiv relative overflow-hidden w-full h-screen">
              <img
                className="absolute sky scale-[1.3] sm:scale-[1.5] rotate-[-15deg] sm:rotate-[-20deg] top-0 left-0 w-full h-full object-cover"
                src="./sky.png"
                alt=""
              />
              <img
                className="absolute scale-[1.4] sm:scale-[1.8] rotate-[-2deg] sm:rotate-[-3deg] bg top-0 left-0 w-full h-full object-cover"
                src="../public/backgroundbg.png"
                alt=""
              />
              <div className="text text-white flex flex-col gap-2 sm:gap-3 absolute top-16 sm:top-20 left-1/2 -translate-x-1/2 scale-[1.2] sm:scale-[1.4] rotate-[-8deg] sm:rotate-[-10deg]">
                <h1 className="text-[4rem] sm:text-[8rem] md:text-[10rem] lg:text-[12rem] leading-none -ml-10 sm:-ml-40">
                  grand
                </h1>
                <h1 className="text-[4rem] sm:text-[8rem] md:text-[10rem] lg:text-[12rem] leading-none ml-8 sm:ml-20">
                  theft
                </h1>
                <h1 className="text-[4rem] sm:text-[8rem] md:text-[10rem] lg:text-[12rem] leading-none -ml-10 sm:-ml-40">
                  auto
                </h1>
              </div>
              <img
                className="absolute character -bottom-[120%] sm:-bottom-[150%] left-1/2 -translate-x-1/2 scale-[2] sm:scale-[3] rotate-[-15deg] sm:rotate-[-20deg]"
                src="../public/characterbg23.png"
                alt=""
              />
            </div>

            {/* Bottom Bar */}
            <div className="btmbar text-white absolute bottom-0 left-0 w-full py-10 px-6 sm:px-10 bg-gradient-to-t from-black to-transparent">
              <div className="flex gap-3 sm:gap-4 items-center">
                <i className="text-2xl sm:text-4xl ri-arrow-down-line"></i>
                <h3 className="text-base sm:text-xl font-[Helvetica_Now_Display]">
                  Scroll Down
                </h3>
              </div>
              <img
                className="absolute h-[40px] sm:h-[55px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                src="./ps5.png"
                alt=""
              />
            </div>
          </div>

          {/* Second Section */}
          <div className="w-full min-h-screen flex flex-col md:flex-row items-center justify-center bg-black px-6 sm:px-12">
            <div className="cntnr flex flex-col md:flex-row text-white w-full h-auto md:h-[80%] gap-10 md:gap-0">
              {/* Left Image */}
              <div className="limg relative w-full md:w-1/2 h-64 md:h-full flex items-center justify-center">
                <img
                  className="scale-[1.1] sm:scale-[1.3] max-h-[300px] md:max-h-none"
                  src="./imag.png"
                  alt=""
                />
              </div>
              {/* Right Text */}
              <div className="rg w-full md:w-[40%] py-10 md:py-30">
                <h1 className="text-4xl sm:text-6xl md:text-8xl">Still Running,</h1>
                <h1 className="text-4xl sm:text-6xl md:text-8xl">Not Hunting</h1>
                <p className="mt-6 sm:mt-10 text-base sm:text-lg md:text-xl font-[Helvetica_Now_Display]">
                  Ils incarnent la dureté de deux hors-la-loi qui refusent de ralentir.
                  Chaque braquage, chaque coup de feu, rappelle qu’ils sont faits pour survivre aux prédateurs de la ville.
                  Ils ne chassent pas la gloire — ils courent pour la liberté, le pouvoir et la survie.
                  Dans ce monde, le jeu ne s’arrête jamais, et eux non plus.
                </p>
                <p className="mt-3 text-base sm:text-lg md:text-xl font-[Helvetica_Now_Display]">
                  Ils incarnent la dureté de deux hors-la-loi qui refusent de ralentir.
                  Chaque braquage, chaque coup de feu, rappelle qu’ils sont faits pour survivre aux prédateurs de la ville.
                  Ils ne chassent pas la gloire — ils courent pour la liberté, le pouvoir et la survie.
                  Dans ce monde, le jeu ne s’arrête jamais, et eux non plus.
                </p>
                <button className="bg-[#995c92] px-6 sm:px-10 py-4 sm:py-6 text-black mt-8 sm:mt-10 text-xl sm:text-2xl md:text-4xl">
                  Download Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
