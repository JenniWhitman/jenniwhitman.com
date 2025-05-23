import React from 'react'
import { motion } from 'framer-motion'
import ResumeSection from './ResumeSection'
import { ChartBarBig, Dot } from 'lucide-react'

interface SkillsProps {
  title: string
  children:
    | React.ReactElement<SkillsItemProps>[]
    | React.ReactElement<SkillsItemProps>
}

interface SkillsItemProps {
  title: string
  proficiencyLevel: number
  yearsOfExperience?: number
  addtlInfo?: string
}

export const SkillsItem: React.FC<SkillsItemProps> = ({
  title,
  proficiencyLevel,
  yearsOfExperience,
  addtlInfo,
}) => {
  return (
    <li className="mb-3 min-w-[220px] flex items-center gap-2">
      <h3 className="font-display text-[var(--primary)] text-base font-semibold min-w-[100px]">
        {title}
      </h3>
      <div className="flex gap-1 items-center">
        {Array.from({ length: proficiencyLevel }).map((_, idx) => (
          <span
            key={idx}
            className="inline-block w-2 h-2 rounded-full bg-[var(--primary)]"
          />
        ))}
        {yearsOfExperience !== undefined && (
          <span className="font-body text-xs text-[var(--secondary)]">
            | {yearsOfExperience} yrs
          </span>
        )}
        {addtlInfo && (
          <span className="font-body text-xs text-[var(--text)] ml-2">
            - {addtlInfo}
          </span>
        )}
      </div>
    </li>
  )
}

const SkillsList: React.FC<SkillsProps> = ({ title, children }) => {
  const [layout, setLayout] = React.useState<'bars' | 'dots'>('bars')

  const renderItem = (child: React.ReactElement<SkillsItemProps>) => {
    const { title, proficiencyLevel, yearsOfExperience, addtlInfo } =
      child.props

    if (layout === 'bars') {
      return (
        <motion.li
          key={title}
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          transition={{ duration: 0.2 }}
          className="mb-3 min-w-[220px]"
        >
          <div className="flex justify-between items-center mb-1">
            <h3 className="font-display text-[var(--primary)] text-base font-semibold">
              {title}
            </h3>
            <span className="font-body text-xs text-[var(--secondary)]">
              {yearsOfExperience ? `${yearsOfExperience} yrs` : ''}
            </span>
          </div>
          <div className="h-2 bg-[var(--muted)] rounded">
            <motion.div
              className="h-2 bg-[var(--primary)] rounded"
              initial={{ width: 0 }}
              animate={{ width: `${proficiencyLevel * 33}%` }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
            />
          </div>
        </motion.li>
      )
    }
    if (layout === 'dots') {
      return (
        <li key={title} className="mb-3 flex items-center gap-2 min-w-[220px]">
          <h3 className="font-display text-[var(--primary)] text-base font-semibold min-w-[100px]">
            {title}
          </h3>
          <div className="flex gap-1">
            {Array.from({ length: proficiencyLevel }).map((_, idx) => (
              <span
                key={idx}
                className="inline-block w-2 h-2 rounded-full bg-[var(--primary)]"
              />
            ))}
          </div>
          {addtlInfo && (
            <p className="font-body text-xs text-[var(--text)] mt-1 w-full">
              {addtlInfo}
            </p>
          )}
        </li>
      )
    }
    return <SkillsItem key={title} {...child.props} />
  }
  return (
    <ResumeSection title={title}>
      <div className="flex gap-2 mb-4">
        <button
          onClick={() => setLayout('bars')}
          className={`text-xs px-2 py-1 rounded flex items-center gap-1 ${layout === 'bars' ? 'bg-[var(--primary)] text-[var(--background)]' : 'bg-[var(--muted)] text-[var(--text)]'}`}
        >
          <ChartBarBig
            className="w-5 h-5"
            style={{ color: 'var(--primary)' }}
          />{' '}
          Bars
        </button>
        <button
          onClick={() => setLayout('dots')}
          className={`text-xs px-2 py-1 rounded flex items-center gap-1 ${layout === 'dots' ? 'bg-[var(--primary)] text-[var(--background)]' : 'bg-[var(--muted)] text-[var(--text)]'}`}
        >
          <Dot className="w-5 h-5" style={{ color: 'var(--primary)' }} /> Dots
        </button>
      </div>
      <div className="overflow-hidden relative">
        <motion.ul
          key={layout}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="list-none pl-0"
        >
          {React.Children.map(children, (child) => renderItem(child))}
        </motion.ul>
      </div>
    </ResumeSection>
  )
}

const SkillsSection = () => {
  return (
    <SkillsList title="Skills">
      <SkillsItem title="Python" proficiencyLevel={10} />
      <SkillsItem title="Django" proficiencyLevel={10} />
      <SkillsItem title="React" proficiencyLevel={10} />
      <SkillsItem title="TypeScript" proficiencyLevel={10} />
      <SkillsItem title="JavaScript" proficiencyLevel={10} />
      <SkillsItem title="SQL" proficiencyLevel={9} />
      <SkillsItem title="MySQL" proficiencyLevel={9} />
      <SkillsItem title="PostgreSQL" proficiencyLevel={9} />
      <SkillsItem title="PHP" proficiencyLevel={8} />
      <SkillsItem title="Laravel" proficiencyLevel={8} />
      <SkillsItem title="OpenAPI" proficiencyLevel={8} />
      <SkillsItem title="HTML" proficiencyLevel={7} />
      <SkillsItem title="CSS" proficiencyLevel={7} />
      <SkillsItem title="SASS/LESS" proficiencyLevel={6} />
      <SkillsItem title="WCAG" proficiencyLevel={6} />
      <SkillsItem title="GraphQL" proficiencyLevel={5} />
      <SkillsItem title="Angular" proficiencyLevel={5} />
      <SkillsItem title="AWS" proficiencyLevel={5} />
      <SkillsItem title="Docker" proficiencyLevel={5} />
      <SkillsItem title="Google App Engine" proficiencyLevel={4} />
      <SkillsItem title="Java" proficiencyLevel={4} />
      <SkillsItem title="Kubernetes" proficiencyLevel={4} />
      <SkillsItem title="C" proficiencyLevel={3} />
      <SkillsItem title="Cloudflare" proficiencyLevel={3} />
      <SkillsItem title="GHA" proficiencyLevel={2} />
    </SkillsList>
  )
}

export default SkillsSection
