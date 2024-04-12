"use client";

import gsap from "gsap";
import React, { useEffect, useState, useRef } from "react";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// import ScrollMagic from "scrollmagic";

export const Page1 = () => {
  let [seek, updateSeek] = useState(0);
  const svgRef = useRef();
  const circleRef = useRef();
  const pathRef = useRef();
  const [arrayPath, updatePath] = useState([[7.49994, 1]]);
  const [pathCubic, updateCubicPath] = useState("");

  useEffect(() => {
    gsap.registerPlugin(MotionPathPlugin);
    gsap.registerPlugin(ScrollTrigger);
    if (svgRef?.current && circleRef?.current && pathRef?.current) {
      updatePath(circleRef.current.getAttribute("d"));

      let tl = new gsap.timeline({
        scrollTrigger: {
          trigger: "#circle",
          start: "5% 20%",
          end: "bottom top",
          scrub: true,
          ease: "power1.inOut",
          duration: 100,
          markers: true,
        },
      });
      tl.to("#flower", {
        motionPath: {
          path: "#path",
          ease: "power1.inOut",
        },
      });
    }
  }, []);

  return (
    <main className="w-full h-[400dvh] bg-[#FFC266] flex justify-center items-center">
      <div
        id="animation"
        style={{ boxShadow: "0 0 10px 1px gray" }}
        className="h-[90%] w-[90%] overflow-scroll rounded-md p-4 bg-slate-100"
      >
        {/* h-[85%] */}
        <div className=" h-[80vh] bg-transparent -mt-[2px] ">
          <div className=" container1 wrapper h-full">
            <div id="circle" className="block relative block1 h-full ">
              <div
                id="flower"
                ref={circleRef}
                className="leaf leaf1 size-4 absolute top-0 left-0 bg-blue-800 rounded-full"
              ></div>
              <svg
                ref={svgRef}
                height="100%"
                width="100%"
                // dataName="Layer 1"
                className="svg svg1"
              >
                <title>path-1</title>
                <path
                  ref={pathRef}
                  id="path"
                  d="M7.49994 1C7.49994 1 0.979334 76.5085 0.999943 125C1.02039 173.102 6.93811 199.902 7.49994 248C8.22125 309.751 0.925594 344.245 0.999943 406C1.07218 465.999 7.27414 499.501 7.49994 559.5C7.74777 625.352 0.914359 662.148 0.999943 728C1.08274 791.706 7.5475 827.294 7.49994 891C7.45326 953.535 0.999943 1051 0.999943 1051"
                  // style="fill: none"
                  fill="none"
                  stroke="pink"
                  className="path path1"
                  strokeDasharray="5, 10"
                ></path>
              </svg>

              {/* <div className="container container1"></div> */}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
