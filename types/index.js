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
  Component: React.ComponentType<*>,
  link?: string,
}
