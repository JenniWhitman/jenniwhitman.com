export type Page =
  | 'resume'
  | 'summary'
  | 'education'
  | 'skills'
  | 'experience'
  | 'other'
  | 'music'
  | 'section2'
  | 'section3'

export interface PageConfig {
  pageName: Page
  isSubPage: boolean
  parent: Page | null
  isDefault?: boolean
}
