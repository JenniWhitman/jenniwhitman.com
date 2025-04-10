import React, { useState, useEffect, StrictMode } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sun, Moon } from 'lucide-react'
import HomeSection from './components/HomeSection'
import SkillsSection from './components/SkillsSection'
import ExperienceSection from './components/ExperienceSection'
import EducationSection from './components/EducationSection'
import OtherExperienceSection from './components/OtherExperienceSection'

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [activePage, setActivePage] = useState<'home' | 'resume' | 'skills' | 'experience' | 'education' | 'otherExperience'>('home');

  useEffect(() => {
    const className = 'dark';
    const bodyClass = window.document.documentElement.classList;

    if (darkMode) {
      bodyClass.add(className);
    } else {
      bodyClass.remove(className);
    }
  }, [darkMode]);

  const pageComponents: Record<typeof activePage, React.ReactElement | null> = {
    home: <HomeSection />,
    skills: <SkillsSection />,
    experience: <ExperienceSection />,
    education: <EducationSection />,
    otherExperience: <OtherExperienceSection />,
    resume: null,
  };

  const activeComponent = pageComponents[activePage] || null;

  return (
    <StrictMode>
      <motion.div
        className="min-h-screen bg-[var(--background)] text-[var(--text)] transition-colors duration-500 font-sans"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <header className="flex items-center justify-between p-6 border-b border-[var(--muted)]">
          <h1 className="text-2xl font-bold font-[var(--font-display)]">Jenni Whitman</h1>
          <nav className="flex gap-4 text-sm">
            <button onClick={() => setActivePage('home')} className="hover:underline">Home</button>
            <button onClick={() => setActivePage('skills')} className="hover:underline">Skills</button>
            <button onClick={() => setActivePage('experience')} className="hover:underline">Experience</button>
            <button onClick={() => setActivePage('education')} className="hover:underline">Education</button>
            <button onClick={() => setActivePage('otherExperience')} className="hover:underline">Other Experience</button>
          </nav>
          <motion.button
            onClick={() => setDarkMode(!darkMode)}
            className="px-3 py-1 rounded border border-[var(--secondary)] hover:bg-[var(--muted)] transition-all duration-300 flex items-center gap-2"
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle dark mode"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={darkMode ? 'sun' : 'moon'}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {darkMode ? <Sun size={18} /> : <Moon size={18} />}
              </motion.span>
            </AnimatePresence>
          </motion.button>
        </header>

        <main className="p-6 max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
              <motion.div key={activePage} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                { activeComponent }
              </motion.div>
          </AnimatePresence>
        </main>

        <footer className="p-6 text-center text-sm text-[var(--muted)] font-[var(--font-body)]">
          &copy; {new Date().getFullYear()} Jenni Whitman
        </footer>
      </motion.div>
    </StrictMode>
  );
};

export default App;
