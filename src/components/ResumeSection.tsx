import React from 'react'

interface ResumeSectionProps {
  title?: string
  children: React.ReactElement | React.ReactElement[] | React.ReactNode
}

const ResumeSection: React.FC<ResumeSectionProps> = ({ title, children }) => {
  return (
    <section>
      {title ? (
        <h2 className="text-xl mb-2 font-[var(--font-display)]">{title}</h2>
      ) : null}
      {children}
    </section>
  )
}

export default ResumeSection
