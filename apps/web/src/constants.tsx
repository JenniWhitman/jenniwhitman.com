import { PageConfig } from '@/types'

export const pages: PageConfig[] = [
  { pageName: 'resume', isSubPage: false, parent: null, isDefault: true },
  { pageName: 'summary', isSubPage: true, parent: 'resume', isDefault: true },
  { pageName: 'education', isSubPage: true, parent: 'resume' },
  { pageName: 'skills', isSubPage: true, parent: 'resume' },
  { pageName: 'experience', isSubPage: true, parent: 'resume' },
  { pageName: 'other', isSubPage: true, parent: 'resume' },
  { pageName: 'music', isSubPage: false, parent: null },
  { pageName: 'section2', isSubPage: false, parent: null },
  { pageName: 'section3', isSubPage: false, parent: null },
]
