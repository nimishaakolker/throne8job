import { useCallback } from 'react'
import { useAppDispatch, useAppSelector } from '@/store'
import {
  setSearch, setLocation,
  toggleFilterType,       // was: toggleJobType
  toggleFilterExperience, // was: toggleExperience
  toggleFilterWorkMode,   // was: toggleWorkMode
  toggleFilterCategory,   // was: toggleCategory
  clearFilters,
  toggleSaveJob, applyToJob, setActiveSection,
  selectFilteredJobs, selectFilters,
  selectSavedJobs,        // was: selectSavedJobIds
  selectAppliedJobs,      // was: selectAppliedJobIds
  selectFeaturedJobs, selectRecentJobs,
  selectSavedJobObjects, selectAppliedJobObjects,
  selectActiveSection,
} from '@/store/slices/jobsSlice'
import { JobType, ExperienceLevel, WorkMode } from '@/types/jobs'

export function useJobs() {
  const dispatch = useAppDispatch()

  const filteredJobs      = useAppSelector(selectFilteredJobs)
  const featuredJobs      = useAppSelector(selectFeaturedJobs)
  const recentJobs        = useAppSelector(selectRecentJobs)
  const filters           = useAppSelector(selectFilters)
  const savedJobIds       = useAppSelector(selectSavedJobs)
  const appliedJobIds     = useAppSelector(selectAppliedJobs)
  const savedJobObjects   = useAppSelector(selectSavedJobObjects)
  const appliedJobObjects = useAppSelector(selectAppliedJobObjects)
  const activeSection     = useAppSelector(selectActiveSection)

  const handleSearch         = useCallback((v: string)          => dispatch(setSearch(v)),               [dispatch])
  const handleLocation       = useCallback((v: string)          => dispatch(setLocation(v)),             [dispatch])
  const handleToggleType     = useCallback((v: JobType)         => dispatch(toggleFilterType(v)),        [dispatch])
  const handleToggleExp      = useCallback((v: ExperienceLevel) => dispatch(toggleFilterExperience(v)),  [dispatch])
  const handleToggleWorkMode = useCallback((v: WorkMode)        => dispatch(toggleFilterWorkMode(v)),    [dispatch])
  const handleToggleCategory = useCallback((v: string)          => dispatch(toggleFilterCategory(v)),    [dispatch])
  const handleClearFilters   = useCallback(()                   => dispatch(clearFilters()),             [dispatch])
  const handleToggleSave     = useCallback((id: string)         => dispatch(toggleSaveJob(id)),          [dispatch])
  const handleApply          = useCallback((id: string)         => dispatch(applyToJob(id)),             [dispatch])
  const handleSetSection     = useCallback((s: 'recommended' | 'recent' | 'saved' | 'applied') => dispatch(setActiveSection(s)), [dispatch])

  const isJobSaved   = useCallback((id: string) => savedJobIds.includes(id),   [savedJobIds])
  const isJobApplied = useCallback((id: string) => appliedJobIds.includes(id), [appliedJobIds])

  const activeFilterCount =
    filters.types.length +
    filters.experience.length +
    filters.workMode.length +
    filters.categories.length +
    (filters.location ? 1 : 0)

  const isFiltering =
    !!filters.search ||
    filters.types.length > 0 ||
    filters.experience.length > 0 ||
    filters.workMode.length > 0 ||
    filters.categories.length > 0 ||
    !!filters.location

  return {
    filteredJobs, featuredJobs, recentJobs,
    filters, activeSection, activeFilterCount,
    savedJobObjects, appliedJobObjects,
    savedCount: savedJobIds.length,
    appliedCount: appliedJobIds.length,
    isFiltering,
    handleSearch, handleLocation,
    handleToggleType, handleToggleExp, handleToggleWorkMode,
    handleToggleCategory, handleClearFilters,
    handleToggleSave, handleApply, handleSetSection,
    isJobSaved, isJobApplied,
  }
}