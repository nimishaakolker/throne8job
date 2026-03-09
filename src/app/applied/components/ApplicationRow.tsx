import { memo } from 'react'
import Link from 'next/link'
import { Job, ApplicationStatus } from '@/types/jobs'
import { LOGO_BG, WORK_MODE_STYLE, formatSalary, timeAgo } from '@/types/jobConstants'
import { StatusBadge }    from './StatusBadge'
import { StatusDropdown } from './StatusDropdown'
import { PipelineBar }    from './PipelineBar'

interface Props {
  job:            Job
  status:         ApplicationStatus
  appliedAt:      string
  onStatusChange: (s: ApplicationStatus) => void
}

export const ApplicationRow = memo(function ApplicationRow({ job, status, appliedAt, onStatusChange }: Props) {
  return (
    <div className="bg-white border border-[#d4c4b5] rounded-2xl p-5 hover:border-[#4a3728]/30 hover:shadow-[0_4px_20px_rgba(74,55,40,0.09)] transition-all group">
      <div className="flex items-start gap-4">
        <Link href={`/jobs/${job.id}`} className="flex items-start gap-4 flex-1 min-w-0">
          <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-black text-sm shrink-0"
            style={{ backgroundColor: LOGO_BG[job.companyLogo] ?? '#4a3728' }}>
            {job.companyLogo}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <p className="text-xs text-[#6b5847] font-medium">{job.company}</p>
                <h3 className="text-[#4a3728] font-semibold text-sm group-hover:text-[#3a2a1e] transition-colors truncate">{job.title}</h3>
              </div>
              <StatusBadge status={status} />
            </div>
            <div className="flex flex-wrap items-center gap-2 mt-1.5 text-xs text-[#6b5847]">
              <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full border text-[11px] font-medium ${WORK_MODE_STYLE[job.workMode]}`}>
                <span className="w-1.5 h-1.5 rounded-full bg-current" />
                {job.workMode.charAt(0).toUpperCase() + job.workMode.slice(1)}
              </span>
              <span>{job.location}</span>
              <span className="text-[#d4c4b5]">·</span>
              <span className="font-semibold text-[#4a3728]">{formatSalary(job.salary.min, job.salary.max)}</span>
              <span className="text-[#d4c4b5]">·</span>
              <span>Applied {timeAgo(appliedAt)}</span>
            </div>
          </div>
        </Link>
        <StatusDropdown current={status} onChange={onStatusChange} />
      </div>
      <PipelineBar status={status} />
    </div>
  )
})