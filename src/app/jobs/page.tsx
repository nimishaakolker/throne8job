import { Navbar }        from '@/components/layout/Navbar'
import { HeroSection }   from './components/HeroSection'
import { FilterSidebar } from './components/FilterSidebar'
import { JobSections }   from './components/JobSections'

export default function JobsPage() {
  return (
    <div className="min-h-screen bg-[#f7f3ef]">
 
      <HeroSection />
      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex gap-6 items-start">
          <FilterSidebar />
          <div className="flex-1 min-w-0">
            <JobSections />
          </div>
        </div>
      </main>
    </div>
  )
}