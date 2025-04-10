import { useTheme } from '../context/ThemeContext'
import { Palette } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useRef, useEffect } from 'react'

const themes = [
  { id: 'light', label: 'Light', icon: '🌞' },
  { id: 'dark', label: 'Dark', icon: '🌚' },
  { id: 'monochrome', label: 'Mono', icon: '⚫' },
  { id: 'brutalist', label: 'Brutal', icon: '🧱' },
  { id: 'pastel', label: 'Pastel', icon: '🎨' },
  { id: 'cyber', label: 'Cyberpunk', icon: '🤖' },
  { id: 'handdrawn', label: 'Drawn', icon: '✏️' },
  { id: 'natural', label: 'Natural', icon: '🌳' },
  { id: 'hacker', label: 'Hacker', icon: '💻' },
  { id: 'lisafrank', label: 'Lisa Frank', icon: '🦄' },
  { id: 'windows95', label: 'Windows 95', icon: '💾' },
  { id: 'vintage', label: 'Vintage', icon: '📜' },
  { id: 'minimalist', label: 'Minimal', icon: '🪴' },
  { id: 'neon', label: 'Neon', icon: '🌈' },
]

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme()
  const [open, setOpen] = useState(false)
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([])

  useEffect(() => {
    if (open) {
      buttonRefs.current[0]?.focus()
    }
  }, [open])

  return (
    <div className="relative">
      <motion.button
        onClick={() => setOpen(!open)}
        whileHover={{ rotate: [-10, 10, -5, 5, 0] }}
        whileTap={{ scale: 0.9 }}
        className="p-2 rounded focus-visible:outline focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
        aria-haspopup="menu"
        aria-expanded={open}
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
            role="menu"
          >
            {themes.map((t, index) => (
              <button
                key={t.id}
                ref={(el) => {
                  buttonRefs.current[index] = el
                }}
                onClick={() => {
                  setTheme(t.id as any)
                  setOpen(false)
                }}
                onKeyDown={(e) => {
                  if (e.key === 'ArrowDown') {
                    e.preventDefault()
                    buttonRefs.current[(index + 1) % themes.length]?.focus()
                  } else if (e.key === 'ArrowUp') {
                    e.preventDefault()
                    buttonRefs.current[
                      (index - 1 + themes.length) % themes.length
                    ]?.focus()
                  } else if (e.key === 'Escape') {
                    setOpen(false)
                  }
                }}
                role="menuitem"
                className={`group flex items-center gap-2 px-2 py-1 rounded hover:bg-[var(--muted)] hover:text-[var(--primary)] transition-colors duration-200 text-sm w-full ${
                  t.id === theme
                    ? 'text-[var(--primary)]'
                    : 'text-[var(--secondary)]'
                }`}
              >
                <span className="transition-transform duration-200 group-hover:scale-110">
                  {t.icon}
                </span>
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
