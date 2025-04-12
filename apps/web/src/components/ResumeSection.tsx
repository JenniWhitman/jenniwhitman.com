import React from 'react'

interface ResumeSectionProps {
  title?: string
  children: React.ReactElement | React.ReactElement[] | React.ReactNode
}

const ResumeSection: React.FC<ResumeSectionProps> = ({ title, children }) => {
  return (
    <section>
      {title ? <h2 className="sr-only">{title}</h2> : null}
      {children}
    </section>
  )
}

export default ResumeSection
