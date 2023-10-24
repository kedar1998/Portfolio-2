/* eslint-disable tailwindcss/enforces-shorthand */
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Project = () => {
  return (
    <div
      id="projects"
      className="mt-10 bg-primaryBlack pt-20 text-lightGray md:px-36"
    >
      <div className="mx-auto max-w-[1440px] pb-6">
        <div className="flex items-end md:justify-around">
          <h1 className="px-6 font-saira text-5xl font-bold md:px-0 md:text-8xl">
            MY PROJECTS
          </h1>
          <div className="hidden items-center gap-3 text-sm md:flex"></div>
        </div>
      </div>

      <div className="w-full border-t-[1px] border-darkGray pl-0 md:mx-auto md:max-w-4xl md:border-b-[1px] lg:pl-36">
        {/* Project-01 */}
        <div className=" flex flex-col items-stretch justify-end md:flex-row">
          {/* Image */}
          <div className="w-full border-darkGray p-5 md:w-1/2 md:border-x-[1px] md:border-b-[1px]">
            <Image
              src="/assets/proj-2.png"
              alt="project image"
              width={500}
              height={500}
              className="w-full pt-5 md:pt-0"
            />
          </div>

          {/* Content */}
          <div className="flex w-full flex-col items-stretch justify-between border-b-[1px] border-darkGray p-5 md:w-1/2">
            <div>
              <h3 className="text-sm tracking-widest">FULL STACK APP</h3>
              <h1 className="py-3 text-3xl font-bold tracking-wider">
                Open Quest
              </h1>
              <p className="w-full pb-8 text-sm tracking-wider md:max-w-xs">
                OpenQuest empowers users to ask questions, share insights, and
                connect with experts across diverse topics, fostering
                knowledge-sharing. It boasts recommendation systems,
                AI-generated answers, badges, voting, and seamless filtering.{" "}
                <br />
                <span className="font-bold">(In Progress)</span>
              </p>
            </div>

            <div className="mb-4 mt-6 md:my-0">
              <div className="flex items-center gap-5">
                <Link
                  href="https://github.com/kedar1998/QuestHub"
                  target="_blank"
                >
                  <Image
                    src="/assets/github2.svg"
                    height={27}
                    width={27}
                    alt="github"
                  />
                </Link>
                <Link href="https://openquest.vercel.app/" target="_blank">
                  <Image
                    src="/assets/link.svg"
                    height={27}
                    width={27}
                    alt="link"
                  />
                </Link>
              </div>
              <div className="mt-4 flex flex-wrap items-center gap-3 text-sm leading-3 tracking-widest">
                <p>Next.js 13</p>
                <p>Server Actions</p>
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
              <h1 className="py-3 text-3xl font-bold tracking-wider">Zoth</h1>
              <p className="w-full pb-8 text-sm tracking-wider md:max-w-xs">
                Zoth is a web3 lending platform. I was responsible for creating
                the{" "}
                <Link
                  href="https://www.zoth.io"
                  target="_blank"
                  className="font-bold underline underline-offset-2"
                >
                  website
                </Link>{" "}
                using Astro and developing the{" "}
                <Link
                  href="https://app.zoth.io"
                  target="_blank"
                  className="font-bold underline underline-offset-2"
                >
                  application
                </Link>{" "}
                using a tech stack that included Next.js 13, Node.js,
                Express.js, MongoDB, and AWS.
              </p>
            </div>

            <div className="mt-8 md:mt-0">
              <div className="flex items-center gap-5">
                <Link href="https:app.zoth.io" target="_blank">
                  <Image
                    src="/assets/link.svg"
                    height={27}
                    width={27}
                    alt="link"
                  />
                </Link>
              </div>
              <div className="my-4 flex flex-wrap items-center gap-3 text-sm leading-3 tracking-widest md:mb-0">
                <p>Next.js 13</p>
                <p>Node.js</p>
                <p>Express.js</p>
                <p>MongoDB</p>
                <p>AWS</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="flex w-full flex-col items-stretch justify-between p-5 md:w-1/2 ">
            <Image
              src="/assets/zoth.png"
              alt="project image"
              width={350}
              height={200}
              className="w-full pt-5 md:pt-0"
            />
          </div>
        </div>

        {/* Project-03 */}
        <div className=" flex flex-col items-stretch justify-end border-t-[1px] border-darkGray md:flex-row">
          {/* Image */}
          <div className="w-full border-darkGray p-5 md:w-1/2 md:border-x-[1px] md:border-b-[1px]">
            <Image
              src="/assets/proj-3.png"
              alt="project image"
              width={500}
              height={500}
              className="w-full pt-5 md:pt-0"
            />
          </div>

          {/* Content */}
          <div className="flex w-full flex-col items-stretch justify-between border-b-[1px] border-darkGray p-5 md:w-1/2">
            <div>
              <h3 className="text-sm tracking-widest">FULL STACK APP</h3>
              <h1 className="py-3 text-3xl font-bold tracking-wider">
                Tic-tac-toe
              </h1>
              <p className="w-full pb-8 text-sm tracking-wider md:max-w-xs">
                Developed a captivating real-time multiplayer Tic-Tac-Toe game,
                distinguished by an outstanding user experience and a visually
                striking user interface. Engineered with the MERN stack and
                socket.io, the project features seamless user registration and
                authentication processes, enabling two players to converge in
                the same gaming room, enhancing the overall gameplay experience.
              </p>
            </div>

            <div className="mb-4 mt-6 md:my-0">
              <div className="flex items-center gap-5">
                <Link
                  href="https://github.com/kedar1998/tic-tac-toe"
                  target="_blank"
                >
                  <Image
                    src="/assets/github2.svg"
                    height={27}
                    width={27}
                    alt="github"
                  />
                </Link>
              </div>
              <div className="mt-4 flex flex-wrap items-center gap-3 text-sm leading-3 tracking-widest">
                <p>React.js</p>
                <p>Node.js</p>
                <p>Express.js</p>
                <p>MongoDB</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
