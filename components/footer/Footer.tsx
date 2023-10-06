import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className=" mt-10 border-t-[1px] border-darkGray text-lightGray md:mt-0">
      <div className="mx-auto max-w-[1440px] px-6 pb-5 md:px-36 md:pb-0">
        <div className="mt-6 flex flex-col items-start justify-start gap-5 text-sm md:mt-0 md:flex-row md:items-center md:justify-between">
          <div className="flex  gap-2 tracking-wider">
            <a href="mailto:kedarmakode1598@gmail.com">
              kedarmakode1598@gmail.com
            </a>
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
            <Link href="" target="_blank"></Link>
            <Link href="" target="_blank"></Link>
            <Link
              href="https://www.linkedin.com/in/kedarmakode/"
              target="_blank"
            >
              <Image
                src="/assets/linkedin.svg"
                height={30}
                width={30}
                alt="linkedin"
              />
            </Link>
            <Link href="https://twitter.com/Kedar__98" target="_blank">
              <Image
                src="/assets/twitter.svg"
                height={30}
                width={30}
                alt="twitter"
              />
            </Link>
            <Link href="https://github.com/kedar1998" target="_blank">
              <Image
                src="/assets/github.svg"
                height={30}
                width={30}
                alt="github"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
