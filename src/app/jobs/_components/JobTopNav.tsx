'use client'
import Link from 'next/link'
import { memo } from 'react'
import { useJobs } from '@/hooks/useJobs'
import { SectionView } from '@/types/jobs'

const INTERNAL_TABS: { id: SectionView; label: string }[] = [
  { id: 'recommended', label: 'Recommended' },
  { id: 'recent',      label: 'Recent'      },
]

export const JobsTopNav = memo(function JobsTopNav() {
  const { activeSection, savedCount, appliedCount, handleSetSection } = useJobs()

  return (
  <div className="border-b border-[#d4c4b5] sticky top-0 z-30 shadow-sm bg-[#f7f3ef]/90 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-1 h-12">

          {INTERNAL_TABS.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => handleSetSection(id)}
              className={`px-4 h-full text-sm font-semibold border-b-2 transition-all
                ${activeSection === id
                  ? 'border-[#4a3728] text-[#4a3728]'
                  : 'border-transparent text-[#6b5847] hover:text-[#4a3728] hover:border-[#d4c4b5]'
                }`}
            >
              {label}
            </button>
          ))}

          <div className="h-5 w-px bg-[#d4c4b5] mx-2" />

          <Link
            href="/saved"
            className="flex items-center gap-2 px-4 h-full text-sm font-semibold border-b-2 border-transparent text-[#6b5847] hover:text-[#4a3728] hover:border-[#d4c4b5] transition-all"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
            </svg>
            Saved
            {savedCount > 0 && (
              <span className="px-1.5 py-0.5 rounded-full bg-[#e0d8cf] text-[#4a3728] text-[10px] font-bold">
                {savedCount}
              </span>
            )}
          </Link>

          <Link
            href="/applied"
            className="flex items-center gap-2 px-4 h-full text-sm font-semibold border-b-2 border-transparent text-[#6b5847] hover:text-[#4a3728] hover:border-[#d4c4b5] transition-all"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
            </svg>
            Applications
            {appliedCount > 0 && (
              <span className="px-1.5 py-0.5 rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-bold">
                {appliedCount}
              </span>
            )}
          </Link>

          {/* Post a Job — pushed to far right */}
          <div className="ml-auto">
            <Link
              href="/post-job"
              className="px-3.5 py-1.5 bg-[#4a3728] hover:bg-[#3a2a1e] text-[#e0d8cf] text-sm font-semibold rounded-lg transition-colors"
            >
              Post a Job
            </Link>
          </div>

        </div>
      </div>
    </div>
  )
})