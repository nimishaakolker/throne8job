'use client'
import { useState } from 'react'
import Link from 'next/link'

// ── Types ──────────────────────────────────────────────────────────────────────
interface JobPostForm {
  // Company
  companyName: string
  companyWebsite: string
  companySize: string
  companyLogo: string   // file URL preview
  // Role
  title: string
  category: string
  workMode: 'remote' | 'hybrid' | 'onsite' | ''
  location: string
  salaryMin: string
  salaryMax: string
  currency: string
  // Details
  description: string
  requirements: string
  niceToHave: string
  // Tags
  tags: string[]
  tagInput: string
  // Apply
  applyType: 'link' | 'email'
  applyValue: string
  // Meta
  plan: 'basic' | 'featured' | 'premium'
}

const CATEGORIES = [
  'Engineering', 'Product', 'Design', 'Data & ML',
  'Marketing', 'Sales', 'Operations', 'Finance',
  'Legal', 'HR', 'Support', 'Other',
]

const COMPANY_SIZES = ['1–10', '11–50', '51–200', '201–500', '501–1000', '1000+']

const PLANS = [
  {
    id: 'basic',
    name: 'Basic',
    price: 'Free',
    desc: 'Standard listing for 30 days',
    perks: ['Listed in job feed', '30-day visibility', 'Up to 100 applicants'],
    color: '#6b5847',
    bg: 'white',
    border: '#e8e0d6',
  },
  {
    id: 'featured',
    name: 'Featured',
    price: '$199',
    desc: 'Stand out from the crowd',
    perks: ['Highlighted in feed', '60-day visibility', 'Unlimited applicants', 'Email to matched candidates'],
    color: '#4a3728',
    bg: '#fdf8f3',
    border: '#c9a882',
    popular: true,
  },
  {
    id: 'premium',
    name: 'Premium',
    price: '$499',
    desc: 'Maximum reach & screening',
    perks: ['Top of feed placement', '90-day visibility', 'Unlimited applicants', 'AI candidate matching', 'Dedicated support', 'Analytics dashboard'],
    color: '#2d1f14',
    bg: '#2d1f14',
    border: '#2d1f14',
    dark: true,
  },
] as const

