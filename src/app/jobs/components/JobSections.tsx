'use client'
import { useJobs } from '@/hooks/useJobs'
import { Job } from '@/types/jobs'
import { JobCard } from './JobCard'

function SectionHeader({ title, count, badge }: { title: string; count?: number; badge?: string }) {
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
}

function EmptyState({ icon, title, subtitle }: { icon: string; title: string; subtitle: string }) {
  return (
    <div className="py-16 text-center">
      <p className="text-3xl mb-3">{icon}</p>
      <p className="text-[#4a3728] font-semibold">{title}</p>
      <p className="text-[#6b5847] text-sm mt-1">{subtitle}</p>
    </div>
  )
}

function JobGrid({ jobs }: { jobs: Job[] }) {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-3">
      {jobs.map((job) => <JobCard key={job.id} job={job} />)}
    </div>
  )
}

export function JobSections() {
  const {
    filteredJobs, featuredJobs, recentJobs,
    savedJobObjects, appliedJobObjects,
    activeSection, isFiltering,
  } = useJobs()

  if (isFiltering) {
    return (
      <div>
        <SectionHeader title="Search Results" count={filteredJobs.length} />
        {filteredJobs.length === 0
          ? <EmptyState icon="🔍" title="No jobs match your filters" subtitle="Try adjusting your search or clearing some filters" />
          : <JobGrid jobs={filteredJobs} />
        }
      </div>
    )
  }

  if (activeSection === 'saved') {
    return (
      <div>
        <SectionHeader title="Saved Jobs" count={savedJobObjects.length} />
        {savedJobObjects.length === 0
          ? <EmptyState icon="◈" title="No saved jobs yet" subtitle="Tap the bookmark on any job to save it here" />
          : <JobGrid jobs={savedJobObjects} />
        }
      </div>
    )
  }

  if (activeSection === 'applied') {
    return (
      <div>
        <SectionHeader title="Applied Jobs" count={appliedJobObjects.length} />
        {appliedJobObjects.length === 0
          ? <EmptyState icon="◉" title="No applications yet" subtitle="Jobs you apply to will appear here" />
          : <JobGrid jobs={appliedJobObjects} />
        }
      </div>
    )
  }

  if (activeSection === 'recent') {
    return (
      <div>
        <SectionHeader title="Recently Posted" count={recentJobs.length} />
        <JobGrid jobs={recentJobs} />
      </div>
    )
  }

  const engineeringJobs = filteredJobs.filter((j) => j.category === 'Engineering').slice(0, 4)
  const designJobs      = filteredJobs.filter((j) => j.category === 'Design').slice(0, 4)
  const productJobs     = filteredJobs.filter((j) => j.category === 'Product').slice(0, 4)

  return (
    <div className="space-y-8">
      {featuredJobs.length > 0 && (
        <section>
          <SectionHeader title="Recommended for You" count={featuredJobs.length} badge="✦ Curated" />
          <JobGrid jobs={featuredJobs} />
        </section>
      )}
      <section>
        <SectionHeader title="Recently Posted" count={recentJobs.length} />
        <JobGrid jobs={recentJobs} />
      </section>
      {engineeringJobs.length > 0 && (
        <section>
          <SectionHeader title="Engineering Roles" count={engineeringJobs.length} />
          <JobGrid jobs={engineeringJobs} />
        </section>
      )}
      {designJobs.length > 0 && (
        <section>
          <SectionHeader title="Design Roles" count={designJobs.length} />
          <JobGrid jobs={designJobs} />
        </section>
      )}
      {productJobs.length > 0 && (
        <section>
          <SectionHeader title="Product Roles" count={productJobs.length} />
          <JobGrid jobs={productJobs} />
        </section>
      )}
    </div>
  )
}