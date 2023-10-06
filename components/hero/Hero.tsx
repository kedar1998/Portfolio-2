"use client";

import Image from "next/image";
import React from "react";
import {
  MouseParallaxContainer,
  MouseParallaxChild,
} from "react-parallax-mouse";

const Hero = () => {
  return (
    <MouseParallaxContainer globalFactorX={0.2} globalFactorY={0.3}>
      <div>
        <div className="mx-auto max-w-[1440px]">
          <div className="px-6 text-lightGray md:px-36">
            <div className=" mt-32 flex items-center justify-center md:mt-0 md:h-screen">
              <div className="relative my-28 flex flex-row items-center gap-5 max-lg:w-full md:mt-0 lg:flex-col lg:items-end">
                {/* Box-01 */}
                <div className="flex items-center gap-5 md:px-20">
                  <MouseParallaxChild factorX={0.2} factorY={0.2}>
                    <Image
                      src="/assets/main.svg"
                      alt="Main SVG"
                      height={300}
                      width={300}
                      className=" w-44 md:w-full"
                    />
                  </MouseParallaxChild>
                  <h1 className="xs:text-5xl z-40 hidden text-4xl font-bold sm:text-6xl md:text-7xl lg:flex lg:text-8xl xl:text-9xl">
                    CRAFTING
                  </h1>
                </div>

                {/* Box-02 */}
                <div className="xs:-mt-28 xs:text-5xl z-40 -mt-16 hidden flex-col items-end gap-1 bg-transparent text-4xl font-bold sm:-mt-28 sm:text-6xl md:-mt-24 md:items-center md:gap-5 md:px-20 md:text-7xl lg:-mt-24 lg:flex lg:flex-row lg:text-8xl xl:-mt-20 xl:text-9xl">
                  <h1>ONLINE</h1>
                  <h1>EXPERIENCES</h1>
                </div>

                {/* Box-03 */}
                <div className=" xs:text-5xl absolute right-0 flex flex-col items-end gap-3 pl-6 text-5xl font-bold sm:text-6xl md:text-7xl lg:hidden lg:px-0">
                  <p>CRAFTING</p>
                  <p>ONLINE</p>
                  <p>EXPERIENCES</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MouseParallaxContainer>
  );
};

export default Hero;
