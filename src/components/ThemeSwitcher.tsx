import { useTheme } from '../context/ThemeContext'
import { Palette } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const themes = [
  { id: 'light', label: 'Light', icon: '🌞' },
  { id: 'dark', label: 'Dark', icon: '🌚' },
  { id: 'monochrome', label: 'Mono', icon: '⚫' },
  { id: 'brutalist', label: 'Brutal', icon: '🧱' },
  { id: 'pastel', label: 'Pastel', icon: '🎨' },
]

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme()
  const [open, setOpen] = useState(false)

  return (
    <div className="relative">
      <motion.button
        onClick={() => setOpen(!open)}
        whileHover={{ rotate: [0, -10, 10, -5, 5, 0], scale: 1.1 }}
        whileTap={{ scale: 0.9, rotate: 0 }}
        animate={{ rotate: 0 }} // resets rotation
        transition={{ type: 'spring', stiffness: 500, damping: 20 }}
        className="p-2 rounded focus-visible:outline focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
        aria-label="Toggle theme menu"
      >
        <Palette className="w-5 h-5 text-[var(--primary)] transition-colors duration-300" />
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-2 bg-[var(--background)] border border-[var(--muted)] rounded shadow-lg p-2 flex flex-col gap-1"
          >
            {themes.map((t) => (
              <button
                key={t.id}
                onClick={() => {
                  setTheme(t.id as never)
                  setOpen(false)
                }}
                className={`flex items-center gap-2 px-2 py-1 rounded hover:bg-[var(--muted)] transition text-sm ${
                  t.id === theme ? 'font-semibold' : 'font-normal'
                }`}
              >
                <span>{t.icon}</span>
                {t.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default ThemeSwitcher
