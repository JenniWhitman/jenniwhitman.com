import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Download } from 'lucide-react'
import ResumeSection from './ResumeSection'

export type Job = {
  title: string
  company: string
  range: string
  summary: string
  details: string[]
}

type WorkSectionProps = {
  title: string
  jobs: Job[]
}

const WorkSection = ({ title, jobs }: WorkSectionProps) => {
  const [openIndices, setOpenIndices] = useState<Set<number>>(new Set())

  const toggleIndex = (i: number) => {
    setOpenIndices((prev) => {
      const next = new Set(prev)
      if (next.has(i)) {
        next.delete(i)
      } else {
        next.add(i)
      }
      return next
    })
  }

  const expandAll = () => setOpenIndices(new Set(jobs.map((_, i) => i)))
  const collapseAll = () => setOpenIndices(new Set())
  return (
    <ResumeSection title={title}>
      <motion.section
        className="mt-6 space-y-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button
              onClick={expandAll}
              className="text-sm text-[var(--primary)] underline hover:no-underline transition"
            >
              Expand all
            </button>
            <button
              onClick={collapseAll}
              className="text-sm text-[var(--primary)] underline hover:no-underline transition"
            >
              Collapse all
            </button>
          </div>
        </div>

        <div className="relative border-l-2 border-[var(--muted)] pl-4 space-y-6">
          {jobs.map((job, i) => {
            const isOpen = openIndices.has(i)

            return (
              <div key={i} className="relative">
                <div className="absolute -left-[11px] top-[6px] w-4 h-4 rounded-full bg-[var(--primary)] border-[3px] border-[var(--background)]" />

                <div className="flex w-full items-start justify-between text-left p-2 rounded transition">
                  <div className="w-full">
                    <p className="font-semibold text-[var(--text)]">
                      {job.title}{' '}
                      <span className="text-[var(--secondary)]">
                        @ {job.company}
                      </span>
                    </p>
                    <p className="text-sm italic text-[var(--secondary)]">
                      {job.range}
                    </p>
                    <p className="mt-1 text-[var(--secondary)]">
                      {job.summary}
                    </p>
                  </div>

                  <motion.button
                    onClick={() => toggleIndex(i)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault()
                        toggleIndex(i)
                      }
                    }}
                    aria-expanded={isOpen}
                    aria-controls={`job-details-${i}`}
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className="ml-2 mt-1 text-[var(--secondary)] flex-shrink-0 p-1 focus-visible:outline focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded"
                  >
                    <ChevronDown size={18} />
                  </motion.button>
                </div>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`job-details-${i}`}
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -4 }}
                      transition={{ duration: 0.25 }}
                      className="ml-2 mt-2 text-sm text-[var(--secondary)] font-[var(--font-body)]"
                    >
                      <ul className="list-disc list-inside space-y-1">
                        {job.details.map((item, j) => (
                          <li key={j}>{item}</li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>

        <div className="text-center pt-4">
          <a
            href="https://docs.google.com/document/d/YOUR_RESUME_ID/export?format=pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[var(--primary)] font-semibold underline hover:no-underline transition hover:scale-105 focus-visible:outline focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
          >
            <Download size={18} /> Download Resume (PDF)
          </a>
        </div>
      </motion.section>
    </ResumeSection>
  )
}

export default WorkSection
