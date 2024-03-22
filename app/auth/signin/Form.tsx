"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";

export default function Form() {
  const [email, setEmail] = useState('')
  const [submitting, setSubmitting] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitting(true)

    signIn('email', { email, callbackUrl: "/" })
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col w-full space-y-6">
      <div>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          className="block w-full px-4 py-2 text-sm text-gray-900 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <button
        type="submit"
        disabled={submitting || !email}
        className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm disabled:opacity-50 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        {submitting ? 'Sending email...' : 'Login / Sign up'}
      </button>
    </form>
  )
}