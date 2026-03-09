'use client';
import Link from 'next/link';
import { memo } from 'react';
import { useJobs } from '@/hooks/useJobs';
import { Job } from '@/types/jobs';

const LOGO_COLORS: Record<string, string> = {
  T8: 'from-violet-600 to-blue-600', NL: 'from-blue-600 to-cyan-600',
  OR: 'from-orange-500 to-amber-500', DC: 'from-emerald-600 to-teal-600',
  FM: 'from-pink-600 to-rose-600', PL: 'from-cyan-600 to-blue-600',
  LC: 'from-amber-600 to-orange-600', ST: 'from-slate-600 to-zinc-600',
};

const WORK_MODE_STYLES: Record<string, string> = {
  remote: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  hybrid: 'bg-violet-500/10 text-violet-400 border-violet-500/20',
  onsite: 'bg-orange-500/10 text-orange-400 border-orange-500/20',
};

function formatSalary(min: number, max: number) {
  const fmt = (n: number) => `$${Math.round(n / 1000)}k`;
  return `${fmt(min)} – ${fmt(max)}`;
}

const AppliedJobRow = memo(function AppliedJobRow({ job }: { job: Job }) {
  return (
    <Link href={`/jobs/${job.id}`} className="group block">
      <div className="bg-[#0a0a0f] border border-white/[0.06] rounded-2xl p-4 hover:border-violet-500/25 hover:shadow-[0_0_20px_rgba(139,92,246,0.06)] transition-all">
        <div className="flex items-center gap-4">
          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${LOGO_COLORS[job.companyLogo] ?? 'from-slate-600 to-zinc-700'} flex items-center justify-center text-white font-black text-sm shrink-0`}>
            {job.companyLogo}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-2">
              <div>
                <p className="text-xs text-zinc-500 font-medium">{job.company}</p>
                <h3 className="text-white font-semibold text-sm group-hover:text-violet-300 transition-colors">{job.title}</h3>
              </div>
              <span className="shrink-0 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[11px] font-bold">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                Applied
              </span>
            </div>
            <div className="flex items-center gap-3 mt-2 text-xs text-zinc-600 flex-wrap">
              <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full border text-xs font-medium ${WORK_MODE_STYLES[job.workMode]}`}>
                <span className="w-1.5 h-1.5 rounded-full bg-current" />
                {job.workMode.charAt(0).toUpperCase() + job.workMode.slice(1)}
              </span>
              <span>{job.location}</span>
              <span className="text-zinc-500 font-semibold">{formatSalary(job.salary.min, job.salary.max)}</span>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-1.5 mt-3 ml-16">
          {job.tags.slice(0, 4).map((tag) => (
            <span key={tag} className="px-2 py-0.5 rounded-md text-[11px] bg-violet-500/8 text-violet-300/70 border border-violet-500/10 font-medium">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
});

export default function AppliedPage() {
  const { appliedJobObjects, appliedCount } = useJobs();

  const thisWeekCount = appliedJobObjects.filter(j => {
    const d = new Date(j.postedAt);
    return (Date.now() - d.getTime()) < 7 * 86400000;
  }).length;

  const categoryCount = new Set(appliedJobObjects.map(j => j.category)).size;

  return (
    <div className="min-h-screen bg-[#060609]">
      <header className="sticky top-0 z-50 border-b border-white/[0.05] bg-[#060609]/80 backdrop-blur-xl">
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center gap-4">
          <Link href="/jobs" className="flex items-center gap-2 text-zinc-500 hover:text-zinc-300 transition-colors text-sm font-medium">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Browse Jobs
          </Link>
          <div className="h-4 w-px bg-white/[0.08]" />
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-gradient-to-br from-violet-600 to-blue-600 flex items-center justify-center">
              <span className="text-white font-black text-[9px]">T8</span>
            </div>
            <span className="text-zinc-500 text-sm font-medium">throne8 / Applied Jobs</span>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-10">
        <div className="mb-8">
          <p className="text-[11px] font-bold text-violet-400 uppercase tracking-[0.2em] mb-2">— Your applications</p>
          <h1 className="text-[32px] font-black text-white leading-tight tracking-tight">
            Applied Jobs
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-blue-400">.</span>
          </h1>
          <p className="text-zinc-600 text-sm mt-1.5">
            {appliedCount > 0 ? `${appliedCount} application${appliedCount === 1 ? '' : 's'} tracked` : 'No applications yet'}
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 mb-8">
          {[
            { label: 'Total Applied', value: appliedCount, color: 'text-violet-400' },
            { label: 'This Week',     value: thisWeekCount, color: 'text-blue-400' },
            { label: 'Categories',   value: categoryCount, color: 'text-emerald-400' },
          ].map(({ label, value, color }) => (
            <div key={label} className="bg-[#0a0a0f] border border-white/[0.06] rounded-2xl px-5 py-4">
              <p className={`text-[28px] font-black leading-none ${color}`}>{value}</p>
              <p className="text-[10px] text-zinc-600 font-semibold mt-1.5 uppercase tracking-[0.1em]">{label}</p>
            </div>
          ))}
        </div>

        {appliedCount === 0 ? (
          <div className="text-center py-20 bg-[#0a0a0f] border border-white/[0.05] rounded-2xl">
            <p className="text-4xl mb-4">◉</p>
            <p className="text-white font-semibold text-lg mb-1">No applications yet</p>
            <p className="text-zinc-600 text-sm mb-6">Browse open roles and start applying</p>
            <Link href="/jobs" className="inline-flex items-center gap-2 px-5 py-2.5 bg-violet-600 hover:bg-violet-500 text-white text-sm font-bold rounded-xl transition-all">
              Browse Jobs →
            </Link>
          </div>
        ) : (
          <div className="flex flex-col gap-3">
            {appliedJobObjects.map((job) => (
              <AppliedJobRow key={job.id} job={job} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}