// ── Step indicator ─────────────────────────────────────────────────────────────
function Steps({ current }: { current: number }) {
  const steps = ['Company', 'Role', 'Details', 'Plan & Post']
  return (
    <div className="flex items-center gap-0 mb-10">
      {steps.map((s, i) => (
        <div key={s} className="flex items-center">
          <div className="flex items-center gap-2">
            <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all
              ${i < current ? 'bg-[#4a3728] text-[#e0d8cf]'
              : i === current ? 'bg-[#2d1f14] text-[#e0d8cf] ring-4 ring-[#e0d8cf]'
              : 'bg-[#e8e0d6] text-[#9d8876]'}`}>
              {i < current ? '✓' : i + 1}
            </div>
            <span className={`text-xs font-semibold hidden sm:block
              ${i === current ? 'text-[#2d1f14]' : i < current ? 'text-[#4a3728]' : 'text-[#9d8876]'}`}>
              {s}
            </span>
          </div>
          {i < steps.length - 1 && (
            <div className={`w-12 h-px mx-3 ${i < current ? 'bg-[#4a3728]' : 'bg-[#e8e0d6]'}`} />
          )}
        </div>
      ))}
    </div>
  )
}

// ── Field components ───────────────────────────────────────────────────────────
function Field({ label, hint, required, children }: { label: string; hint?: string; required?: boolean; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-semibold text-[#2d1f14]">
        {label} {required && <span className="text-rose-500">*</span>}
      </label>
      {hint && <p className="text-xs text-[#9d8876] -mt-1">{hint}</p>}
      {children}
    </div>
  )
}

const inputCls = "w-full px-3.5 py-2.5 rounded-xl border border-[#e8e0d6] bg-white text-[#2d1f14] text-sm placeholder:text-[#c4b8ab] focus:outline-none focus:border-[#4a3728] focus:ring-2 focus:ring-[#4a3728]/10 transition-all"
const textareaCls = inputCls + " resize-none"

// ── Main page ──────────────────────────────────────────────────────────────────
export default function PostJobPage() {
  const [step, setStep] = useState(0)
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState<JobPostForm>({
    companyName: '', companyWebsite: '', companySize: '', companyLogo: '',
    title: '', category: '', workMode: '', location: '',
    salaryMin: '', salaryMax: '', currency: 'USD',
    description: '', requirements: '', niceToHave: '',
    tags: [], tagInput: '',
    applyType: 'link', applyValue: '',
    plan: 'featured',
  })

  const set = (k: keyof JobPostForm, v: any) => setForm(p => ({ ...p, [k]: v }))

  function addTag(e: React.KeyboardEvent) {
    if ((e.key === 'Enter' || e.key === ',') && form.tagInput.trim()) {
      e.preventDefault()
      if (form.tags.length < 8 && !form.tags.includes(form.tagInput.trim())) {
        set('tags', [...form.tags, form.tagInput.trim()])
      }
      set('tagInput', '')
    }
  }

  function removeTag(t: string) { set('tags', form.tags.filter(x => x !== t)) }

  function next() { setStep(s => Math.min(s + 1, 3)) }
  function back() { setStep(s => Math.max(s - 1, 0)) }

  function submit() {
    // In production: POST to /api/jobs with form data
    // Handles: validation, Stripe payment for paid plans, email confirmation,
    // queue to moderation, then publish to job feed
    console.log('Submitting job post:', form)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-[#f7f3ef] flex items-center justify-center px-6">
        <div className="text-center max-w-md">
          <div className="w-16 h-16 bg-[#2d1f14] rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl">✓</div>
          <h2 className="font-black text-[#2d1f14] text-2xl mb-3">Job posted!</h2>
          <p className="text-[#6b5847] text-sm mb-2">
            Your listing is under review and will go live within <strong>2 hours</strong>.
          </p>
          <p className="text-[#9d8876] text-xs mb-8">We'll email you at the address on file when it's published.</p>
          <div className="flex gap-3 justify-center">
            <Link href="/jobs" className="px-5 py-2.5 bg-[#2d1f14] text-[#e0d8cf] text-sm font-bold rounded-xl hover:bg-[#4a3728] transition-colors">
              Browse Jobs
            </Link>
            <button onClick={() => { setSubmitted(false); setStep(0) }}
              className="px-5 py-2.5 border border-[#e8e0d6] text-[#6b5847] text-sm font-semibold rounded-xl hover:bg-white transition-colors">
              Post Another
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#f7f3ef]">
      {/* Nav */}
      <header className="sticky top-0 z-40 border-b border-[#d4c4b5] bg-[#f7f3ef]/90 backdrop-blur-xl">
        <div className="max-w-3xl mx-auto px-6 h-12 flex items-center gap-4">
          <Link href="/jobs" className="flex items-center gap-2 text-[#6b5847] hover:text-[#4a3728] text-sm font-medium transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back to Jobs
          </Link>
          <div className="h-4 w-px bg-[#d4c4b5]" />
          <span className="text-[#2d1f14] text-sm font-bold">Post a Job</span>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-10">
        {/* Header */}
        <div className="mb-8">
          <p className="text-[11px] font-bold text-[#c9a882] uppercase tracking-[0.2em] mb-2">— Hiring</p>
          <h1 className="font-black text-[#2d1f14] leading-tight tracking-tight" style={{ fontSize: 'clamp(26px,4vw,36px)' }}>
            Post a Job<span className="text-[#c9a882]">.</span>
          </h1>
          <p className="text-[#6b5847] text-sm mt-1.5">Reach thousands of qualified candidates instantly</p>
        </div>

        <Steps current={step} />

        <div className="bg-white border border-[#e8e0d6] rounded-2xl p-8 shadow-sm">

          {/* ── Step 0: Company ── */}
          {step === 0 && (
            <div className="flex flex-col gap-6">
              <h2 className="font-bold text-[#2d1f14] text-base border-b border-[#f0ece6] pb-4">Company Info</h2>

              <Field label="Company Name" required>
                <input className={inputCls} value={form.companyName} onChange={e => set('companyName', e.target.value)} placeholder="e.g. Acme Corp" />
              </Field>

              <div className="grid grid-cols-2 gap-4">
                <Field label="Website" required>
                  <input className={inputCls} value={form.companyWebsite} onChange={e => set('companyWebsite', e.target.value)} placeholder="https://acme.com" />
                </Field>
                <Field label="Company Size">
                  <select className={inputCls} value={form.companySize} onChange={e => set('companySize', e.target.value)}>
                    <option value="">Select size</option>
                    {COMPANY_SIZES.map(s => <option key={s}>{s}</option>)}
                  </select>
                </Field>
              </div>

              <Field label="Company Logo" hint="Square image, min 200×200px. Shown next to your listing.">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-[#f5f0ea] border border-[#e8e0d6] flex items-center justify-center text-[#9d8876] text-xs font-bold overflow-hidden">
                    {form.companyLogo ? <img src={form.companyLogo} className="w-full h-full object-cover" alt="" /> : 'LOGO'}
                  </div>
                  <label className="cursor-pointer px-4 py-2 border border-[#e8e0d6] rounded-xl text-sm font-semibold text-[#6b5847] hover:bg-[#f5f0ea] transition-colors">
                    Upload Image
                    <input type="file" accept="image/*" className="hidden"
                      onChange={e => { const f = e.target.files?.[0]; if (f) set('companyLogo', URL.createObjectURL(f)) }} />
                  </label>
                </div>
              </Field>
            </div>
          )}

          {/* ── Step 1: Role ── */}
          {step === 1 && (
            <div className="flex flex-col gap-6">
              <h2 className="font-bold text-[#2d1f14] text-base border-b border-[#f0ece6] pb-4">Role Details</h2>

              <Field label="Job Title" required>
                <input className={inputCls} value={form.title} onChange={e => set('title', e.target.value)} placeholder="e.g. Senior Frontend Engineer" />
              </Field>

              <div className="grid grid-cols-2 gap-4">
                <Field label="Category" required>
                  <select className={inputCls} value={form.category} onChange={e => set('category', e.target.value)}>
                    <option value="">Select category</option>
                    {CATEGORIES.map(c => <option key={c}>{c}</option>)}
                  </select>
                </Field>
                <Field label="Work Mode" required>
                  <div className="flex gap-2">
                    {(['remote','hybrid','onsite'] as const).map(m => (
                      <button key={m} onClick={() => set('workMode', m)}
                        className={`flex-1 py-2.5 rounded-xl text-xs font-bold capitalize border transition-all
                          ${form.workMode === m ? 'bg-[#2d1f14] text-[#e0d8cf] border-[#2d1f14]' : 'bg-white text-[#6b5847] border-[#e8e0d6] hover:border-[#4a3728]'}`}>
                        {m}
                      </button>
                    ))}
                  </div>
                </Field>
              </div>

              <Field label="Location" hint="City, State or 'Worldwide' for remote">
                <input className={inputCls} value={form.location} onChange={e => set('location', e.target.value)} placeholder="e.g. New York, NY" />
              </Field>

              <Field label="Salary Range" hint="Showing salary increases applications by 40%">
                <div className="flex items-center gap-3">
                  <select className={`${inputCls} w-24`} value={form.currency} onChange={e => set('currency', e.target.value)}>
                    <option>USD</option><option>EUR</option><option>GBP</option><option>INR</option>
                  </select>
                  <input className={inputCls} value={form.salaryMin} onChange={e => set('salaryMin', e.target.value)} placeholder="Min e.g. 80000" />
                  <span className="text-[#9d8876] text-sm">–</span>
                  <input className={inputCls} value={form.salaryMax} onChange={e => set('salaryMax', e.target.value)} placeholder="Max e.g. 120000" />
                </div>
              </Field>

              <Field label="Skills / Tags" hint="Press Enter or comma to add. Up to 8 tags.">
                <div className="w-full min-h-[48px] px-3 py-2 rounded-xl border border-[#e8e0d6] bg-white focus-within:border-[#4a3728] focus-within:ring-2 focus-within:ring-[#4a3728]/10 transition-all flex flex-wrap gap-1.5 items-center">
                  {form.tags.map(t => (
                    <span key={t} className="flex items-center gap-1 px-2 py-0.5 bg-[#f5f0ea] text-[#4a3728] text-xs font-semibold rounded-md border border-[#e8e0d6]">
                      {t}
                      <button onClick={() => removeTag(t)} className="text-[#9d8876] hover:text-rose-500 transition-colors">×</button>
                    </span>
                  ))}
                  <input
                    className="flex-1 min-w-[120px] outline-none text-sm text-[#2d1f14] placeholder:text-[#c4b8ab] bg-transparent"
                    value={form.tagInput} onChange={e => set('tagInput', e.target.value)}
                    onKeyDown={addTag} placeholder={form.tags.length === 0 ? "React, TypeScript, AWS..." : ""}
                  />
                </div>
              </Field>
            </div>
          )}

          {/* ── Step 2: Description ── */}
          {step === 2 && (
            <div className="flex flex-col gap-6">
              <h2 className="font-bold text-[#2d1f14] text-base border-b border-[#f0ece6] pb-4">Job Description</h2>

              <Field label="About the Role" required hint="Describe responsibilities, team, and impact. Min 100 characters.">
                <textarea className={textareaCls} rows={6} value={form.description}
                  onChange={e => set('description', e.target.value)}
                  placeholder="We're looking for a Senior Engineer to join our platform team and own core infrastructure. You'll work on systems serving 1M+ users daily..." />
                <p className="text-[10px] text-[#c4b8ab] text-right">{form.description.length} chars</p>
              </Field>

              <Field label="Requirements" required hint="List must-have skills and experience.">
                <textarea className={textareaCls} rows={5} value={form.requirements}
                  onChange={e => set('requirements', e.target.value)}
                  placeholder="• 5+ years of experience with TypeScript&#10;• Strong understanding of distributed systems&#10;• Experience with AWS or GCP" />
              </Field>

              <Field label="Nice to Have" hint="Optional bonus qualifications.">
                <textarea className={textareaCls} rows={3} value={form.niceToHave}
                  onChange={e => set('niceToHave', e.target.value)}
                  placeholder="• Open source contributions&#10;• Experience with Rust" />
              </Field>

              <Field label="How to Apply" required>
                <div className="flex gap-2 mb-3">
                  {(['link', 'email'] as const).map(t => (
                    <button key={t} onClick={() => set('applyType', t)}
                      className={`px-4 py-2 rounded-xl text-xs font-bold capitalize border transition-all
                        ${form.applyType === t ? 'bg-[#2d1f14] text-[#e0d8cf] border-[#2d1f14]' : 'bg-white text-[#6b5847] border-[#e8e0d6] hover:border-[#4a3728]'}`}>
                      {t === 'link' ? '🔗 Application URL' : '✉️ Email'}
                    </button>
                  ))}
                </div>
                <input className={inputCls} value={form.applyValue} onChange={e => set('applyValue', e.target.value)}
                  placeholder={form.applyType === 'link' ? 'https://jobs.acme.com/apply/...' : 'hiring@acme.com'} />
              </Field>
            </div>
          )}

          {/* ── Step 3: Plan ── */}
          {step === 3 && (
            <div className="flex flex-col gap-6">
              <h2 className="font-bold text-[#2d1f14] text-base border-b border-[#f0ece6] pb-4">Choose a Plan</h2>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {PLANS.map(plan => (
                  <button key={plan.id} onClick={() => set('plan', plan.id)}
                    className={`relative text-left p-5 rounded-2xl border-2 transition-all ${form.plan === plan.id ? 'ring-2 ring-offset-2 ring-[#4a3728]' : ''}`}
                    style={{ background: plan.dark ? '#2d1f14' : plan.bg, borderColor: form.plan === plan.id ? '#2d1f14' : plan.border }}>
                    {'popular' in plan && plan.popular && (
                      <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 bg-[#c9a882] text-white text-[10px] font-bold rounded-full uppercase tracking-wide">
                        Popular
                      </span>
                    )}
                    <p className={`text-xs font-bold uppercase tracking-wider mb-1 ${plan.dark ? 'text-[#c9a882]' : 'text-[#9d8876]'}`}>{plan.name}</p>
                    <p className={`text-2xl font-black mb-1 ${plan.dark ? 'text-white' : 'text-[#2d1f14]'}`}>{plan.price}</p>
                    <p className={`text-xs mb-4 ${plan.dark ? 'text-[#c4b8ab]' : 'text-[#9d8876]'}`}>{plan.desc}</p>
                    <ul className="flex flex-col gap-1.5">
                      {plan.perks.map(perk => (
                        <li key={perk} className={`text-xs flex items-start gap-1.5 ${plan.dark ? 'text-[#e0d8cf]' : 'text-[#6b5847]'}`}>
                          <span className="text-[#c9a882] mt-0.5">✓</span>{perk}
                        </li>
                      ))}
                    </ul>
                  </button>
                ))}
              </div>

              {/* Summary */}
              <div className="bg-[#f5f0ea] rounded-xl p-5 border border-[#e8e0d6]">
                <p className="text-xs font-bold text-[#9d8876] uppercase tracking-wider mb-3">Listing Summary</p>
                <div className="grid grid-cols-2 gap-y-2 text-sm">
                  <span className="text-[#9d8876]">Company</span>
                  <span className="font-semibold text-[#2d1f14]">{form.companyName || '—'}</span>
                  <span className="text-[#9d8876]">Role</span>
                  <span className="font-semibold text-[#2d1f14]">{form.title || '—'}</span>
                  <span className="text-[#9d8876]">Location</span>
                  <span className="font-semibold text-[#2d1f14]">{form.location || '—'}</span>
                  <span className="text-[#9d8876]">Work Mode</span>
                  <span className="font-semibold text-[#2d1f14] capitalize">{form.workMode || '—'}</span>
                  <span className="text-[#9d8876]">Plan</span>
                  <span className="font-semibold text-[#2d1f14] capitalize">{form.plan}</span>
                </div>
              </div>

              <p className="text-[11px] text-[#9d8876] text-center">
                By posting you agree to our <a href="#" className="underline hover:text-[#4a3728]">Terms of Service</a> and <a href="#" className="underline hover:text-[#4a3728]">Content Policy</a>. All listings are reviewed before going live.
              </p>
            </div>
          )}

          {/* Navigation */}
          <div className={`flex items-center mt-8 pt-6 border-t border-[#f0ece6] ${step === 0 ? 'justify-end' : 'justify-between'}`}>
            {step > 0 && (
              <button onClick={back} className="flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-[#6b5847] hover:text-[#2d1f14] transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
                Back
              </button>
            )}
            {step < 3 ? (
              <button onClick={next} className="flex items-center gap-2 px-6 py-2.5 bg-[#2d1f14] hover:bg-[#4a3728] text-[#e0d8cf] text-sm font-bold rounded-xl transition-colors">
                Continue
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            ) : (
              <button onClick={submit} className="flex items-center gap-2 px-6 py-2.5 bg-[#2d1f14] hover:bg-[#4a3728] text-[#e0d8cf] text-sm font-bold rounded-xl transition-colors">
                {form.plan === 'basic' ? 'Publish for Free' : `Pay & Publish`}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </button>
            )}
          </div>

        </div>
      </main>
    </div>
  )
}