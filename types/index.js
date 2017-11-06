// @flow

export type SectionType = 'all' | 'education' | 'work' | 'projects'

export type Url = {
  pathname: string,
  query: {
    type?: SectionType,
  },
}

export type ContentType = {
  type: SectionType,
  title: string,
  subtitle?: string,
  Component: React.ComponentType<*>,
  link?: string,
}
