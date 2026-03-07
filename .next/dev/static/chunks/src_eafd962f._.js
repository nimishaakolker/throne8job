(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/lib/mockData.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CATEGORIES",
    ()=>CATEGORIES,
    "MOCK_JOBS",
    ()=>MOCK_JOBS
]);
const CATEGORIES = [
    'Web Development',
    'Marketing'
];
const MOCK_JOBS = [
    {
        id: '1',
        title: 'Senior Product Designer',
        company: 'Throne8',
        companyLogo: 'T8',
        location: 'San Francisco, CA',
        salary: {
            min: 130000,
            max: 180000,
            currency: 'USD'
        },
        type: 'full-time',
        experience: 'senior',
        workMode: 'hybrid',
        tags: [
            'Figma',
            'Design Systems',
            'User Research',
            'Prototyping'
        ],
        description: "We're building the future of digital commerce and need a visionary designer to lead our product experience. You'll shape interfaces used by millions, working at the intersection of art and technology.",
        responsibilities: [
            'Lead end-to-end design for core product features',
            'Build and maintain our design system',
            'Collaborate with engineers and PMs in fast-paced sprints',
            'Conduct user research and usability testing',
            'Mentor junior designers'
        ],
        requirements: [
            '5+ years of product design experience',
            'Expert-level Figma proficiency',
            'Strong portfolio demonstrating complex problem solving',
            'Experience with design systems at scale'
        ],
        benefits: [
            'Equity package',
            'Remote flexibility',
            '$5k equipment budget',
            'Health & dental',
            'Unlimited PTO'
        ],
        postedAt: '2025-03-01',
        deadline: '2025-04-15',
        applicants: 142,
        featured: true,
        category: 'Design'
    },
    {
        id: '2',
        title: 'Staff Software Engineer',
        company: 'Nexus Labs',
        companyLogo: 'NL',
        location: 'New York, NY',
        salary: {
            min: 200000,
            max: 280000,
            currency: 'USD'
        },
        type: 'full-time',
        experience: 'lead',
        workMode: 'remote',
        tags: [
            'TypeScript',
            'React',
            'Node.js',
            'AWS',
            'GraphQL'
        ],
        description: 'Join our elite engineering team building distributed systems that process billions of events daily. You will architect solutions that define how the next generation of commerce works.',
        responsibilities: [
            'Architect and implement scalable backend services',
            'Drive technical roadmap and standards',
            'Lead cross-functional engineering initiatives',
            'Mentor engineers across multiple teams'
        ],
        requirements: [
            '8+ years software engineering experience',
            'Deep expertise in distributed systems',
            'Strong TypeScript and React skills',
            'Experience leading technical teams'
        ],
        benefits: [
            'Top-tier equity',
            'Full remote',
            '$10k learning budget',
            'Comprehensive health',
            '401k matching'
        ],
        postedAt: '2025-03-03',
        deadline: '2025-04-20',
        applicants: 89,
        featured: true,
        category: 'Engineering'
    },
    {
        id: '3',
        title: 'Growth Marketing Lead',
        company: 'Orbit',
        companyLogo: 'OR',
        location: 'Austin, TX',
        salary: {
            min: 95000,
            max: 135000,
            currency: 'USD'
        },
        type: 'full-time',
        experience: 'mid',
        workMode: 'hybrid',
        tags: [
            'SEO',
            'Paid Ads',
            'Analytics',
            'A/B Testing',
            'Email'
        ],
        description: "Scale Orbit's user acquisition engine from 100k to 1M users. You'll own the full funnel, run experiments relentlessly, and build a data-driven marketing machine.",
        responsibilities: [
            'Own user acquisition across all channels',
            'Run growth experiments and document learnings',
            'Build performance dashboards and reports',
            'Manage $2M+ annual marketing budget'
        ],
        requirements: [
            '4+ years growth marketing experience',
            'Proven track record scaling user growth',
            'Strong analytical and SQL skills',
            'Experience with major ad platforms'
        ],
        benefits: [
            'Performance bonuses',
            'Flexible PTO',
            'Remote Fridays',
            'Health benefits',
            'Team retreats'
        ],
        postedAt: '2025-03-04',
        deadline: '2025-04-10',
        applicants: 203,
        featured: false,
        category: 'Marketing'
    },
    {
        id: '4',
        title: 'AI/ML Research Engineer',
        company: 'Deepmind Co',
        companyLogo: 'DC',
        location: 'Seattle, WA',
        salary: {
            min: 180000,
            max: 260000,
            currency: 'USD'
        },
        type: 'full-time',
        experience: 'senior',
        workMode: 'onsite',
        tags: [
            'Python',
            'PyTorch',
            'LLMs',
            'MLOps',
            'CUDA'
        ],
        description: "Push the boundaries of what's possible with AI. Work on frontier models, novel architectures, and deploy systems that define the cutting edge of machine intelligence.",
        responsibilities: [
            'Research and implement novel ML architectures',
            'Scale training pipelines to thousands of GPUs',
            'Publish research and represent at conferences',
            'Collaborate with product to ship AI features'
        ],
        requirements: [
            'PhD or equivalent experience in ML/CS',
            'Deep expertise in PyTorch',
            'Published research record preferred',
            'Experience with large-scale distributed training'
        ],
        benefits: [
            'Research budget',
            'Conference attendance',
            'Top-tier equity',
            'Onsite meals',
            'Gym stipend'
        ],
        postedAt: '2025-02-28',
        deadline: '2025-04-30',
        applicants: 67,
        featured: true,
        category: 'Engineering'
    },
    {
        id: '5',
        title: 'Head of Product',
        company: 'Forma',
        companyLogo: 'FM',
        location: 'Los Angeles, CA',
        salary: {
            min: 175000,
            max: 230000,
            currency: 'USD'
        },
        type: 'full-time',
        experience: 'executive',
        workMode: 'hybrid',
        tags: [
            'Product Strategy',
            'Roadmapping',
            'OKRs',
            'Agile',
            'B2B SaaS'
        ],
        description: "Define the product vision for Forma's B2B SaaS platform. Lead a team of 12 PMs, work directly with our CEO, and shape the future of workplace experience software.",
        responsibilities: [
            'Own product vision, strategy and roadmap',
            'Lead and grow a team of 12 product managers',
            'Work with engineering on technical strategy',
            'Present to board and major customers'
        ],
        requirements: [
            '10+ years product management experience',
            'Experience leading large PM teams',
            'Deep B2B SaaS expertise',
            'Track record of 0-to-1 and 1-to-n products'
        ],
        benefits: [
            'Executive equity',
            'Board exposure',
            'Relocation assistance',
            'Premium health',
            'Company car'
        ],
        postedAt: '2025-03-05',
        deadline: '2025-05-01',
        applicants: 44,
        featured: false,
        category: 'Product'
    },
    {
        id: '6',
        title: 'Frontend Engineer',
        company: 'Pulse',
        companyLogo: 'PL',
        location: 'Remote',
        salary: {
            min: 110000,
            max: 155000,
            currency: 'USD'
        },
        type: 'full-time',
        experience: 'mid',
        workMode: 'remote',
        tags: [
            'React',
            'Next.js',
            'TypeScript',
            'Tailwind',
            'WebGL'
        ],
        description: "Build beautiful, performant interfaces for Pulse's real-time analytics platform. You'll push the web to its limits with data visualizations and 60fps interactions.",
        responsibilities: [
            'Build and maintain React component library',
            'Implement complex data visualizations',
            'Optimize Core Web Vitals and performance',
            'Collaborate closely with designers'
        ],
        requirements: [
            '4+ years React experience',
            'Expert TypeScript skills',
            'Experience with data visualization libraries',
            'Strong eye for design and UX'
        ],
        benefits: [
            'Full remote',
            'Home office stipend',
            'Open source time',
            'Health benefits',
            'Flexible hours'
        ],
        postedAt: '2025-03-06',
        deadline: '2025-04-25',
        applicants: 178,
        featured: false,
        category: 'Engineering'
    },
    {
        id: '7',
        title: 'Brand Designer',
        company: 'Luxe Commerce',
        companyLogo: 'LC',
        location: 'Miami, FL',
        salary: {
            min: 75000,
            max: 110000,
            currency: 'USD'
        },
        type: 'full-time',
        experience: 'mid',
        workMode: 'onsite',
        tags: [
            'Brand Identity',
            'Motion Design',
            'After Effects',
            'Illustration'
        ],
        description: 'Define the visual identity for one of the fastest-growing luxury e-commerce brands. Craft brand experiences across digital, print, and physical spaces.',
        responsibilities: [
            'Own brand identity and visual language',
            'Create campaigns across all brand touchpoints',
            'Develop motion graphics and video content',
            'Collaborate with external creative agencies'
        ],
        requirements: [
            '3+ years brand design experience',
            'Strong motion design skills',
            'Luxury brand experience preferred',
            'Excellent portfolio'
        ],
        benefits: [
            'Employee discounts',
            'Creative budget',
            'Health benefits',
            'Miami office perks',
            'Team events'
        ],
        postedAt: '2025-03-02',
        deadline: '2025-04-12',
        applicants: 312,
        featured: false,
        category: 'Design'
    },
    {
        id: '8',
        title: 'DevOps / Platform Engineer',
        company: 'Strata',
        companyLogo: 'ST',
        location: 'Chicago, IL',
        salary: {
            min: 130000,
            max: 170000,
            currency: 'USD'
        },
        type: 'full-time',
        experience: 'senior',
        workMode: 'hybrid',
        tags: [
            'Kubernetes',
            'Terraform',
            'AWS',
            'CI/CD',
            'Go'
        ],
        description: "Build and scale the infrastructure backbone powering Strata's financial data platform. Design systems that guarantee 99.999% uptime for critical financial operations.",
        responsibilities: [
            'Design and manage Kubernetes infrastructure',
            'Build CI/CD pipelines and developer tooling',
            'Implement security and compliance systems',
            'On-call rotation for critical systems'
        ],
        requirements: [
            '6+ years DevOps/SRE experience',
            'Deep Kubernetes expertise',
            'Strong Terraform and IaC skills',
            'Financial services experience a plus'
        ],
        benefits: [
            'On-call pay',
            'Certification budget',
            'Health benefits',
            'Hybrid schedule',
            'Strong 401k'
        ],
        postedAt: '2025-03-01',
        deadline: '2025-04-20',
        applicants: 56,
        featured: false,
        category: 'Engineering'
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/store/slices/jobsSlice.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "applyToJob",
    ()=>applyToJob,
    "clearFilters",
    ()=>clearFilters,
    "default",
    ()=>__TURBOPACK__default__export__,
    "selectActiveFilterCount",
    ()=>selectActiveFilterCount,
    "selectActiveSection",
    ()=>selectActiveSection,
    "selectAllJobs",
    ()=>selectAllJobs,
    "selectAppliedJobIds",
    ()=>selectAppliedJobIds,
    "selectAppliedJobObjects",
    ()=>selectAppliedJobObjects,
    "selectFeaturedJobs",
    ()=>selectFeaturedJobs,
    "selectFilteredJobs",
    ()=>selectFilteredJobs,
    "selectFilters",
    ()=>selectFilters,
    "selectJobById",
    ()=>selectJobById,
    "selectRecentJobs",
    ()=>selectRecentJobs,
    "selectSavedJobIds",
    ()=>selectSavedJobIds,
    "selectSavedJobObjects",
    ()=>selectSavedJobObjects,
    "setActiveSection",
    ()=>setActiveSection,
    "setLocation",
    ()=>setLocation,
    "setSearch",
    ()=>setSearch,
    "toggleCategory",
    ()=>toggleCategory,
    "toggleExperience",
    ()=>toggleExperience,
    "toggleJobType",
    ()=>toggleJobType,
    "toggleSaveJob",
    ()=>toggleSaveJob,
    "toggleWorkMode",
    ()=>toggleWorkMode
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reselect$2f$dist$2f$reselect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/reselect/dist/reselect.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/mockData.ts [app-client] (ecmascript)");
;
;
const DEFAULT_FILTERS = {
    search: '',
    types: [],
    experience: [],
    workMode: [],
    categories: [],
    location: ''
};
function runFilters(jobs, f) {
    return jobs.filter((job)=>{
        if (f.search) {
            const q = f.search.toLowerCase();
            const hit = job.title.toLowerCase().includes(q) || job.company.toLowerCase().includes(q) || job.location.toLowerCase().includes(q) || job.tags.some((t)=>t.toLowerCase().includes(q));
            if (!hit) return false;
        }
        if (f.types.length && !f.types.includes(job.type)) return false;
        if (f.experience.length && !f.experience.includes(job.experience)) return false;
        if (f.workMode.length && !f.workMode.includes(job.workMode)) return false;
        if (f.categories.length && !f.categories.includes(job.category)) return false;
        if (f.location && !job.location.toLowerCase().includes(f.location.toLowerCase())) return false;
        return true;
    });
}
const initialState = {
    jobs: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MOCK_JOBS"],
    filteredJobs: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MOCK_JOBS"],
    savedJobs: [],
    appliedJobs: [],
    filters: DEFAULT_FILTERS,
    activeSection: 'recommended'
};
const jobsSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: 'jobs',
    initialState,
    reducers: {
        setSearch (state, action) {
            state.filters.search = action.payload;
            state.filteredJobs = runFilters(state.jobs, state.filters);
        },
        setLocation (state, action) {
            state.filters.location = action.payload;
            state.filteredJobs = runFilters(state.jobs, state.filters);
        },
        toggleJobType (state, action) {
            const i = state.filters.types.indexOf(action.payload);
            i >= 0 ? state.filters.types.splice(i, 1) : state.filters.types.push(action.payload);
            state.filteredJobs = runFilters(state.jobs, state.filters);
        },
        toggleExperience (state, action) {
            const i = state.filters.experience.indexOf(action.payload);
            i >= 0 ? state.filters.experience.splice(i, 1) : state.filters.experience.push(action.payload);
            state.filteredJobs = runFilters(state.jobs, state.filters);
        },
        toggleWorkMode (state, action) {
            const i = state.filters.workMode.indexOf(action.payload);
            i >= 0 ? state.filters.workMode.splice(i, 1) : state.filters.workMode.push(action.payload);
            state.filteredJobs = runFilters(state.jobs, state.filters);
        },
        toggleCategory (state, action) {
            const i = state.filters.categories.indexOf(action.payload);
            i >= 0 ? state.filters.categories.splice(i, 1) : state.filters.categories.push(action.payload);
            state.filteredJobs = runFilters(state.jobs, state.filters);
        },
        clearFilters (state) {
            state.filters = DEFAULT_FILTERS;
            state.filteredJobs = state.jobs;
        },
        toggleSaveJob (state, action) {
            const i = state.savedJobs.indexOf(action.payload);
            i >= 0 ? state.savedJobs.splice(i, 1) : state.savedJobs.push(action.payload);
        },
        applyToJob (state, action) {
            if (!state.appliedJobs.includes(action.payload)) {
                state.appliedJobs.push(action.payload);
            }
        },
        setActiveSection (state, action) {
            state.activeSection = action.payload;
        }
    }
});
const { setSearch, setLocation, toggleJobType, toggleExperience, toggleWorkMode, toggleCategory, clearFilters, toggleSaveJob, applyToJob, setActiveSection } = jobsSlice.actions;
const __TURBOPACK__default__export__ = jobsSlice.reducer;
const selectAllJobs = (state)=>state.jobs.jobs;
const selectFilteredJobs = (state)=>state.jobs.filteredJobs;
const selectFilters = (state)=>state.jobs.filters;
const selectSavedJobIds = (state)=>state.jobs.savedJobs;
const selectAppliedJobIds = (state)=>state.jobs.appliedJobs;
const selectActiveSection = (state)=>state.jobs.activeSection;
const selectActiveFilterCount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reselect$2f$dist$2f$reselect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSelector"])(selectFilters, (f)=>f.types.length + f.experience.length + f.workMode.length + f.categories.length + (f.location ? 1 : 0));
const selectFeaturedJobs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reselect$2f$dist$2f$reselect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSelector"])(selectAllJobs, (jobs)=>jobs.filter((j)=>j.featured));
const selectRecentJobs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reselect$2f$dist$2f$reselect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSelector"])(selectAllJobs, (jobs)=>[
        ...jobs
    ].sort((a, b)=>new Date(b.postedAt).getTime() - new Date(a.postedAt).getTime()).slice(0, 6));
