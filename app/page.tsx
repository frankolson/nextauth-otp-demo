import Link from "next/link";
import AuthenticationButton from "./_components/AuthenticationButton";

export default async function Home() {
  return (
    <>
      <h1 className="text-3xl font-extrabold mb-4">
        Home page
      </h1>

      <Link
        href="/private"
        className="text-blue-500 hover:underline block mb-2"
      >
        Link to a private page
      </Link>

      <AuthenticationButton />
    </>
  );
}
