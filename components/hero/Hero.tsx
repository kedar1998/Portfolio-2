import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="mx-auto h-[80vh] max-w-[1440px] bg-primaryBlack px-5 pt-28 text-lightGray md:h-screen md:px-36 md:pt-48">
      <div className="flex flex-col items-center justify-center">
        {/* ROW-1 */}
        <div className="flex items-center gap-5 xl:items-start">
          <Image
            src="/assets/main.svg"
            height={200}
            width={280}
            alt="Cubes"
            className="h-[300px] w-[120px] sm:w-[150px] md:w-[250px] xl:w-[300px]"
          />
          <h2 className="font-montserrat text-6xl font-bold sm:text-6xl md:text-7xl xl:text-9xl">
            I MAKE
          </h2>
        </div>
        {/* ROW-2 */}
        <div className="-mt-28 flex items-start gap-5 md:-mt-24">
          <h2 className="font-montserrat text-6xl font-bold sm:text-6xl md:text-7xl xl:text-9xl">
            WEBSITES
          </h2>
          <div className="hidden md:block">
            <p className="text-sm">About</p>
            <p className="max-w-xs text-sm">
              I’m a front-end developer and co-founder of Codista, a software
              studio in Vienna. I also write about the web on my blog and
              elsewhere.
            </p>
          </div>
        </div>
        {/* ROW-3 */}
        <div className="mt-20 flex flex-col md:hidden">
          <p>About</p>
          <p className=" text-base">
            I’m a front-end developer and co-founder of Codista, a software
            studio in Vienna. I also write about the web on my blog and
            elsewhere.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
