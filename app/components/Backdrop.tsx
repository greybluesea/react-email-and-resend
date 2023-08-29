import React from "react";
import Image from "next/image";
type Props = {};

const Backdrop = (props: Props) => {
  return (
    <div
      className={
        "fixed flex h-full place-items-center space-x-20 "

        /* +" before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]" */
      }
    >
      <video
        autoPlay={true}
        loop
        muted
        playsInline
        className="h-[325px] w-[325px]"
        poster="/next.svg"
        src="/cube.mp4"
        width="255"
        height="255"
      ></video>

      {/* <Image
        className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
        src="/next.svg"
        alt="Next.js Logo"
        width={180}
        height={37}
        priority
      /> */}
    </div>
  );
};

export default Backdrop;
