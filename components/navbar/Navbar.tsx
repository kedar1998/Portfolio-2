import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="fixed inset-x-0 top-0 z-50 bg-primaryBlack">
      <div className="border-b-[1px] border-darkGray px-6 text-lightGray md:px-0">
        <div className="group mx-auto flex max-w-[1440px] items-center  justify-between md:px-36">
          <Link
            href="/"
            className="flex w-1/2 cursor-pointer items-center justify-start gap-2 border-r-[1px] border-darkGray py-4 md:w-1/5"
          >
            <Image src="/assets/logo.svg" alt="logo" width={20} height={20} />
            <h1 className="text-sm tracking-widest">KEDAR</h1>
          </Link>
          <div className="hidden items-center justify-around py-4  text-sm tracking-widest md:flex md:w-3/5">
            <Link
              href="#projects"
              className="tracking-widest hover:cursor-pointer hover:text-primaryWhite"
            >
              PROJECTS
            </Link>
            <Link
              href="#experiments"
              className="tracking-widest hover:cursor-pointer hover:text-primaryWhite"
            >
              EXPERIMENT
            </Link>
            <Link
              href="#about"
              className="tracking-widest hover:cursor-pointer hover:text-primaryWhite"
            >
              ABOUT
            </Link>
          </div>
          <div className="flex w-1/2 items-center justify-end gap-2 border-darkGray py-4 text-sm tracking-widest md:w-1/5 md:border-l-[1px] ">
            <Image
              src="/assets/resume.svg"
              alt="resume icon"
              width={20}
              height={20}
            />

            <a
              href="/assets/resume.pdf"
              target="_blank"
              className="tracking-widest hover:cursor-pointer hover:text-primaryWhite"
            >
              RESUME
            </a>
          </div>
        </div>
      </div>
      <div className="flex w-full items-center justify-between border-b-[1px] border-darkGray  px-6 py-4 text-sm tracking-widest text-lightGray md:hidden">
        <p className="hover:cursor-pointer hover:text-primaryWhite">PROJECTS</p>
        <p className="hover:cursor-pointer hover:text-primaryWhite">
          EXPERIMENT
        </p>
        <p className="hover:cursor-pointer hover:text-primaryWhite">ABOUT</p>
      </div>
    </div>
  );
};

export default Navbar;
