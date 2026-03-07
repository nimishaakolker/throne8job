import { createSlice, createSelector, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '@/store'
import { Job, JobsState, FilterState, JobType, ExperienceLevel, WorkMode, SectionView } from '@/types/jobs'
import { MOCK_JOBS } from '@/lib/mockData'

const DEFAULT_FILTERS: FilterState = {
  search: '',
  types: [],
  experience: [],
  workMode: [],
  categories: [],
  location: '',
}

function runFilters(jobs: Job[], f: FilterState): Job[] {
  return jobs.filter((job) => {
    if (f.search) {
      const q = f.search.toLowerCase()
      const hit =
        job.title.toLowerCase().includes(q) ||
        job.company.toLowerCase().includes(q) ||
        job.location.toLowerCase().includes(q) ||
        job.tags.some((t) => t.toLowerCase().includes(q))
      if (!hit) return false
    }
    if (f.types.length && !f.types.includes(job.type)) return false
    if (f.experience.length && !f.experience.includes(job.experience)) return false
    if (f.workMode.length && !f.workMode.includes(job.workMode)) return false
    if (f.categories.length && !f.categories.includes(job.category)) return false
    if (f.location && !job.location.toLowerCase().includes(f.location.toLowerCase())) return false
    return true
  })
}

const initialState: JobsState = {
  jobs: MOCK_JOBS,
  filteredJobs: MOCK_JOBS,
  savedJobs: [],
  appliedJobs: [],
  filters: DEFAULT_FILTERS,
  activeSection: 'recommended',
}

const jobsSlice = createSlice({
  name: 'jobs',
  initialState,
  reducers: {
    setSearch(state, action: PayloadAction<string>) {
      state.filters.search = action.payload
      state.filteredJobs = runFilters(state.jobs, state.filters)
    },
    setLocation(state, action: PayloadAction<string>) {
      state.filters.location = action.payload
      state.filteredJobs = runFilters(state.jobs, state.filters)
    },
    toggleJobType(state, action: PayloadAction<JobType>) {
      const i = state.filters.types.indexOf(action.payload)
      i >= 0 ? state.filters.types.splice(i, 1) : state.filters.types.push(action.payload)
      state.filteredJobs = runFilters(state.jobs, state.filters)
    },
    toggleExperience(state, action: PayloadAction<ExperienceLevel>) {
      const i = state.filters.experience.indexOf(action.payload)
      i >= 0 ? state.filters.experience.splice(i, 1) : state.filters.experience.push(action.payload)
      state.filteredJobs = runFilters(state.jobs, state.filters)
    },
    toggleWorkMode(state, action: PayloadAction<WorkMode>) {
      const i = state.filters.workMode.indexOf(action.payload)
      i >= 0 ? state.filters.workMode.splice(i, 1) : state.filters.workMode.push(action.payload)
      state.filteredJobs = runFilters(state.jobs, state.filters)
    },
    toggleCategory(state, action: PayloadAction<string>) {
      const i = state.filters.categories.indexOf(action.payload)
      i >= 0 ? state.filters.categories.splice(i, 1) : state.filters.categories.push(action.payload)
      state.filteredJobs = runFilters(state.jobs, state.filters)
    },
    clearFilters(state) {
      state.filters = DEFAULT_FILTERS
      state.filteredJobs = state.jobs
    },
    toggleSaveJob(state, action: PayloadAction<string>) {
      const i = state.savedJobs.indexOf(action.payload)
      i >= 0 ? state.savedJobs.splice(i, 1) : state.savedJobs.push(action.payload)
    },
    applyToJob(state, action: PayloadAction<string>) {
      if (!state.appliedJobs.includes(action.payload)) {
        state.appliedJobs.push(action.payload)
      }
    },
    setActiveSection(state, action: PayloadAction<SectionView>) {
      state.activeSection = action.payload
    },
  },
})

export const {
  setSearch, setLocation, toggleJobType, toggleExperience,
  toggleWorkMode, toggleCategory, clearFilters,
  toggleSaveJob, applyToJob, setActiveSection,
} = jobsSlice.actions

export default jobsSlice.reducer

export const selectAllJobs       = (state: RootState) => state.jobs.jobs
export const selectFilteredJobs  = (state: RootState) => state.jobs.filteredJobs
export const selectFilters       = (state: RootState) => state.jobs.filters
export const selectSavedJobIds   = (state: RootState) => state.jobs.savedJobs
export const selectAppliedJobIds = (state: RootState) => state.jobs.appliedJobs
export const selectActiveSection = (state: RootState) => state.jobs.activeSection

export const selectActiveFilterCount = createSelector(
  selectFilters,
  (f) => f.types.length + f.experience.length + f.workMode.length + f.categories.length + (f.location ? 1 : 0)
)
export const selectFeaturedJobs = createSelector(
  selectAllJobs, (jobs) => jobs.filter((j) => j.featured)
)
export const selectRecentJobs = createSelector(
  selectAllJobs,
  (jobs) => [...jobs].sort((a, b) => new Date(b.postedAt).getTime() - new Date(a.postedAt).getTime()).slice(0, 6)
)
export const selectSavedJobObjects = createSelector(
  selectAllJobs, selectSavedJobIds,
  (jobs, ids) => jobs.filter((j) => ids.includes(j.id))
)
export const selectAppliedJobObjects = createSelector(
  selectAllJobs, selectAppliedJobIds,
  (jobs, ids) => jobs.filter((j) => ids.includes(j.id))
)
export const selectJobById = (id: string) =>
  createSelector(selectAllJobs, (jobs) => jobs.find((j) => j.id === id))