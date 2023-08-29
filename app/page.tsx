import Image from "next/image";
import InputItem from "./components/InputItem";

export default function Home() {
  async function registerUser(data: FormData) {
    "use server";
    /*  const user = await prisma.user.create({
        data: {
          name: data.get("name") as string,
          email: data.get("email") as string,
          hashedPassword: await bcrypt.hash(data.get("password") as string, 10),
        },
      }); */
  }

  return (
    <form
      /* action={registerUser} */ className="max-w-sm py-4 px-8 space-y-3 z-[50]"
    >
      <InputItem name={"name"} type="text" />
      <InputItem name={"email"} />

      <div className="pt-3">
        <button type="submit" className="bg-violet-600 btn flex w-full">
          Send a React Email via Resend
        </button>
      </div>
    </form>
  );
}
