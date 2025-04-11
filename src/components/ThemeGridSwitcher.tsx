import { useTheme } from '../context/ThemeContext'
import { motion } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import {
  Sun,
  Moon,
  Dot,
  Terminal,
  Palette,
  Skull,
  PencilLine,
  Flower2,
  BrickWall,
  Icon,
  MonitorSmartphone,
  Radio,
  Sparkles,
  Zap,
} from 'lucide-react'
import {
  butterfly,
  featherText,
  floppyDisk2,
  treesForest,
  unicornHead,
} from '@lucide/lab'

const themes = [
  { id: 'light', label: 'Light', icon: Sun, lab: false },
  { id: 'dark', label: 'Dark', icon: Moon, lab: false },
  { id: 'monochrome', label: 'Mono', icon: Palette, lab: false },
  { id: 'brutalist', label: 'Brutal', icon: BrickWall, lab: false },
  {
    id: 'pastel',
    label: 'Pastel',
    icon: Palette,
    lab: true,
    iconNode: butterfly,
  },
  { id: 'cyber', label: 'Cyber', icon: Skull, lab: false },
  { id: 'handdrawn', label: 'Hand', icon: PencilLine, lab: false },
  {
    id: 'natural',
    label: 'Nature',
    icon: Flower2,
    lab: true,
    iconNode: treesForest,
  },
  { id: 'hacker', label: 'Hacker', icon: Terminal, lab: false },
  {
    id: 'lisafrank',
    label: 'Lisa Frank',
    icon: Sparkles,
    lab: true,
    iconNode: unicornHead,
  },
  {
    id: 'windows95',
    label: 'Win95',
    icon: MonitorSmartphone,
    lab: true,
    iconNode: floppyDisk2,
  },
  {
    id: 'vintage',
    label: 'Vintage',
    icon: Radio,
    lab: true,
    iconNode: featherText,
  },
  { id: 'minimalist', label: 'Min', icon: Dot, lab: false },
  { id: 'neon', label: 'Neon', icon: Zap, lab: false },
]

const ThemeGridSwitcher = () => {
  const { theme, setTheme } = useTheme()
  const [hovered, setHovered] = useState<string | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const activeIndex = themes.findIndex((t) => t.id === theme)
    const container = containerRef.current
    const button = container?.children[activeIndex] as HTMLElement | undefined

    if (button && container) {
      const offset =
        button.offsetLeft - container.offsetWidth / 2 + button.offsetWidth / 2
      container.scrollTo({ left: offset, behavior: 'smooth' })
    }
  }, [theme, themes])

  return (
    <div className="relative w-full overflow-x-auto overflow-y-hidden">
      <div ref={containerRef} className="flex gap-2 px-4 py-2 min-w-max">
        {themes.map((t) => (
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
            {t.lab && t.iconNode ? (
              <Icon
                iconNode={t.iconNode}
                className="w-5 h-5"
                style={{ color: 'var(--primary)' }}
              />
            ) : (
              <t.icon className="w-5 h-5" style={{ color: 'var(--primary)' }} />
            )}
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