const selectSavedJobObjects = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reselect$2f$dist$2f$reselect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSelector"])(selectAllJobs, selectSavedJobIds, (jobs, ids)=>jobs.filter((j)=>ids.includes(j.id)));
const selectAppliedJobObjects = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reselect$2f$dist$2f$reselect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSelector"])(selectAllJobs, selectAppliedJobIds, (jobs, ids)=>jobs.filter((j)=>ids.includes(j.id)));
const selectJobById = (id)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reselect$2f$dist$2f$reselect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSelector"])(selectAllJobs, (jobs)=>jobs.find((j)=>j.id === id));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/store/index.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "store",
    ()=>store,
    "useAppDispatch",
    ()=>useAppDispatch,
    "useAppSelector",
    ()=>useAppSelector
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$slices$2f$jobsSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/slices/jobsSlice.ts [app-client] (ecmascript)");
;
;
;
const store = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["configureStore"])({
    reducer: {
        jobs: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$slices$2f$jobsSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    },
    devTools: ("TURBOPACK compile-time value", "development") !== 'production'
});
const useAppDispatch = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDispatch"];
const useAppSelector = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/store/Provider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ReduxProvider",
    ()=>ReduxProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/index.ts [app-client] (ecmascript)");
'use client';
;
;
;
function ReduxProvider({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Provider"], {
        store: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["store"],
        children: children
    }, void 0, false, {
        fileName: "[project]/src/store/Provider.tsx",
        lineNumber: 6,
        columnNumber: 10
    }, this);
}
_c = ReduxProvider;
var _c;
__turbopack_context__.k.register(_c, "ReduxProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_eafd962f._.js.map