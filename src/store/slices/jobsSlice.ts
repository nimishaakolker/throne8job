import { createSlice, PayloadAction, createSelector } from '@reduxjs/toolkit';
import { Job, JobsState, FilterState, JobType, ExperienceLevel, WorkMode } from '@/types/jobs';
import { MOCK_JOBS } from '@/lib/mockData';

const defaultFilters: FilterState = {
  search: '',
  types: [],
  experience: [],
  workMode: [],
  categories: [],
  salaryMin: 0,
  salaryMax: 500000,
  location: '',
};

const initialState: JobsState = {
  jobs: MOCK_JOBS,
  filteredJobs: MOCK_JOBS,
  savedJobs: ['2', '5'],   // Staff Software Engineer @ Nexus Labs, Head of Product @ Forma
  appliedJobs: ['1', '4'], // Senior Product Designer @ Throne8, AI/ML Research Engineer @ Deepmind
  filters: defaultFilters,
  activeSection: 'recommended',
  loading: false,
  error: null,
};

function applyFilters(jobs: Job[], filters: FilterState): Job[] {
  return jobs.filter((job) => {
    if (filters.search) {
      const q = filters.search.toLowerCase();
      const matches =
        job.title.toLowerCase().includes(q) ||
        job.company.toLowerCase().includes(q) ||
        job.tags.some((t) => t.toLowerCase().includes(q)) ||
        job.location.toLowerCase().includes(q);
      if (!matches) return false;
    }
    if (filters.types.length && !filters.types.includes(job.type)) return false;
    if (filters.experience.length && !filters.experience.includes(job.experience)) return false;
    if (filters.workMode.length && !filters.workMode.includes(job.workMode)) return false;
    if (filters.categories.length && !filters.categories.includes(job.category)) return false;
    if (job.salary.min < filters.salaryMin || job.salary.max > filters.salaryMax) return false;
    if (filters.location) {
      if (!job.location.toLowerCase().includes(filters.location.toLowerCase())) return false;
    }
    return true;
  });
}

const jobsSlice = createSlice({
  name: 'jobs',
  initialState,
  reducers: {
    setSearch(state, action: PayloadAction<string>) {
      state.filters.search = action.payload;
      state.filteredJobs = applyFilters(state.jobs, state.filters);
    },
    toggleFilterType(state, action: PayloadAction<JobType>) {
      const idx = state.filters.types.indexOf(action.payload);
      if (idx >= 0) state.filters.types.splice(idx, 1);
      else state.filters.types.push(action.payload);
      state.filteredJobs = applyFilters(state.jobs, state.filters);
    },
    toggleFilterExperience(state, action: PayloadAction<ExperienceLevel>) {
      const idx = state.filters.experience.indexOf(action.payload);
      if (idx >= 0) state.filters.experience.splice(idx, 1);
      else state.filters.experience.push(action.payload);
      state.filteredJobs = applyFilters(state.jobs, state.filters);
    },
    toggleFilterWorkMode(state, action: PayloadAction<WorkMode>) {
      const idx = state.filters.workMode.indexOf(action.payload);
      if (idx >= 0) state.filters.workMode.splice(idx, 1);
      else state.filters.workMode.push(action.payload);
      state.filteredJobs = applyFilters(state.jobs, state.filters);
    },
    toggleFilterCategory(state, action: PayloadAction<string>) {
      const idx = state.filters.categories.indexOf(action.payload);
      if (idx >= 0) state.filters.categories.splice(idx, 1);
      else state.filters.categories.push(action.payload);
      state.filteredJobs = applyFilters(state.jobs, state.filters);
    },
    setSalaryRange(state, action: PayloadAction<{ min: number; max: number }>) {
      state.filters.salaryMin = action.payload.min;
      state.filters.salaryMax = action.payload.max;
      state.filteredJobs = applyFilters(state.jobs, state.filters);
    },
    setLocation(state, action: PayloadAction<string>) {
      state.filters.location = action.payload;
      state.filteredJobs = applyFilters(state.jobs, state.filters);
    },
    clearFilters(state) {
      state.filters = defaultFilters;
      state.filteredJobs = state.jobs;
    },
    toggleSaveJob(state, action: PayloadAction<string>) {
      const idx = state.savedJobs.indexOf(action.payload);
      if (idx >= 0) state.savedJobs.splice(idx, 1);
      else state.savedJobs.push(action.payload);
    },
    applyToJob(state, action: PayloadAction<string>) {
      if (!state.appliedJobs.includes(action.payload)) {
        state.appliedJobs.push(action.payload);
      }
    },
    setActiveSection(state, action: PayloadAction<JobsState['activeSection']>) {
      state.activeSection = action.payload;
    },
  },
});

export const {
  setSearch,
  toggleFilterType,
  toggleFilterExperience,
  toggleFilterWorkMode,
  toggleFilterCategory,
  setSalaryRange,
  setLocation,
  clearFilters,
  toggleSaveJob,
  applyToJob,
  setActiveSection,
} = jobsSlice.actions;

export default jobsSlice.reducer;

// Selectors
export const selectAllJobs = (state: { jobs: JobsState }) => state.jobs.jobs;
export const selectFilteredJobs = (state: { jobs: JobsState }) => state.jobs.filteredJobs;
export const selectFilters = (state: { jobs: JobsState }) => state.jobs.filters;
export const selectSavedJobs = (state: { jobs: JobsState }) => state.jobs.savedJobs;
export const selectAppliedJobs = (state: { jobs: JobsState }) => state.jobs.appliedJobs;
export const selectActiveSection = (state: { jobs: JobsState }) => state.jobs.activeSection;

export const selectFeaturedJobs = createSelector(selectAllJobs, (jobs) => jobs.filter((j) => j.featured));
export const selectRecentJobs = createSelector(selectAllJobs, (jobs) =>
  [...jobs].sort((a, b) => new Date(b.postedAt).getTime() - new Date(a.postedAt).getTime()).slice(0, 6)
);
export const selectSavedJobObjects = createSelector(
  selectAllJobs,
  selectSavedJobs,
  (jobs, savedIds) => jobs.filter((j) => savedIds.includes(j.id))
);
export const selectAppliedJobObjects = createSelector(
  selectAllJobs,
  selectAppliedJobs,
  (jobs, appliedIds) => jobs.filter((j) => appliedIds.includes(j.id))
);
export const selectJobById = (id: string) =>
  createSelector(selectAllJobs, (jobs) => jobs.find((j) => j.id === id));