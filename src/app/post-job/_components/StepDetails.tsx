import { memo, useState } from 'react'
import { JobPostForm, APPLY_OPTIONS, ApplyType } from '../_types/postJob'
import { Field, inputCls, textareaCls, ToggleGroup } from './FormPrimitives'

interface Props {
  form:     JobPostForm
  setField: <K extends keyof JobPostForm>(k: K, v: JobPostForm[K]) => void
}

// ── AI Assist button ──────────────────────────────────────────────────────────
function AIButton({ onClick, loading }: { onClick: () => void; loading: boolean }) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={loading}
      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border border-[#d4c4b5] text-[#6b5847] hover:border-[#4a3728] hover:text-[#4a3728] hover:bg-[#f5f0ea] disabled:opacity-50 disabled:cursor-not-allowed transition-all"
    >
      {loading ? (
        <span className="w-3 h-3 border-2 border-[#6b5847]/30 border-t-[#6b5847] rounded-full animate-spin" />
      ) : (
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )}
      {loading ? 'Generating...' : 'AI Assist'}
    </button>
  )
}

// ── Field with AI button in header ────────────────────────────────────────────
function AIField({ label, hint, required, onAI, aiLoading, children }: {
  label:     string
  hint?:     string
  required?: boolean
  onAI:      () => void
  aiLoading: boolean
  children:  React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex items-center justify-between">
        <label className="text-sm font-semibold text-[#2d1f14]">
          {label}{required && <span className="text-rose-500 ml-0.5">*</span>}
        </label>
        <AIButton onClick={onAI} loading={aiLoading} />
      </div>
      {hint && <p className="text-xs text-[#9d8876] -mt-0.5">{hint}</p>}
      {children}
    </div>
  )
}

// ── Main component ────────────────────────────────────────────────────────────
export const StepDetails = memo(function StepDetails({ form, setField }: Props) {
  const [descAI, setDescAI] = useState(false)
  const [reqAI,  setReqAI]  = useState(false)
  const [niceAI, setNiceAI] = useState(false)

  const descLen   = form.description.length
  const descValid = descLen >= 100

  // Placeholder AI — replace with real /api/ai/generate call in production
  async function generateDescription() {
    if (!form.title) return
    setDescAI(true)
    await new Promise(r => setTimeout(r, 1200))
    setField('description',
      `We're looking for a talented ${form.title} to join our growing team. ` +
      `In this role, you'll work closely with cross-functional teams to deliver ` +
      `high-impact projects and drive measurable results. You'll have the opportunity ` +
      `to shape our product direction and mentor junior team members.`
    )
    setDescAI(false)
  }

  async function generateRequirements() {
    if (!form.title) return
    setReqAI(true)
    await new Promise(r => setTimeout(r, 1200))
    setField('requirements',
      `• 3+ years of experience in a similar ${form.title} role\n` +
      `• Strong communication and collaboration skills\n` +
      `• Proven track record of delivering results\n` +
      `• Experience working in a fast-paced environment\n` +
      `• Bachelor's degree or equivalent practical experience`
    )
    setReqAI(false)
  }

  async function generateNiceToHave() {
    setNiceAI(true)
    await new Promise(r => setTimeout(r, 800))
    setField('niceToHave',
      `• Experience at a high-growth startup\n` +
      `• Open source contributions\n` +
      `• Strong portfolio of past work`
    )
    setNiceAI(false)
  }

  return (
    <div className="flex flex-col gap-6">
      <h2 className="font-bold text-[#2d1f14] text-base border-b border-[#f0ece6] pb-4">
        Job Description
      </h2>

      {/* AI tip banner */}
      <div className="flex items-start gap-3 px-4 py-3 bg-[#fdf8f3] border border-[#e8d5b8] rounded-xl">
        <svg className="w-4 h-4 text-[#c9a882] mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
        <p className="text-xs text-[#6b5847]">
          <span className="font-semibold text-[#4a3728]">AI Assist</span> generates a draft based on your job title and role. Fill in Step 1 first for best results.
        </p>
      </div>

      <AIField label="About the Role" required hint="Min 100 chars." onAI={generateDescription} aiLoading={descAI}>
        <textarea
          className={textareaCls}
          rows={6}
          value={form.description}
          onChange={e => setField('description', e.target.value)}
          placeholder="We're looking for a Senior Engineer to join our platform team..."
        />
        <p className={`text-[10px] text-right mt-1 transition-colors ${descValid ? 'text-[#c4b8ab]' : 'text-rose-400'}`}>
          {descLen} / 100 min
        </p>
      </AIField>

      <AIField label="Requirements" required hint="One per line." onAI={generateRequirements} aiLoading={reqAI}>
        <textarea
          className={textareaCls}
          rows={5}
          value={form.requirements}
          onChange={e => setField('requirements', e.target.value)}
          placeholder={'• 5+ years TypeScript\n• Distributed systems experience\n• AWS or GCP'}
        />
      </AIField>

      <AIField label="Nice to Have" hint="Bonus qualifications." onAI={generateNiceToHave} aiLoading={niceAI}>
        <textarea
          className={textareaCls}
          rows={3}
          value={form.niceToHave}
          onChange={e => setField('niceToHave', e.target.value)}
          placeholder={'• Open source contributions\n• Experience with Rust'}
        />
      </AIField>

      <div className="flex flex-col gap-1.5">
        <label className="text-sm font-semibold text-[#2d1f14]">
          How to Apply <span className="text-rose-500">*</span>
        </label>
        <ToggleGroup<ApplyType>
          options={APPLY_OPTIONS}
          value={form.applyType}
          onChange={v => setField('applyType', v)}
        />
        <input
          className={`${inputCls} mt-2`}
          value={form.applyValue}
          onChange={e => setField('applyValue', e.target.value)}
          placeholder={form.applyType === 'link' ? 'https://jobs.acme.com/apply/...' : 'hiring@acme.com'}
          type={form.applyType === 'email' ? 'email' : 'url'}
        />
      </div>
    </div>
  )
})