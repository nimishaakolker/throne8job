'use client'
import { memo, useMemo, useCallback } from 'react'
import { useJobs } from '@/hooks/useJobs'
import { Job } from '@/types/jobs'
import { JobCard } from './JobCard'
import { PremiumSection } from '../../jobs/_components/PremiumSection'

// ── Sub-components ────────────────────────────────────────────────────────────
const SectionHeader = memo(function SectionHeader({ title, count, badge }: {
  title: string; count?: number; badge?: string
}) {
  return (
    <div className="flex items-center gap-2.5 mb-4">
      <h2 className="text-[#4a3728] font-bold text-base">{title}</h2>
      {count != null && count > 0 && (
        <span className="px-2 py-0.5 rounded-md bg-[#e0d8cf] text-[#6b5847] text-xs font-semibold">{count}</span>
      )}
      {badge && (
        <span className="px-2 py-0.5 rounded-md bg-[#4a3728]/[0.07] text-[#4a3728] text-xs font-semibold border border-[#4a3728]/10">
          {badge}
        </span>
      )}
    </div>
  )
})

const EmptyState = memo(function EmptyState({ icon, title, subtitle }: {
  icon: string; title: string; subtitle: string
}) {
  return (
    <div className="py-16 text-center">
      <p className="text-3xl mb-3">{icon}</p>
      <p className="text-[#4a3728] font-semibold">{title}</p>
      <p className="text-[#6b5847] text-sm mt-1">{subtitle}</p>
    </div>
  )
})

const JobGrid = memo(function JobGrid({ jobs, savedIds, appliedIds, onSave }: {
  jobs:       Job[]
  savedIds:   string[]
  appliedIds: string[]
  onSave:     (id: string) => void
}) {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-3">
      {jobs.map(job => (
        <JobCard
          key={job.id}
          job={job}
          isSaved={savedIds.includes(job.id)}
          isApplied={appliedIds.includes(job.id)}
          onSave={onSave}
        />
      ))}
    </div>
  )
})

// ── Main component ────────────────────────────────────────────────────────────
export const JobSections = memo(function JobSections() {
  const {
    filteredJobs, featuredJobs, recentJobs,
    activeSection, isFiltering,
    savedJobObjects, applications,
    handleToggleSave,
  } = useJobs()

  const savedIds   = useMemo(() => savedJobObjects.map(j => j.id), [savedJobObjects])
  const appliedIds = useMemo(() => applications.map(a => a.jobId), [applications])
  const handleSave = useCallback((id: string) => handleToggleSave(id), [handleToggleSave])

  const engineeringJobs = useMemo(() => filteredJobs.filter(j => j.category === 'Engineering').slice(0, 4), [filteredJobs])
  const designJobs      = useMemo(() => filteredJobs.filter(j => j.category === 'Design').slice(0, 4),      [filteredJobs])
  const productJobs     = useMemo(() => filteredJobs.filter(j => j.category === 'Product').slice(0, 4),     [filteredJobs])

  const gridProps    = { savedIds, appliedIds, onSave: handleSave }
  const premiumProps = { ...gridProps, jobs: featuredJobs }

  // ── Search/filter active — flat results only, no sections ──────────────────
  if (isFiltering) {
    return (
      <div>
        <SectionHeader title="Search Results" count={filteredJobs.length} />
        {filteredJobs.length === 0
          ? <EmptyState icon="🔍" title="No jobs match your filters" subtitle="Try adjusting your search or clearing some filters" />
          : <JobGrid jobs={filteredJobs} {...gridProps} />
        }
      </div>
    )
  }

  // ── Recent tab ─────────────────────────────────────────────────────────────
  if (activeSection === 'recent') {
    return (
      <div>
        <SectionHeader title="Recently Posted" count={recentJobs.length} />
        <JobGrid jobs={recentJobs} {...gridProps} />
      </div>
    )
  }

  // ── Recommended tab — premium section between recommended header and recent ─
  return (
    <div className="space-y-8">
      {/* ① Premium / Featured — horizontal scroll, dark cards */}
      <PremiumSection {...premiumProps} />

      {/* ② Recently Posted */}
      <section>
        <SectionHeader title="Recently Posted" count={recentJobs.length} />
        <JobGrid jobs={recentJobs} {...gridProps} />
      </section>

      {/* ③ Category sections */}
      {engineeringJobs.length > 0 && (
        <section>
          <SectionHeader title="Engineering Roles" count={engineeringJobs.length} />
          <JobGrid jobs={engineeringJobs} {...gridProps} />
        </section>
      )}
      {designJobs.length > 0 && (
        <section>
          <SectionHeader title="Design Roles" count={designJobs.length} />
          <JobGrid jobs={designJobs} {...gridProps} />
        </section>
      )}
      {productJobs.length > 0 && (
        <section>
          <SectionHeader title="Product Roles" count={productJobs.length} />
          <JobGrid jobs={productJobs} {...gridProps} />
        </section>
      )}
    </div>
  )
})