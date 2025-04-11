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
        <header className="p-6  text-center flex flex-col items-center gap-4">
          <h1 className="text-5xl font-[var(--font-display)]">Jenni Whitman</h1>
          <nav className="flex flex-wrap justify-center gap-4 text-sm">
            {[
              'home',
              'skills',
              'experience',
              'education',
              'otherExperience',
            ].map((page) => (
              <button
                key={page}
                onClick={() => setActivePage(page as never)}
                className={`relative pb-1 transition-colors duration-200 hover:text-[var(--primary)] ${
                  activePage === page
                    ? 'text-[var(--primary)] after:absolute after:left-0 after:right-0 after:-bottom-0.5 after:h-0.5 after:bg-[var(--primary)] content-[]'
                    : 'text-[var(--secondary)]'
                }`}
              >
                {page.charAt(0).toUpperCase() + page.slice(1)}
              </button>
            ))}
          </nav>
          <div className="flex flex-col items-center gap-2 pt-2">
            <ThemeSwitcher />
          </div>
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
