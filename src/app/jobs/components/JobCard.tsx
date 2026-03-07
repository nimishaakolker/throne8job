'use client'
import { memo } from 'react'
import Link from 'next/link'
import { Job } from '@/types/jobs'
import { useJobs } from '@/hooks/useJobs'

const LOGO_BG: Record<string, string> = {
  T8: '#4a3728', NL: '#2d4a6b', OR: '#7a3d1a',
  DC: '#1a5c3a', FM: '#6b1a3a', PL: '#1a4a6b',
  LC: '#6b4a1a', ST: '#3a3a3a',
}

const WORK_MODE_STYLE: Record<string, string> = {
  remote: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  hybrid: 'bg-amber-50   text-amber-700   border-amber-200',
  onsite: 'bg-rose-50    text-rose-700    border-rose-200',
}

const TYPE_LABEL: Record<string, string> = {
  'full-time': 'Full-time', 'part-time': 'Part-time',
  contract: 'Contract', freelance: 'Freelance', internship: 'Internship',
}

function timeAgo(dateStr: string): string {
  const days = Math.floor((Date.now() - new Date(dateStr).getTime()) / 86400000)
  if (days === 0) return 'Today'
  if (days === 1) return 'Yesterday'
  if (days < 7)  return `${days}d ago`
  return `${Math.floor(days / 7)}w ago`
}

function formatSalary(min: number, max: number): string {
  const k = (n: number) => `$${Math.round(n / 1000)}k`
  return `${k(min)} – ${k(max)}`
}

export const JobCard = memo(function JobCard({ job }: { job: Job }) {
  const { isJobSaved, isJobApplied, handleToggleSave } = useJobs()
  const saved   = isJobSaved(job.id)
  const applied = isJobApplied(job.id)

  return (
    <Link href={`/jobs/${job.id}`} className="group block">
      <article className={`
        relative bg-white border border-[#d4c4b5] rounded-2xl p-5
        transition-all duration-200
        hover:border-[#4a3728]/30 hover:shadow-[0_4px_20px_rgba(74,55,40,0.09)]
        ${job.featured ? 'shadow-[0_2px_10px_rgba(74,55,40,0.06)]' : ''}
      `}>
        {job.featured && (
          <div className="absolute top-0 right-0 overflow-hidden w-14 h-14 rounded-tr-2xl">
            <div className="absolute top-2.5 right-[-14px] rotate-45 bg-[#4a3728] text-[#e0d8cf] text-[9px] font-bold tracking-widest py-0.5 px-5">
              TOP
            </div>
          </div>
        )}

        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3 min-w-0">
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center text-white font-black text-sm shrink-0"
              style={{ backgroundColor: LOGO_BG[job.companyLogo] ?? '#4a3728' }}
            >
              {job.companyLogo}
            </div>
            <div className="min-w-0">
              <p className="text-xs text-[#6b5847] font-medium truncate">{job.company}</p>
              <h3 className="text-[#4a3728] font-semibold text-sm truncate group-hover:text-[#3a2a1e] transition-colors">
                {job.title}
              </h3>
            </div>
          </div>
          <button
            onClick={(e) => { e.preventDefault(); handleToggleSave(job.id) }}
            className="shrink-0 p-1.5 rounded-lg hover:bg-[#e0d8cf]/60 transition-colors"
            aria-label={saved ? 'Unsave' : 'Save'}
          >
            <svg className={`w-4 h-4 transition-colors ${saved ? 'text-[#4a3728] fill-[#4a3728]' : 'text-[#d4c4b5] fill-none'}`}
              stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
            </svg>
          </button>
        </div>

        <div className="mt-3 flex flex-wrap gap-1.5">
          <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs border font-medium ${WORK_MODE_STYLE[job.workMode]}`}>
            <span className="w-1.5 h-1.5 rounded-full bg-current" />
            {job.workMode.charAt(0).toUpperCase() + job.workMode.slice(1)}
          </span>
          <span className="px-2.5 py-0.5 rounded-full text-xs bg-[#f7f3ef] border border-[#d4c4b5] text-[#6b5847] font-medium">
            {TYPE_LABEL[job.type]}
          </span>
          <span className="px-2.5 py-0.5 rounded-full text-xs bg-[#f7f3ef] border border-[#d4c4b5] text-[#6b5847] font-medium capitalize">
            {job.experience}
          </span>
        </div>

        <div className="mt-2 flex flex-wrap gap-1">
          {job.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="px-2 py-0.5 rounded-md text-[11px] bg-[#e0d8cf]/50 text-[#4a3728] border border-[#d4c4b5] font-medium">
              {tag}
            </span>
          ))}
          {job.tags.length > 3 && (
            <span className="px-2 py-0.5 text-[11px] text-[#6b5847]">+{job.tags.length - 3}</span>
          )}
        </div>

        <div className="mt-4 pt-3 border-t border-[#e8ddd4] flex items-end justify-between">
          <div>
            <p className="text-[#4a3728] font-bold text-sm">{formatSalary(job.salary.min, job.salary.max)}</p>
            <p className="text-[#6b5847] text-xs mt-0.5">{job.location}</p>
          </div>
          <div className="text-right">
            {applied ? (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-700 text-xs font-semibold border border-emerald-200">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                Applied
              </span>
            ) : (
              <p className="text-[#6b5847] text-xs">{timeAgo(job.postedAt)}</p>
            )}
            <p className="text-[#d4c4b5] text-[11px] mt-0.5">{job.applicants} applicants</p>
          </div>
        </div>
      </article>
    </Link>
  )
})