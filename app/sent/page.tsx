import { redirect } from "next/navigation";
import React from "react";
import { revalidatePath } from "next/cache";
import Link from "next/link";
type Props = {};

const SentPage = (props: Props) => {
  revalidatePath("/");

  return (
    <>
      <div className="text-2xl mt-20">Email Sent!</div>
      <br />
      <Link href="/" className="bg-violet-600 btn">
        Return to home page
      </Link>
    </>
  );
};

export default SentPage;
