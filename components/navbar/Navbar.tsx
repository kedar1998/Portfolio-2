import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="fixed inset-x-0 top-0">
      <div className="border-b-[1px] border-darkGray text-lightGray">
        <div className="mx-auto flex max-w-[1440px] items-center  justify-between md:px-36">
          <div className="flex w-1/2 items-center justify-center gap-2 border-r-[1px] border-darkGray py-4 md:w-1/5 md:justify-start">
            <Image
              src="/assets/logo.svg"
              alt="logo"
              width={20}
              height={20}
              className=""
            />
            <h1 className="text-sm tracking-widest md:text-xs">KEDAR</h1>
          </div>
          <div className="hidden items-center justify-around py-4  text-xs tracking-widest md:flex md:w-3/5">
            <p>PROJECTS</p>
            <p>EXPERIMENT</p>
            <p>ABOUT</p>
          </div>
          <div className="flex w-1/2 items-center justify-center gap-2 border-l-[1px] border-darkGray py-4 text-sm tracking-widest md:w-1/5 md:justify-end md:text-xs">
            <Image
              src="/assets/resume.svg"
              alt="resume icon"
              width={20}
              height={20}
            />
            <p>RESUME</p>
          </div>
        </div>
      </div>
      <div className="flex w-full items-center justify-around border-b-[1px] border-darkGray  px-10 py-4 text-sm tracking-widest text-lightGray md:hidden">
        <p>PROJECTS</p>
        <p>EXPERIMENT</p>
        <p>ABOUT</p>
      </div>
    </div>
  );
};

export default Navbar;
