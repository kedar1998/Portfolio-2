/* eslint-disable tailwindcss/enforces-shorthand */
import Image from "next/image";
import React from "react";

const Project = () => {
  return (
    <div className="mt-10 bg-primaryBlack pt-20 text-lightGray md:px-36">
      <div className="mx-auto max-w-[1440px] pb-6">
        <div className="flex items-end md:justify-around">
          <h1 className="px-6 font-saira text-5xl font-bold md:px-0 md:text-8xl">
            MY PROJECTS
          </h1>
          <div className="hidden items-center gap-3 text-sm md:flex">
            <p className="text-sm tracking-widest">SEE EXPERIMENT PROJECTS</p>
            <Image src="/assets/arrow.svg" alt="arrow" width={20} height={20} />
          </div>
        </div>
      </div>

      <div className="w-full border-t-[1px] border-darkGray pl-0 md:mx-auto md:max-w-4xl md:border-b-[1px] lg:pl-36">
        {/* Project-01 */}
        <div className=" flex flex-col items-stretch justify-end md:flex-row">
          {/* Image */}
          <div className="w-full border-darkGray p-5 md:w-1/2 md:border-x-[1px] md:border-b-[1px]">
            <Image
              src="/assets/proj.svg"
              alt="project image"
              width={350}
              height={350}
              className="w-full pt-5 md:pt-0"
            />
          </div>

          {/* Content */}
          <div className="flex w-full flex-col items-stretch justify-between border-b-[1px] border-darkGray p-5 md:w-1/2">
            <div>
              <h3 className="text-sm tracking-widest">WEB DEVELOPMENT</h3>
              <h1 className="py-3 text-3xl font-bold tracking-wider">
                Altraid
              </h1>
              <p className="w-full pb-8 text-sm tracking-wider md:max-w-xs">
                A ride hailing and car rentals mobile application which allow
                users book various ride at the comfort of their home, schedule
                ride, rent cars and as well earn an income as riders.
              </p>
            </div>

            <div className="mb-4 mt-6 md:my-0">
              <div className="flex items-center gap-5">
                <Image
                  src="/assets/github2.svg"
                  height={27}
                  width={27}
                  alt="github"
                />
                <Image
                  src="/assets/link.svg"
                  height={27}
                  width={27}
                  alt="link"
                />
              </div>
              <div className="mt-4 flex flex-wrap items-center gap-3 text-sm leading-3 tracking-widest">
                <p>React.js</p>
                <p>Next.js 13</p>
                <p>MongoDB</p>
              </div>
            </div>
          </div>
        </div>

        {/* Project-02 */}
        <div className="flex flex-col-reverse items-stretch justify-end md:flex-row">
          {/* Content */}
          <div className="flex w-full flex-col items-stretch justify-between border-b-[1px] border-darkGray p-5 md:w-1/2 md:border-x-[1px] md:border-b-0">
            <div>
              <h3 className="text-sm tracking-widest">WEB DEVELOPMENT</h3>
              <h1 className="py-3 text-3xl font-bold tracking-wider">
                Altraid
              </h1>
              <p className="w-full pb-8 text-sm tracking-wider md:max-w-xs">
                A ride hailing and car rentals mobile application which allow
                users book various ride at the comfort of their home, schedule
                ride, rent cars and as well earn an income as riders.
              </p>
            </div>

            <div className="mt-8 md:mt-0">
              <div className="flex items-center gap-5">
                <Image
                  src="/assets/github2.svg"
                  height={27}
                  width={27}
                  alt="github"
                />
                <Image
                  src="/assets/link.svg"
                  height={27}
                  width={27}
                  alt="link"
                />
              </div>
              <div className="my-4 flex flex-wrap items-center gap-3 text-sm leading-3 tracking-widest md:mb-0">
                <p>React.js</p>
                <p>Next.js 13</p>
                <p>MongoDB</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="flex w-full flex-col items-stretch justify-between p-5 md:w-1/2 ">
            <Image
              src="/assets/proj.svg"
              alt="project image"
              width={350}
              height={200}
              className="w-full pt-5 md:pt-0"
            />
          </div>
        </div>

        <div className="mt-8 flex gap-2 px-5 tracking-widest md:hidden">
          <p>SEE EXPERIMENT PROJECTS</p>
          <Image src="/assets/arrow.svg" alt="arrow" width={20} height={20} />
        </div>
      </div>
    </div>
  );
};

export default Project;
