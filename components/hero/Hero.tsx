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
      <div className="mx-auto  max-w-[1440px] bg-primaryBlack px-5 text-lightGray md:h-screen md:px-36 ">
        <div className="flex h-full flex-col items-center justify-center">
          <div className="flex flex-col items-end justify-end">
            {/* ROW-1 */}
            <div className="flex items-center justify-center gap-5 xl:items-start">
              <MouseParallaxChild factorX={0.1} factorY={0.2}>
                <Image
                  src="/assets/main.svg"
                  height={200}
                  width={280}
                  alt="Cubes"
                  className="-z-50 h-[300px] w-[120px] md:w-[300px]  xl:w-[300px]"
                />
              </MouseParallaxChild>
              <h2 className="font-saira text-[83px] font-extrabold sm:ml-10 md:text-[120px]  lg:text-[140px]  xl:text-[158px]">
                CRAFTING
              </h2>
            </div>
            {/* ROW-2 */}
            <div className=" flex items-start gap-5 md:-mt-16 xl:-mt-28">
              <h2 className="z-40 font-saira text-[83px] font-bold md:text-[120px] lg:text-[140px] xl:text-[158px]">
                ONLINE EXPERIENCES
              </h2>
              {/* <div className="hidden md:mt-8 md:block">
              <p className=" mb-2 text-sm tracking-widest">ABOUT</p>
              <p className="max-w-xs text-sm text-lightGray">
                I’m a front-end developer and co-founder of Codista, a software
                studio in Vienna. I also write about the web on my blog and
                elsewhere.
              </p>
            </div> */}
            </div>
          </div>
          {/* ROW-3 */}
          {/* <div className="mt-10 flex flex-col px-1 md:hidden">
            <p className="mb-2 text-sm tracking-widest">ABOUT</p>
            <p className=" text-sm leading-5 tracking-wider">
              I’m a front-end developer and co-founder of Codista, a software
              studio in Vienna. I also write about the web on my blog and
              elsewhere.
            </p>
          </div> */}
        </div>
      </div>
    </MouseParallaxContainer>
  );
};

export default Hero;
