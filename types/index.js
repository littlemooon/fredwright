// @flow

export type SectionType = 'all' | 'education' | 'work' | 'projects'

export type Url = {
  pathname: string,
  query: {
    type?: SectionType,
  },
}

type Tech = {
  title: string,
  href: string,
}

export type ContentType = {
  type: SectionType,
  title: string,
  links?: Array<string>,
  subtitle: string,
  date?: string,
  content: Array<string>,
  tech?: Array<Tech>,
}
