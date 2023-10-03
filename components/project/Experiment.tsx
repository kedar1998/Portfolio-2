import Image from "next/image";
import React from "react";

const Experiment = () => {
  return (
    <div className="mt-10 bg-primaryBlack py-20 text-lightGray md:px-36">
      <div className="mx-auto max-w-[1440px] py-10">
        <div className="flex items-end md:justify-around">
          <h1 className="px-6 font-saira text-5xl font-bold md:px-0 md:text-8xl">
            MY Experiments
          </h1>
          <div className="hidden items-center gap-3 text-sm md:flex">
            <p>SEE EXPERIMENT PROJECTS</p>
            <Image src="/assets/arrow.svg" alt="arrow" width={20} height={20} />
          </div>
        </div>
      </div>

      <div className="no-scrollbar flex w-full  flex-row overflow-scroll border-y-[1px] border-darkGray  md:mx-auto md:max-w-4xl  md:pl-36">
        {/* Project-01 */}
        <div className="flex min-w-[300px] flex-col items-stretch justify-end border-darkGray p-5 md:min-w-[200px] md:border-l-[1px]">
          <Image
            src="/assets/proj.svg"
            alt="project image"
            width={250}
            height={250}
          />
          <p className="text-xl font-semibold">
            This is sample title for demo purpose
          </p>
        </div>
        <div className=" flex min-w-[300px] flex-col items-stretch justify-end border-x-[1px] border-darkGray p-5 md:min-w-[200px]">
          <Image
            src="/assets/proj.svg"
            alt="project image"
            width={250}
            height={250}
          />
          <p className="text-xl font-semibold">
            This is sample title for demo purpose
          </p>
        </div>
        <div className=" flex min-w-[300px] flex-col items-stretch justify-end border-darkGray p-5 md:min-w-[200px] md:border-r-[1px]">
          <Image
            src="/assets/proj.svg"
            alt="project image"
            width={250}
            height={250}
          />
          <p className="text-xl font-semibold">
            This is sample title for demo purpose
          </p>
        </div>
      </div>

      <div className="mt-4 flex gap-2 px-5 md:hidden">
        <p>SEE EXPERIMENT PROJECTS</p>
        <Image src="/assets/arrow.svg" alt="arrow" width={20} height={20} />
      </div>
    </div>
  );
};

export default Experiment;
