import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: '404 — Page Not Found' }

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#f7f3ef] flex items-center justify-center px-6">
      <div className="text-center max-w-sm">
        <p className="text-[11px] font-bold text-[#c9a882] uppercase tracking-[0.2em] mb-3">— 404</p>
        <h1 className="font-black text-[#2d1f14] text-4xl mb-3 tracking-tight">
          Page not found<span className="text-[#c9a882]">.</span>
        </h1>
        <p className="text-[#6b5847] text-sm mb-8">This page doesn't exist or was moved.</p>
        <Link href="/jobs" className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#4a3728] hover:bg-[#3a2a1e] text-[#e0d8cf] text-sm font-bold rounded-xl transition-colors">
          ← Back to Jobs
        </Link>
      </div>
    </div>
  )
}