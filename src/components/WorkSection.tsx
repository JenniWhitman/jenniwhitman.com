import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
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
            const hasDetails = job.details.length > 0

            return (
              <div key={i} className="relative">
                <div className="absolute -left-[11px] top-[6px] w-4 h-4 rounded-full bg-[var(--primary)] border-[3px] border-[var(--background)]" />

                <div className="flex w-full items-start justify-between text-left p-2 rounded transition">
                  <div className="w-full">
                    <h3 className="font-display font-semibold text-[var(--primary)]">
                      {job.title}{' '}
                      <span className="text-[var(--secondary)] font-body">
                        @ {job.company}
                      </span>
                    </h3>
                    <p className="font-body text-sm italic text-[var(--secondary)]">
                      {job.range}
                    </p>
                    {job.summary ? (
                      <p className="mt-1 font-body text-[var(--text)] text-sm">
                        {job.summary}
                      </p>
                    ) : (
                      <p className="mt-1 font-body text-[var(--secondary)] text-sm italic">
                        No additional details provided.
                      </p>
                    )}
                  </div>

                  {hasDetails && (
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
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="ml-2 mt-1 text-[var(--secondary)] flex-shrink-0 p-1 focus-visible:outline focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded"
                    >
                      <ChevronDown size={18} />
                    </motion.button>
                  )}
                </div>

                <AnimatePresence initial={false}>
                  {isOpen && hasDetails && (
                    <motion.div
                      id={`job-details-${i}`}
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -4 }}
                      transition={{ duration: 0.25 }}
                      className="ml-2 mt-2 font-body text-sm text-[var(--secondary)]"
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
      </motion.section>
    </ResumeSection>
  )
}

export default WorkSection
