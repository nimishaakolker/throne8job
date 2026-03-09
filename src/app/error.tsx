'use client'
import { useEffect } from 'react'
import Link from 'next/link'

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => { console.error(error) }, [error])
  return (
    <div className="min-h-screen bg-[#f7f3ef] flex items-center justify-center px-6">
      <div className="text-center max-w-sm">
        <p className="text-4xl mb-4">⚠</p>
        <h2 className="text-[#4a3728] font-black text-xl mb-2">Something went wrong</h2>
        <p className="text-[#6b5847] text-sm mb-8">An unexpected error occurred.</p>
        <div className="flex gap-3 justify-center">
          <button onClick={reset} className="px-5 py-2.5 bg-[#4a3728] hover:bg-[#3a2a1e] text-[#e0d8cf] text-sm font-bold rounded-xl transition-colors">
            Try again
          </button>
          <Link href="/jobs" className="px-5 py-2.5 bg-white border border-[#d4c4b5] text-[#6b5847] text-sm font-semibold rounded-xl transition-colors">
            Browse Jobs
          </Link>
        </div>
      </div>
    </div>
  )
}