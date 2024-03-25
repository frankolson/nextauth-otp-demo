"use client"

import { useSearchParams } from "next/navigation"

const ERROR_MESSAGES = {
  Configuration: "There is a problem with the server configuration. Please contact the site administrator.",
  AccessDenied: "You don't have permission to sigin or register on this site.",
  Verification: "That token is not valid. Please try again or refresh the page to request a new one.",
  Default: "There was an unknown error. Please refresh the page and try again."
}

export default function VerificationAlert() {
  const params = useSearchParams()
  const error = params.get('error') as keyof typeof ERROR_MESSAGES

  return error ? (
    <div className="bg-red-50 border-l-4 border-red-400 text-sm text-red-700 mb-3 p-4">
      {ERROR_MESSAGES[error] || ERROR_MESSAGES.Default}
    </div>
  ) : null
}