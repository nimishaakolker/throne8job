import { memo } from 'react'
import Link from 'next/link'
import { Job } from '@/types/jobs'
import { LOGO_BG, WORK_MODE_STYLE, formatSalary } from '@/types/jobConstants'

interface Props {
  job:       Job
  isSaved:   boolean
  isApplied: boolean
  onSave:    (id: string) => void
}

export const PremiumJobCard = memo(function PremiumJobCard({ job, isSaved, isApplied, onSave }: Props) {
  return (
    <Link href={`/jobs/${job.id}`} className="group block shrink-0 w-[300px]">
      <article className="relative h-full bg-gradient-to-br from-[#2d1f14] to-[#4a3728] border border-[#6b5040] rounded-2xl p-5
        shadow-[0_4px_24px_rgba(45,31,20,0.18)] hover:shadow-[0_8px_32px_rgba(45,31,20,0.28)]
        hover:border-[#c9a882]/40 transition-all duration-200">

        {/* Premium badge */}
        <div className="absolute top-3.5 right-3.5 flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#c9a882]/15 border border-[#c9a882]/30">
          <span className="text-[#c9a882] text-[9px]">✦</span>
          <span className="text-[#c9a882] text-[9px] font-bold tracking-widest uppercase">Featured</span>
        </div>

        {/* Logo + company */}
        <div className="flex items-center gap-3 mb-4 pr-16">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-black text-sm shrink-0 ring-2 ring-white/10"
            style={{ backgroundColor: LOGO_BG[job.companyLogo] ?? '#6b5040' }}
          >
            {job.companyLogo}
          </div>
          <div className="min-w-0">
            <p className="text-[#c9a882] text-[11px] font-semibold truncate">{job.company}</p>
            <h3 className="text-white font-bold text-sm leading-tight truncate group-hover:text-[#e8d5b8] transition-colors">
              {job.title}
            </h3>
          </div>
        </div>

        {/* Work mode + type */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs border font-medium ${WORK_MODE_STYLE[job.workMode]}`}>
            <span className="w-1.5 h-1.5 rounded-full bg-current" />
            {job.workMode.charAt(0).toUpperCase() + job.workMode.slice(1)}
          </span>
          <span className="px-2.5 py-0.5 rounded-full text-xs bg-white/10 border border-white/10 text-[#e0d8cf] font-medium capitalize">
            {job.experience}
          </span>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1 mb-4">
          {job.tags.slice(0, 3).map(tag => (
            <span key={tag} className="px-2 py-0.5 rounded-md text-[11px] bg-white/8 text-[#c9a882] border border-white/10 font-medium">
              {tag}
            </span>
          ))}
          {job.tags.length > 3 && (
            <span className="px-2 py-0.5 text-[11px] text-[#9d8876]">+{job.tags.length - 3}</span>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-3 border-t border-white/10">
          <div>
            <p className="text-white font-black text-sm">{formatSalary(job.salary.min, job.salary.max)}</p>
            <p className="text-[#9d8876] text-[11px] mt-0.5">{job.location}</p>
          </div>
          <div className="flex items-center gap-2">
            {isApplied ? (
              <span className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-emerald-500/15 text-emerald-400 text-xs font-semibold border border-emerald-500/20">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                Applied
              </span>
            ) : null}
            <button
              onClick={e => { e.preventDefault(); onSave(job.id) }}
              className="p-1.5 rounded-lg hover:bg-white/10 transition-colors"
              aria-label={isSaved ? 'Unsave job' : 'Save job'}
            >
              <svg
                className={`w-4 h-4 transition-colors ${isSaved ? 'text-[#c9a882] fill-[#c9a882]' : 'text-white/30 fill-none'}`}
                stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
              </svg>
            </button>
          </div>
        </div>
      </article>
    </Link>
  )
})