import React, { useState, StrictMode } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ResumeDownload from './components/ResumeDownload'
import HomeSection from './components/HomeSection'
import SkillsSection from './components/SkillsSection'
import ExperienceSection from './components/ExperienceSection'
import EducationSection from './components/EducationSection'
import OtherExperienceSection from './components/OtherExperienceSection'
import ThemeGridSwitcher from './components/ThemeGridSwitcher'
import { SiGithub } from '@icons-pack/react-simple-icons'
import NavBar from './components/NavBar'
import { Page } from './types'

const App: React.FC = () => {
  const [activePage, setActivePage] = useState<Page>('summary')
  const pageComponents: Record<typeof activePage, React.ReactElement | null> = {
    summary: <HomeSection key="summary" />,
    skills: <SkillsSection key="skills" />,
    experience: <ExperienceSection key="experience" />,
    education: <EducationSection key="education" />,
    other: <OtherExperienceSection key="otherExperience" />,
    resume: <HomeSection key="summary" />,
    section1: <div key="section1">Section 1 content coming soon</div>,
    section2: <div key="section2">Section 2 content coming soon</div>,
    section3: <div key="section3">Section 3 content coming soon</div>,
  }

  const activeComponent = pageComponents[activePage] || null

  return (
    <StrictMode>
      <motion.div
        className="min-h-screen flex flex-col bg-[var(--background)] text-[var(--text)] transition-colors duration-500 font-body"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <header className="p-6 text-center flex flex-col items-center gap-4">
          <div className="flex items-center text-center flex-col justify-center w-full gap-0">
            <h1 className="text-5xl font-display text-[var(--primary)]">
              Jenni Whitman
            </h1>
            <ResumeDownload />
          </div>
          <div className="flex justify-center w-full relative">
            <div className="mx-auto overflow-x-auto">
              <ThemeGridSwitcher />
            </div>
          </div>
          <NavBar activePage={activePage} setActivePage={setActivePage} />
        </header>

        <main className="flex-grow p-6 max-w-3xl mx-auto">
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

        <footer className="w-full bg-[var(--background)] border-t border-[var(--muted)] py-1 px-2 text-center text-xs text-[var(--secondary)] mt-auto">
          <a
            href="https://github.com/JenniWhitman/jenniwhitman.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-1 hover:text-[var(--primary)] transition"
            aria-label="View source on GitHub"
          >
            &copy; {new Date().getFullYear()} Jenni Whitman
            <span className="inline-block transition-transform duration-300 ease-in-out group-hover:rotate-12 group-hover:scale-110 motion-reduce:transform-none">
              <SiGithub className="w-4 h-4" />
            </span>
          </a>
        </footer>
      </motion.div>
    </StrictMode>
  )
}

export default App
