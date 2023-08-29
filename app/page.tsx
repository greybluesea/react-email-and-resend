import React from "react";
import InputItem from "./components/InputItem";
import { redirect } from "next/navigation";

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
  );
};

export default HomePage;
