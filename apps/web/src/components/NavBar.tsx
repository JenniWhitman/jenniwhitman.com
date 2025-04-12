import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronUp } from 'lucide-react'
import { Page, pages, PageConfig } from '@/types'

interface NavBarProps {
  activePage: Page
  setActivePage: React.Dispatch<React.SetStateAction<Page>>
}

const getMainPages = (): PageConfig[] => pages.filter((p) => !p.isSubPage)

const getSubPages = (parent: Page): PageConfig[] =>
  pages.filter((p) => p.parent === parent)

const getDefaultSubPage = (parent: Page): Page | null => {
  const defaultSub = pages.find((p) => p.parent === parent && p.isDefault)
  return defaultSub ? defaultSub.pageName : null
}

const isSubPageActive = (page: Page, activePage: Page): boolean => {
  return (
    page === activePage ||
    (page === 'resume' &&
      getSubPages('resume').some((sub) => sub.pageName === activePage))
  )
}

const NavBar = ({ activePage, setActivePage }: NavBarProps) => {
  return (
    <nav className="flex flex-col items-center text-sm relative gap-2">
      <div className="flex flex-wrap justify-center gap-4">
        {getMainPages().map((page) => (
          <button
            key={page.pageName}
            onClick={() => {
              if (getSubPages(page.pageName).length) {
                setActivePage(getDefaultSubPage(page.pageName) || page.pageName)
              } else {
                setActivePage(page.pageName)
              }
            }}
            className={`relative pb-1 transition-colors duration-200 hover:text-[var(--primary)] flex items-center gap-1 ${isSubPageActive(page.pageName, activePage) ? 'text-[var(--primary)]' : 'text-[var(--secondary)]'}`}
          >
            <span
              className={`relative ${isSubPageActive(page.pageName, activePage) ? 'after:absolute after:left-0 after:right-0 after:-bottom-0.5 after:h-0.5 after:bg-[var(--primary)] content-[]' : ''}`}
            >
              {page.pageName.charAt(0).toUpperCase() + page.pageName.slice(1)}
            </span>

            {getSubPages(page.pageName).length > 0 && (
              <motion.span
                initial={{ rotate: 0 }}
                animate={{
                  rotate: isSubPageActive(page.pageName, activePage) ? 180 : 0,
                }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="inline-block"
              >
                <ChevronUp size={18} />
              </motion.span>
            )}
          </button>
        ))}
      </div>

      <AnimatePresence initial={false}>
        {getSubPages('resume').some((sub) => sub.pageName === activePage) && (
          <motion.div
            key="subnav"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden flex justify-center gap-4 pt-1 min-h-[3rem]"
          >
            {getSubPages('resume').map((sub) => (
              <button
                key={sub.pageName}
                onClick={() => setActivePage(sub.pageName)}
                className={`relative pb-1 transition-all duration-300 ease-in-out hover:text-[var(--primary)] ${activePage === sub.pageName ? 'text-[var(--primary)] text-xl font-display after:absolute after:left-0 after:right-0 after:-bottom-0.5 after:h-0.5 after:bg-[var(--primary)] content-[]' : 'text-xs text-[var(--secondary)]'}`}
              >
                {sub.pageName.charAt(0).toUpperCase() + sub.pageName.slice(1)}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default NavBar
