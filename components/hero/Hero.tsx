"use client";

import Image from "next/image";
import React from "react";
import {
  MouseParallaxContainer,
  MouseParallaxChild,
} from "react-parallax-mouse";

const Hero = () => {
  return (
    <MouseParallaxContainer globalFactorX={0.1} globalFactorY={0.1}>
      <div className="mx-auto  max-w-[1440px] bg-primaryBlack px-5 pt-28 text-lightGray md:h-screen md:px-36 md:pt-48">
        <div className="flex flex-col items-center justify-center">
          {/* ROW-1 */}
          <div className="flex items-center justify-center gap-5 xl:items-start">
            <MouseParallaxChild factorX={0.1} factorY={0.2}>
              <Image
                src="/assets/main.svg"
                height={200}
                width={280}
                alt="Cubes"
                className="-z-50 h-[300px] w-[120px] sm:w-[150px] md:w-[250px] xl:w-[300px]"
              />
            </MouseParallaxChild>
            <h2 className="font-saira text-[83px] font-bold sm:text-7xl md:text-[150px] xl:text-[200px]">
              I MAKE
            </h2>
          </div>
          {/* ROW-2 */}
          <div className="-mt-32 flex items-start gap-5 md:-mt-24">
            <h2 className="z-40 font-saira text-[83px] font-bold sm:text-7xl md:text-[150px] xl:text-[200px]">
              WEBSITES
            </h2>
            <div className="hidden md:block">
              <p className="text-sm">About</p>
              <p className="max-w-xs text-sm text-lightGray">
                I’m a front-end developer and co-founder of Codista, a software
                studio in Vienna. I also write about the web on my blog and
                elsewhere.
              </p>
            </div>
          </div>
          {/* ROW-3 */}
          <div className="mt-20 flex flex-col px-1 md:hidden">
            <p className="mb-1 tracking-widest">ABOUT</p>
            <p className=" text-base leading-6 tracking-wider">
              I’m a front-end developer and co-founder of Codista, a software
              studio in Vienna. I also write about the web on my blog and
              elsewhere.
            </p>
          </div>
        </div>
      </div>
    </MouseParallaxContainer>
  );
};

export default Hero;
