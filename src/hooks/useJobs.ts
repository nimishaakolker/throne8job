import { useSelector, useDispatch } from 'react-redux'
import {
  selectFilteredJobs, selectFeaturedJobs, selectRecentJobs,
  selectSavedJobObjects, selectAppliedJobObjects,
  selectSavedJobIds, selectApplications,
  selectFilters, selectActiveSection,
  setSearch, setLocation,
  toggleFilterType, toggleFilterExperience, toggleFilterWorkMode, toggleFilterCategory,
  clearFilters, toggleSaveJob, applyToJob, updateApplicationStatus, setActiveSection,
} from '@/store/slices/jobsSlice'
import { JobType, ExperienceLevel, WorkMode, SectionView, ApplicationStatus } from '@/types/jobs'

export function useJobs() {
  const dispatch = useDispatch()

  const filters           = useSelector(selectFilters)
  const filteredJobs      = useSelector(selectFilteredJobs)
  const featuredJobs      = useSelector(selectFeaturedJobs)
  const recentJobs        = useSelector(selectRecentJobs)
  const savedJobObjects   = useSelector(selectSavedJobObjects)
  const appliedJobObjects = useSelector(selectAppliedJobObjects)
  const applications      = useSelector(selectApplications)
  const savedJobIds       = useSelector(selectSavedJobIds)
  const activeSection     = useSelector(selectActiveSection)

  const isFiltering =
    !!filters.search || !!filters.location ||
    filters.types.length > 0 || filters.experience.length > 0 ||
    filters.workMode.length > 0 || filters.categories.length > 0 ||
    filters.salaryMin > 0 || filters.salaryMax < 500000

  const activeFilterCount =
    filters.types.length + filters.experience.length +
    filters.workMode.length + filters.categories.length +
    (filters.search ? 1 : 0) + (filters.location ? 1 : 0) +
    (filters.salaryMin > 0 || filters.salaryMax < 500000 ? 1 : 0)

  return {
    // state
    filters,
    filteredJobs,
    featuredJobs,
    recentJobs,
    savedJobObjects,
    appliedJobObjects,
    applications,
    activeSection,
    isFiltering,
    activeFilterCount,
    savedCount:   savedJobObjects.length,
    appliedCount: appliedJobObjects.length,

    // helpers
    isJobSaved:   (id: string) => savedJobIds.includes(id),
    isJobApplied: (id: string) => applications.some(a => a.jobId === id),
    getJobStatus: (id: string) => applications.find(a => a.jobId === id)?.status ?? null,
    getAppliedAt: (id: string) => applications.find(a => a.jobId === id)?.appliedAt ?? null,

    // actions
    handleSearch:         (q: string)          => dispatch(setSearch(q)),
    handleLocation:       (v: string)          => dispatch(setLocation(v)),
    handleToggleType:     (t: JobType)          => dispatch(toggleFilterType(t)),
    handleToggleExp:      (e: ExperienceLevel)  => dispatch(toggleFilterExperience(e)),
    handleToggleWorkMode: (m: WorkMode)         => dispatch(toggleFilterWorkMode(m)),
    handleToggleCategory: (c: string)           => dispatch(toggleFilterCategory(c)),
    handleClearFilters:   ()                    => dispatch(clearFilters()),
    handleToggleSave:     (id: string)          => dispatch(toggleSaveJob(id)),
    handleApply:          (id: string)          => dispatch(applyToJob(id)),
    handleUpdateStatus:   (jobId: string, status: ApplicationStatus) =>
                            dispatch(updateApplicationStatus({ jobId, status })),
    handleSetSection:     (s: SectionView)      => dispatch(setActiveSection(s)),
  }
}