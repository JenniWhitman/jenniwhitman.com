import { useTheme } from '../context/ThemeContext'
import { motion } from 'framer-motion'
import { useState, useMemo, useEffect, useRef } from 'react'
import {
  Sun,
  Moon,
  Circle,
  Terminal,
  Palette,
  Monitor,
  Cloud,
  Flower2,
  Bug,
  Sparkles,
  MonitorSmartphone,
  Radio,
  Square,
  Zap,
} from 'lucide-react'

const themes = [
  { id: 'light', label: 'Light', icon: Sun },
  { id: 'dark', label: 'Dark', icon: Moon },
  { id: 'monochrome', label: 'Mono', icon: Circle },
  { id: 'brutalist', label: 'Brutal', icon: Terminal },
  { id: 'pastel', label: 'Pastel', icon: Palette },
  { id: 'cyber', label: 'Cyber', icon: Monitor },
  { id: 'handdrawn', label: 'Hand', icon: Cloud },
  { id: 'natural', label: 'Nature', icon: Flower2 },
  { id: 'hacker', label: 'Hacker', icon: Bug },
  { id: 'lisafrank', label: 'Lisa', icon: Sparkles },
  { id: 'windows95', label: 'Win95', icon: MonitorSmartphone },
  { id: 'vintage', label: 'Vintage', icon: Radio },
  { id: 'minimalist', label: 'Min', icon: Square },
  { id: 'neon', label: 'Neon', icon: Zap },
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
      <div ref={containerRef} className="flex gap-2 px-4 py-2 min-w-max">
        {shuffledThemes.map((t) => (
          <motion.button
            key={t.id}
            onClick={() => setTheme(t.id as any)}
            onMouseEnter={() => setHovered(t.label)}
            onMouseLeave={() => setHovered(null)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`relative w-8 h-8 flex items-center justify-center p-1 rounded transition ${t.id === theme ? 'bg-[var(--muted)]' : ''}`}
            aria-label={`Switch to ${t.label} theme`}
          >
            <t.icon className="w-5 h-5" style={{ color: 'var(--primary)' }} />
          </motion.button>
        ))}
      </div>

      <div className="text-center mt-2 text-xs text-[var(--secondary)] flex justify-center gap-1 whitespace-nowrap">
        <span>Current Theme:</span>
        <span className="inline-block min-w-[4rem] text-left">
          {hovered || themes.find((t) => t.id === theme)?.label}
        </span>
      </div>
    </div>
  )
}

export default ThemeGridSwitcher
