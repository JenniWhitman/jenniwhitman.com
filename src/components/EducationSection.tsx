import React from 'react'
import ResumeSection from './ResumeSection'

interface EducationProps {
  title: string
  children:
    | React.ReactElement<EducationListItemProps>
    | React.ReactElement<EducationListItemProps>[]
}

interface EducationListItemProps {
  institution: string
  degree: string
  duration: string
  summary?: string
}

export const EducationListItem: React.FC<EducationListItemProps> = ({
  institution,
  degree,
  duration,
  summary,
}) => {
  return (
    <li className="mb-4">
      <h3 className="font-display text-lg text-[var(--primary)]">
        {institution}
      </h3>
      <p className="font-body text-sm text-[var(--secondary)] italic">
        {degree} &middot; {duration}
      </p>
      {summary && (
        <p className="font-body text-sm text-[var(--text)] mt-1">{summary}</p>
      )}
    </li>
  )
}

const EducationList: React.FC<EducationProps> = ({ title, children }) => {
  return (
    <ResumeSection title={title}>
      <ul className="list-none pl-0">
        {React.Children.map(
          children,
          (child: React.ReactElement<EducationListItemProps>) => (
            <EducationListItem {...child.props} />
          )
        )}
      </ul>
    </ResumeSection>
  )
}

const EducationSection = () => {
  return (
    <EducationList title="Education">
      <EducationListItem
        duration="2016"
        degree="Bachelors cum laude, Computer Science"
        institution="Harvard University Extension School"
        summary="Focused on software engineering, web development, and systems architecture.  Stayed well rounded with Tolkienian linguistics and Ancient Greek mathematics, maintaining Dean's list every semester while working full time with a family."
      />
    </EducationList>
  )
}

export default EducationSection
