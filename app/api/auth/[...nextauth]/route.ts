import NextAuth, { AuthOptions } from "next-auth";
import EmailProvider from "next-auth/providers/email";
import { Adapter } from "next-auth/adapters";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import prisma from "@/app/_lib/prisma";
import { randomInt } from "crypto";

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma as PrismaClient) as Adapter,
  providers: [
    EmailProvider({
      server: {
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT),
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASSWORD,
        },
      },
      from: process.env.SMTP_FROM,
      maxAge: 3 * 60, // 3 minutes
      async generateVerificationToken() {
        return gernerateOTP().toString()
      },
    }),
  ],
  pages: {
    signIn: '/auth/signin'
  }
};

function gernerateOTP() {
  return randomInt(100000, 999999);
};

const handler =  NextAuth(authOptions);
export { handler as GET, handler as POST }