export type JobType = 'full-time' | 'part-time' | 'contract' | 'freelance' | 'internship'
export type ExperienceLevel = 'entry' | 'mid' | 'senior' | 'lead' | 'executive'
export type WorkMode = 'remote' | 'hybrid' | 'onsite'
export type SectionView = 'recommended' | 'recent' | 'saved' | 'applied'

export interface Salary {
  min: number
  max: number
  currency: string
}

export interface Job {
  id: string
  title: string
  company: string
  companyLogo: string
  location: string
  salary: Salary
  type: JobType
  experience: ExperienceLevel
  workMode: WorkMode
  tags: string[]
  description: string
  responsibilities: string[]
  requirements: string[]
  benefits: string[]
  postedAt: string
  deadline: string
  applicants: number
  featured: boolean
  category: string
}

export interface FilterState {
  search: string
  types: JobType[]
  experience: ExperienceLevel[]
  workMode: WorkMode[]
  categories: string[]
  location: string
  salaryMin: number  // ← added
  salaryMax: number  // ← added
}

export interface JobsState {
  jobs: Job[]
  filteredJobs: Job[]
  savedJobs: string[]
  appliedJobs: string[]
  filters: FilterState
  activeSection: SectionView
  loading: boolean   // ← added
  error: string | null // ← added
}