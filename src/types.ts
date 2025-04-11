export type Page =
  | 'resume'
  | 'summary'
  | 'education'
  | 'skills'
  | 'experience'
  | 'other'
  | 'section1'
  | 'section2'
  | 'section3'

export interface PageConfig {
  pageName: Page
  isSubPage: boolean
  parent: Page | null
  isDefault?: boolean
}

export const pages: PageConfig[] = [
  { pageName: 'resume', isSubPage: false, parent: null, isDefault: true },
  { pageName: 'summary', isSubPage: true, parent: 'resume', isDefault: true },
  { pageName: 'education', isSubPage: true, parent: 'resume' },
  { pageName: 'skills', isSubPage: true, parent: 'resume' },
  { pageName: 'experience', isSubPage: true, parent: 'resume' },
  { pageName: 'other', isSubPage: true, parent: 'resume' },
  { pageName: 'section1', isSubPage: false, parent: null },
  { pageName: 'section2', isSubPage: false, parent: null },
  { pageName: 'section3', isSubPage: false, parent: null },
]
