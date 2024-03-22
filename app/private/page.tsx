import Link from "next/link";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

async function authenticate() {
  const session = await getServerSession(authOptions);
  if (!session) return redirect("/api/auth/signin");
}

export default async function Private() {
  await authenticate();

  return (
    <>
      <h1 className="text-3xl font-extrabold mb-4">
        Private page
      </h1>

      <Link href="/" className="text-blue-500 hover:underline">
        Link to the home page
      </Link>
    </>
  );
}
