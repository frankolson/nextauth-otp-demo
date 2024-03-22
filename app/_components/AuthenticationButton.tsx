"use client"

import { useSession, signOut } from "next-auth/react";
import Link from "next/link";

export default function AuthenticationButton() {
  const { data: session } = useSession();

  if (session) {
    return (
      <Link
        onClick={() => signOut()}
        href="#"
        className="text-blue-500 hover:underline block mb-2"
      >
        Sign out
      </Link>
    );
  }

  return (
    <Link
      href="/api/auth/signin"
      className="text-blue-500 hover:underline block mb-2"
    >
      Sign in
    </Link>
  );
}
