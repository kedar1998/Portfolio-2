import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className=" mt-10 border-t-[1px] border-darkGray text-lightGray md:mt-0">
      <div className="mx-auto max-w-[1440px] px-6 pb-5 md:px-36 md:pb-0">
        <div className="mt-6 flex flex-col items-start justify-start gap-5 text-sm md:mt-0 md:flex-row md:items-center md:justify-between">
          <div className="flex  gap-2 tracking-wider">
            <p>kedarmakode1598@gmail.com</p>
            <Image
              src="/assets/arrow.svg"
              alt="link arrow"
              height={10}
              width={15}
            />
          </div>
          <div className="border-darkGray tracking-wider md:border-x-[1px] md:px-20 md:py-3">
            <p>Designed & Built by Kedar Makode</p>
          </div>
          <div className="flex items-center gap-5 md:gap-3">
            <Image
              src="/assets/linkedin.svg"
              height={30}
              width={30}
              alt="linkedin"
            />
            <Image
              src="/assets/twitter.svg"
              height={30}
              width={30}
              alt="twitter"
            />
            <Image
              src="/assets/github.svg"
              height={30}
              width={30}
              alt="github"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
