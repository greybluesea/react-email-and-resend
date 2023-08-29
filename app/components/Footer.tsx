import React from "react";
import Image from "next/image";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className=" none lg:fixed bottom-16 flex flex-row justify-center">
      <ul className="hidden fixed bottom-20 lg:flex lg:flex-col mt-auto  mx-auto  justify-end items-center text-gray-500 bg-transparent space-y-1 px-7 py-5 rounded-xl w-160">
        <li className="text-3xl text-gray-500">
          <Image
            src="https://mintlify.s3-us-west-1.amazonaws.com/react-email/logo/dark.svg"
            width="160"
            height={"20"}
            alt="react-email logo"
            className="inline mx-2"
          />
          +
          <Image
            src="/resend.svg"
            width="75"
            height={"20"}
            alt="react-email logo"
            className="inline ml-2"
          />
        </li>
        <li>learned from Colby Fayock, powered by greybluesea</li>
        <li></li>
      </ul>
    </footer>
  );
};

export default Footer;
