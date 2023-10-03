import Image from "next/image";
import React from "react";

const Project = () => {
  return (
    <div className="mt-10 bg-primaryBlack py-20 text-lightGray md:px-36">
      <div className="mx-auto max-w-[1440px] py-10">
        <div className="flex items-end md:justify-around">
          <h1 className="px-6 font-saira text-5xl font-bold md:px-0 md:text-8xl">
            MY PROJECTS
          </h1>
          <div className="hidden items-center gap-3 text-sm md:flex">
            <p>SEE EXPERIMENT PROJECTS</p>
            <Image src="/assets/arrow.svg" alt="arrow" width={20} height={20} />
          </div>
        </div>
      </div>

      <div className="w-full border-t-[1px] border-darkGray md:mx-auto md:max-w-4xl md:pl-36">
        {/* Project-01 */}
        <div className=" flex flex-col items-stretch justify-end md:flex-row">
          {/* Image */}
          <div className="w-full border-darkGray p-4 md:w-1/2 md:border-x-[1px] md:border-b-[1px]">
            <Image
              src="/assets/proj.svg"
              alt="project image"
              width={350}
              height={200}
              className="w-full"
            />
          </div>

          {/* Content */}
          <div className="flex w-full flex-col items-stretch justify-between border-b-[1px] border-darkGray py-4 pl-5 md:w-1/2">
            <div>
              <h3 className="text-sm tracking-widest">WEB DEVELOPMENT</h3>
              <h1 className="py-6 text-3xl font-bold">Altraid</h1>
              <p className="max-w-xs text-sm ">
                A ride hailing and car rentals mobile application which allow
                users book various ride at the comfort of their home, schedule
                ride, rent cars and as well earn an income as riders.
              </p>
            </div>

            <div className="mt-5 md:mt-0">
              <div className="flex items-center gap-2">
                <Image
                  src="/assets/github.svg"
                  height={25}
                  width={25}
                  alt="github"
                />
                <Image
                  src="/assets/link.svg"
                  height={25}
                  width={25}
                  alt="link"
                />
              </div>
              <div className="mt-2 flex items-center gap-3 text-sm tracking-wider">
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
          <div className="flex w-full flex-col items-stretch justify-between border-b-[1px] border-darkGray p-4 md:w-1/2 md:border-x-[1px]">
            <div>
              <h3 className="text-sm tracking-widest">WEB DEVELOPMENT</h3>
              <h1 className="py-6 text-3xl font-bold">Altraid</h1>
              <p className="max-w-xs text-sm ">
                A ride hailing and car rentals mobile application which allow
                users book various ride at the comfort of their home, schedule
                ride, rent cars and as well earn an income as riders.
              </p>
            </div>

            <div className="mt-5 md:mt-0">
              <div className="flex items-center gap-2">
                <Image
                  src="/assets/github.svg"
                  height={25}
                  width={25}
                  alt="github"
                />
                <Image
                  src="/assets/link.svg"
                  height={25}
                  width={25}
                  alt="link"
                />
              </div>
              <div className="mt-2 flex items-center gap-3 text-sm tracking-wider">
                <p>React.js</p>
                <p>Next.js 13</p>
                <p>MongoDB</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="flex w-full flex-col items-stretch justify-between border-darkGray py-4 pl-5 md:w-1/2 md:border-b-[1px]">
            <Image
              src="/assets/proj.svg"
              alt="project image"
              width={350}
              height={200}
            />
          </div>
        </div>

        <div className="mt-4 flex gap-2 px-5 md:hidden">
          <p>SEE EXPERIMENT PROJECTS</p>
          <Image src="/assets/arrow.svg" alt="arrow" width={20} height={20} />
        </div>
      </div>
    </div>
  );
};

export default Project;
