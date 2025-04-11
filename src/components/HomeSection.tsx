import ResumeSection from './ResumeSection'

const HomeSection = () => {
  return (
    <ResumeSection title="Summary">
      <div className="space-y-4 font-body text-[var(--text)] text-base leading-relaxed">
        <p>
          Results-driven{' '}
          <span className="text-[var(--primary)] font-semibold">
            Software Engineer
          </span>{' '}
          with a passion for continuous learning, collaboration, and building
          impactful solutions. Experienced in diverse environments with
          expertise in full-stack development using Python, Django, React, and
          cloud technologies.
        </p>
        <p>
          Adept at designing scalable systems, implementing API integrations,
          and driving process improvements. Known for bridging technical and
          business needs, mentoring teams, and adapting to new challenges with a
          problem-solving mindset.
        </p>
      </div>
    </ResumeSection>
  )
}

export default HomeSection
