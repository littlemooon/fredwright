// @flow

export type SectionType = 'all' | 'education' | 'work' | 'projects'

export type Url = {
  pathname: string,
  query: {
    type?: SectionType,
  },
}
