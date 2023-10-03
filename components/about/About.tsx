import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="mx-auto max-w-[1440px]">
      <div className="mt-10 bg-primaryBlack py-20 text-lightGray md:px-36">
        <div className="pb-5">
          <div className="flex items-end md:justify-around">
            <h1 className="px-6 font-saira text-5xl font-bold md:px-0 md:text-8xl">
              ABOUT ME
            </h1>
            <div className="hidden items-center gap-3 text-sm md:flex">
              <p className="tracking-widest">SEND ME A NOTE</p>
              <Image
                src="/assets/arrow.svg"
                alt="arrow"
                width={20}
                height={20}
              />
            </div>
          </div>
        </div>

        <div className=" flex w-full flex-col border-y-[1px]  border-darkGray md:mx-auto  md:max-w-4xl md:flex-row  md:pl-36">
          {/* Project-01 */}
          <div className="flex flex-col  justify-center border-darkGray p-5  md:w-2/5 md:border-x-[1px]">
            <Image
              src="/assets/profile.svg"
              alt="profile image"
              width={350}
              height={350}
              className="mt-3 md:mt-0"
            />
          </div>

          <div className="flex flex-col justify-start pb-4 text-sm md:w-3/5 md:pb-0 ">
            <div className="p-5 tracking-wider">
              <p>
                Hello, I am Oluwakemi Adeleke. Product and User Experience
                Designer. I perfectly balance user and business needs to create
                delightful products. Creating user engaging and immersive
                applications has always been a longstanding ambition of mine.
              </p>
              <p className="mt-4">
                Finding ways to communicate to users in a visually and
                cohesively inviting way is important to me.{" "}
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
                  Frontend Developer
                </h2>
                <p className="pb-5 text-sm tracking-wider">
                  Passionate about UI/UX. Over 4 years of development experience
                  in HTML, CSS, JS, React and NextJS frameworks.
                </p>
              </div>
              <div className="flex h-full flex-col justify-start pl-4 pt-4 md:w-1/2">
                <div className="flex  items-center gap-2  pt-2">
                  <Image
                    src="/assets/computer.svg"
                    height={30}
                    width={30}
                    alt="computer"
                  />
                </div>
                <h2 className="py-2 text-lg font-semibold">
                  Software Development
                </h2>
                <p className="pb-2 text-sm tracking-wider">
                  Experienced in both functional and OOP: Dart, Python,
                  Java,JavaScript, TypeScript.
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
