'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h2 className="text-xl font-bold mb-4">Något gick fel!</h2>
      <button
        className="bg-[#008731] text-white px-4 py-2 rounded-md hover:bg-[#007029]"
        onClick={() => reset()}
      >
        Försök igen
      </button>
    </div>
  )
} 