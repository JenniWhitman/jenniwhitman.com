import React, { useState, StrictMode } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import HomeSection from './components/HomeSection'
import SkillsSection from './components/SkillsSection'
import ExperienceSection from './components/ExperienceSection'
import EducationSection from './components/EducationSection'
import OtherExperienceSection from './components/OtherExperienceSection'
import ThemeSwitcher from './components/ThemeSwitcher'

const App: React.FC = () => {
  const [activePage, setActivePage] = useState<
    | 'home'
    | 'resume'
    | 'skills'
    | 'experience'
    | 'education'
    | 'otherExperience'
  >('home')

  const pageComponents: Record<typeof activePage, React.ReactElement | null> = {
    home: <HomeSection key="home" />,
    skills: <SkillsSection key="skills" />,
    experience: <ExperienceSection key="experience" />,
    education: <EducationSection key="education" />,
    otherExperience: <OtherExperienceSection key="otherExperience" />,
    resume: null,
  }

  const activeComponent = pageComponents[activePage] || null

  return (
    <StrictMode>
      <motion.div
        className="min-h-screen bg-[var(--background)] text-[var(--text)] transition-colors duration-500 font-sans"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <header className="flex items-center justify-between p-6 border-b border-[var(--muted)]">
          <h1 className="text-2xl font-[var(--font-display)]">Jenni Whitman</h1>
          <nav className="flex gap-4 text-sm">
            <button
              onClick={() => setActivePage('home')}
              className="hover:underline"
            >
              Home
            </button>
            <button
              onClick={() => setActivePage('skills')}
              className="hover:underline"
            >
              Skills
            </button>
            <button
              onClick={() => setActivePage('experience')}
              className="hover:underline"
            >
              Experience
            </button>
            <button
              onClick={() => setActivePage('education')}
              className="hover:underline"
            >
              Education
            </button>
            <button
              onClick={() => setActivePage('otherExperience')}
              className="hover:underline"
            >
              Other Experience
            </button>
          </nav>
          <ThemeSwitcher />
        </header>

        <main className="p-6 max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activePage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {activeComponent}
            </motion.div>
          </AnimatePresence>
        </main>

        <footer className="p-6 text-center text-sm text-[var(--muted)] font-[var(--font-body)]">
          &copy; {new Date().getFullYear()} Jenni Whitman
        </footer>
      </motion.div>
    </StrictMode>
  )
}

export default App
