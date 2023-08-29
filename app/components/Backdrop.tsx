import React from "react";
import Image from "next/image";
type Props = {};

const Backdrop = (props: Props) => {
  return (
    <div className={"fixed flex h-full place-items-center z-[-1]"}>
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
    </div>
  );
};

export default Backdrop;
