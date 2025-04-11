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
    <li>
      <strong>{institution}</strong> - {degree} ({duration})
      {summary && <p>{summary}</p>}
    </li>
  )
}

const EducationList: React.FC<EducationProps> = ({ title, children }) => {
  return (
    <ResumeSection title={title}>
      <ul>
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
    <EducationList title={'Education'}>
      <EducationListItem
        duration={'2016'}
        degree={'Bachelors cum laude, Computer Science'}
        institution={'Harvard University Extension School'}
      />
    </EducationList>
  )
}

export default EducationSection
