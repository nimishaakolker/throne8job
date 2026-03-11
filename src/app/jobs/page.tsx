import { HeroSection }   from './_components/HeroSection'
import { FilterSidebar } from './_components/FilterSidebar'
import { JobSections }   from './_components/JobSections'
import { JobsTopNav }    from './_components/JobTopNav'

export default function JobsPage() {
  return (
    <div className="min-h-screen bg-[#f7f3ef]">
      <HeroSection />
      <JobsTopNav />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <div className="flex gap-6 items-start">
          {/* Sidebar — hidden on mobile, shown on lg+ */}
          <div className="hidden lg:block">
            <FilterSidebar />
          </div>
          <div className="flex-1 min-w-0">
            <JobSections />
          </div>
        </div>
      </main>
    </div>
  )
}