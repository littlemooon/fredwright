// @flow

export type CardType = 'all' | 'education' | 'work' | 'projects'

export type Url = {
  pathname: string,
  query: {
    type?: CardType,
  },
}

type Tech = {
  title: string,
  href: string,
}

export type ContentType = {
  type: CardType,
  title: string,
  links?: Array<string>,
  subtitle: string,
  dateFrom: string,
  dateTo?: string,
  content: Array<string>,
  tech?: Array<Tech>,
  printable?: boolean,
}
