// @flow

import sortOn from 'sort-on'

import work from './work'
import education from './education'
import projects from './projects'

const content = [...work, ...education, ...projects]

export default sortOn(content, '-dateFrom')
