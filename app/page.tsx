import React from "react";
import InputItem from "./components/InputItem";
import { redirect } from "next/navigation";
import Image from "next/image";
import WelcomeEmail from "./emails/WelcomeEmail";

import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);

const HomePage = () => {
  async function sendEmail(data: FormData) {
    "use server";

    const res = await resend.emails.send({
      from: "one-off-email<onboarding@resend.dev>",
      to: data.get("email") as string,
      subject: "One-off email, formulated via react-email, sent via Resend",
      react: WelcomeEmail({ nickname: data.get("name") as string }),
    });

    if (res) {
      redirect("/sent");
    }
  }

  return (
    <>
      <div className="z-10 max-w-5xl w-full flex items-center justify-center">
        <h2 className="text-2xl text-center ">
          Enter your name and email to receive an one-off email <br />
          formulated via
          <Image
            src="https://mintlify.s3-us-west-1.amazonaws.com/react-email/logo/dark.svg"
            width="160"
            height={"20"}
            alt="react-email logo"
            className="inline ml-2"
          />
          , sent via
          <Image
            src="/resend.svg"
            width="75"
            height={"20"}
            alt="Resend logo"
            className="inline ml-2"
          />
        </h2>
      </div>
      <form
        name="main-form"
        action={sendEmail}
        className="max-w-sm py-4 px-8 space-y-3 z-[50]"
      >
        <InputItem name={"name"} type="text" />
        <InputItem name={"email"} />
        <div className="pt-3">
          <button type="submit" className="bg-violet-600 btn flex w-full">
            Send a react-email via Resend
          </button>
        </div>
      </form>
    </>
  );
};

export default HomePage;
