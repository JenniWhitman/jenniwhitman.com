import { useTheme } from '../context/ThemeContext'
import { motion } from 'framer-motion'
import { useState, useMemo, useEffect, useRef } from 'react'

const themes = [
  { id: 'light', label: 'Light', icon: '🌞' },
  { id: 'dark', label: 'Dark', icon: '🌚' },
  { id: 'monochrome', label: 'Mono', icon: '⚫' },
  { id: 'brutalist', label: 'Brutal', icon: '🧱' },
  { id: 'pastel', label: 'Pastel', icon: '🎨' },
  { id: 'cyber', label: 'Cyber', icon: '💾' },
  { id: 'handdrawn', label: 'Hand', icon: '✍️' },
  { id: 'natural', label: 'Nature', icon: '🌿' },
  { id: 'hacker', label: 'Hacker', icon: '💻' },
  { id: 'lisafrank', label: 'Lisa', icon: '🦄' },
  { id: 'windows95', label: 'Win95', icon: '🖥️' },
  { id: 'vintage', label: 'Vintage', icon: '📻' },
  { id: 'minimalist', label: 'Min', icon: '⚪' },
  { id: 'neon', label: 'Neon', icon: '🌈' },
]

const ThemeGridSwitcher = () => {
  const { theme, setTheme } = useTheme()
  const shuffledThemes = useMemo(
    () => [...themes].sort(() => Math.random() - 0.5),
    []
  )
  const [hovered, setHovered] = useState<string | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const activeIndex = shuffledThemes.findIndex((t) => t.id === theme)
    const container = containerRef.current
    const button = container?.children[activeIndex] as HTMLElement | undefined

    if (button && container) {
      const offset =
        button.offsetLeft - container.offsetWidth / 2 + button.offsetWidth / 2
      container.scrollTo({ left: offset, behavior: 'smooth' })
    }
  }, [theme, shuffledThemes])

  return (
    <div className="relative w-full overflow-x-auto">
      <div
        ref={containerRef}
        className="flex gap-2 px-4 py-2 min-w-max relative z-0"
      >
        {shuffledThemes.map((t) => (
          <motion.button
            key={t.id}
            onClick={() => setTheme(t.id as any)}
            onMouseEnter={() => setHovered(t.label)}
            onMouseLeave={() => setHovered(null)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.95 }}
            className={`relative text-xl p-2 rounded transition ${t.id === theme ? 'bg-[var(--muted)]' : ''}`}
            aria-label={`Switch to ${t.label} theme`}
          >
            <span className="block w-12 text-center">
              {hovered === t.label ? (
                <motion.span
                  initial={{ opacity: 0, rotateY: -90 }}
                  animate={{ opacity: 1, rotateY: 0 }}
                  exit={{ opacity: 0, rotateY: 90 }}
                  transition={{ duration: 0.6, ease: 'easeInOut' }}
                >
                  {t.label}
                </motion.span>
              ) : (
                <motion.span
                  initial={{ opacity: 0, rotateY: -90 }}
                  animate={{ opacity: 1, rotateY: 0 }}
                  exit={{ opacity: 0, rotateY: 90 }}
                  transition={{ duration: 0.6, ease: 'easeInOut' }}
                >
                  {t.icon}
                </motion.span>
              )}
            </span>
          </motion.button>
        ))}
      </div>
    </div>
  )
}

export default ThemeGridSwitcher
