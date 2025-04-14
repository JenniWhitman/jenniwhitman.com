export type Page =
  | 'resume'
  | 'summary'
  | 'education'
  | 'skills'
  | 'experience'
  | 'other'
  | 'music'

export interface PageConfig {
  pageName: Page
  isSubPage: boolean
  parent: Page | null
  isDefault?: boolean
}
