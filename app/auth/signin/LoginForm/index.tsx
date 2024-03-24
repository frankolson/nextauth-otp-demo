"use client";

import { useState } from "react";
import EmailSubmission from "./EmailSubmission";
import OTPVerification from "./OTPVerification";

export default function LoginForm() {
  const [verificationEmail, setVerificationEmail] = useState<string>('')

  return verificationEmail
    ? <OTPVerification email={verificationEmail} />
    : <EmailSubmission onSubmit={setVerificationEmail} />
}