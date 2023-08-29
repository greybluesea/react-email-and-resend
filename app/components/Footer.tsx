import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className=" none lg:fixed bottom-16 flex flex-row justify-center">
      <ul className="hidden fixed bottom-20 lg:flex lg:flex-col mt-auto  mx-auto  justify-end items-center text-gray-500 bg-transparent space-y-1 px-7 py-5 rounded-xl w-160">
        <li className="text-3xl">React Email + Resend</li>
        <li>learned from Colby Fayock, powered by greybluesea</li>
        <li></li>
      </ul>
    </footer>
  );
};

export default Footer;
