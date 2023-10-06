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
            <div className="mt-40 flex items-center justify-center md:mt-0 md:h-screen">
              <div className="relative flex flex-row items-center max-lg:w-full lg:flex-col lg:items-end">
                {/* Box-01 */}
                <div className="flex items-center gap-5">
                  <MouseParallaxChild factorX={0.2} factorY={0.2}>
                    <Image
                      src="/assets/main.svg"
                      alt="Main SVG"
                      height={300}
                      width={300}
                      className="w-full"
                    />
                  </MouseParallaxChild>
                  <h1 className="xs:text-5xl z-40 hidden text-4xl font-bold sm:text-6xl md:text-5xl lg:flex lg:text-7xl xl:text-8xl">
                    CRAFTING
                  </h1>
                </div>

                {/* Box-02 */}
                <div className="xs:-mt-28 xs:text-5xl z-40 -mt-16 hidden flex-col items-end gap-1 bg-transparent text-4xl font-bold sm:-mt-28 sm:text-6xl md:-mt-24 md:items-center md:gap-5 md:text-5xl lg:-mt-24 lg:flex lg:flex-row lg:text-7xl xl:-mt-20 xl:text-8xl">
                  <h1>ONLINE</h1>
                  <h1>EXPERIENCES</h1>
                </div>

                {/* Box-03 */}
                <div className=" absolute right-0 flex flex-col items-end px-6 text-4xl font-bold sm:text-5xl md:text-6xl lg:hidden lg:px-0">
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
