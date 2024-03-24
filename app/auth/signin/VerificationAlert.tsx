"use client"

import { useSearchParams } from "next/navigation"

export default function VerificationAlert() {
  const params = useSearchParams()
  const error = params.get('error')

  return error ? (
    <div className="bg-red-50 border-l-4 border-red-400 text-sm text-red-700 mb-3 p-4">
      That token is not valid. Please try again or refresh the page to request a new one.
    </div>
  ) : null
}