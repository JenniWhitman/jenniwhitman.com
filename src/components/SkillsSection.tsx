import React from "react"
import ResumeSection from "./ResumeSection"

interface SkillsProps {
  title: string
  children:
    | React.ReactElement<SkillsItemProps>[]
    | React.ReactElement<SkillsItemProps>
}

interface SkillsItemProps {
  title: string
  proficiencyLevel: number
  addtlInfo?: string
}

export const SkillsItem: React.FC<SkillsItemProps> = ({
  title,
  proficiencyLevel,
  addtlInfo,
}) => {
  return (
    <li>
      <strong>{title}</strong> - Proficiency Level: {proficiencyLevel} -
      Additional Info: {addtlInfo}
    </li>
  )
}

const SkillsList: React.FC<SkillsProps> = ({ title, children }) => {
  return (
    <ResumeSection title={title}>
      <ul>
        {React.Children.map(
          children,
          (child: React.ReactElement<SkillsItemProps>) => (
            <SkillsItem {...child.props} />
          ),
        )}
      </ul>
    </ResumeSection>
  )
}

const SkillsSection = () => {
  return (
    <SkillsList title={"Skills"}>
      <SkillsItem title={"Python"} proficiencyLevel={3} />
      <SkillsItem title={"Django"} proficiencyLevel={3} />
      <SkillsItem title={"React"} proficiencyLevel={3} />
      <SkillsItem title={"TypeScript"} proficiencyLevel={3} />
      <SkillsItem title={"JavaScript"} proficiencyLevel={3} />
      <SkillsItem title={"SQL"} proficiencyLevel={3} />
      <SkillsItem title={"MySQL"} proficiencyLevel={3} />
      <SkillsItem title={"PHP"} proficiencyLevel={3} />
      <SkillsItem title={"Laravel"} proficiencyLevel={3} />
      <SkillsItem title={"PostgreSQL"} proficiencyLevel={3} />
      <SkillsItem title={"OpenAPI"} proficiencyLevel={3} />
      <SkillsItem title={"HTML"} proficiencyLevel={3} />
      <SkillsItem title={"CSS"} proficiencyLevel={3} />
      <SkillsItem title={"OpenAPI"} proficiencyLevel={3} />
      <SkillsItem title={"SASS/LESS"} proficiencyLevel={2} />
      <SkillsItem title={"GraphQL"} proficiencyLevel={2} />
      <SkillsItem title={"WCAG"} proficiencyLevel={2} />
      <SkillsItem title={"Angular"} proficiencyLevel={2} />
      <SkillsItem title={"Java"} proficiencyLevel={2} />
      <SkillsItem title={"C"} proficiencyLevel={1} />
      <SkillsItem title={"Google App Engine"} proficiencyLevel={1} />
      <SkillsItem title={"AWS"} proficiencyLevel={1} />
      <SkillsItem title={"Docker"} proficiencyLevel={1} />
      <SkillsItem title={"Kubernetes"} proficiencyLevel={1} />
      <SkillsItem title={"Cloudflare"} proficiencyLevel={1} />
      <SkillsItem title={"GHA"} proficiencyLevel={2} />
    </SkillsList>
  )
}

export default SkillsSection
