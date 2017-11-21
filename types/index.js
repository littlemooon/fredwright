// @flow

export type SectionType = 'all' | 'education' | 'work' | 'projects'

export type Url = {
  pathname: string,
  query: {
    type?: SectionType,
  },
}

type ContentLink = {
  title: string,
  href: string,
}

export type ContentType = {
  type: SectionType,
  title: string,
  link?: string,
  subtitle: string,
  date?: string,
  content: Array<string>,
  links: Array<ContentLink>,
}
