import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import LoginForm from "./LoginForm";
import VerificationAlert from "./VerificationAlert";

async function authenticationPrecheck(): Promise<void> {
  const session = await getServerSession(authOptions)
  if (session?.user) return redirect("/private")
}

export default async function Signin() {
  await authenticationPrecheck()

  return (
    <div className="border border-gray-200 bg-white rounded-md shadow-md p-4 max-w-md mx-auto">
      <VerificationAlert />
      <LoginForm />
    </div>
  );
}