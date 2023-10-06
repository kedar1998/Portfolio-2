import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div id="about" className="mx-auto max-w-[1440px]">
      <div className="mt-10 bg-primaryBlack py-20 text-lightGray md:px-36">
        <div className="pb-5">
          <div className="flex items-end md:justify-around">
            <h1 className="px-6 font-saira text-5xl font-bold md:px-0 md:text-8xl">
              ABOUT ME
            </h1>
            <div className="hidden items-center gap-3 text-sm md:flex">
              <a
                href="mailto:kedarmakode1598@gmail.com"
                className="tracking-widest"
              >
                SEND ME A NOTE
              </a>
              <Image
                src="/assets/arrow.svg"
                alt="arrow"
                width={20}
                height={20}
              />
            </div>
          </div>
        </div>

        <div className=" flex w-full flex-col border-y-[1px]  border-darkGray md:mx-auto  md:max-w-4xl lg:flex-row  lg:pl-36">
          {/* Project-01 */}
          <div className="flex flex-col  items-center justify-center border-darkGray p-5  lg:w-2/5 lg:border-x-[1px]">
            <Image
              src="/assets/profile2.png"
              alt="profile image"
              width={350}
              height={350}
              className="mt-3 md:mt-0"
            />
          </div>

          <div className="flex w-full flex-col justify-start pb-4 text-sm md:pb-0 lg:w-3/5 ">
            <div className="p-5 tracking-wider">
              <p>
                I'm a full stack developer on a mission to transform ideas into
                digital reality. My work revolves around blending the art of
                coding with a deep-rooted problem-solving mindset.
              </p>
              <p className="mt-4">
                I'm driven by the endless possibilities technology offers and
                committed to crafting solutions that not only meet user needs
                but also leave a lasting impact. I am dedicated to creating
                accessible and efficient products that enhance the
                digital landscape.
              </p>
            </div>

            <div className="border-b-[1px] border-darkGray" />

            <div className="flex h-full flex-col md:flex-row ">
              <div className="flex  h-full flex-col justify-start border-darkGray px-4 pt-4 md:w-1/2 md:border-r-[1px]">
                <div className="flex  items-center gap-2  pt-2">
                  <Image
                    src="/assets/react.svg"
                    height={30}
                    width={30}
                    alt="react"
                  />
                  <Image
                    src="/assets/nextjs.svg"
                    height={30}
                    width={30}
                    alt="nextjs"
                  />
                </div>
                <h2 className="py-2 text-lg font-semibold">
                  Frontend Development
                </h2>
                <p className="pb-5 text-sm tracking-wider">
                  I excel in frontend development with expertise in HTML, CSS,
                  JavaScript, TypeScript, ReactJS, Next.js, and Tailwind CSS,
                  crafting visually appealing and high-performance web
                  interfaces.
                </p>
              </div>
              <div className="flex h-full flex-col justify-start pl-4 pt-4 md:w-1/2">
                <div className="flex  items-center gap-2  pt-2">
                  <Image
                    src="/assets/nodejs.svg"
                    height={30}
                    width={30}
                    alt="computer"
                  />
                  <Image
                    src="/assets/mongodb.svg"
                    height={30}
                    width={30}
                    alt="computer"
                  />
                </div>
                <h2 className="py-2 text-lg font-semibold">
                  Backend Development
                </h2>
                <p className="pb-2 text-sm tracking-wider">
                  Skilled in Node.js, Express.js, AWS, and MongoDB, I craft
                  scalable server-side solutions and optimize data management
                  for seamless web application integration.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex gap-2 px-5 md:hidden">
          <p className="tracking-wider">SEND ME NOTE</p>
          <Image src="/assets/arrow.svg" alt="arrow" width={20} height={20} />
        </div>
      </div>
    </div>
  );
};

export default About;
