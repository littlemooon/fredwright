// @flow

import sortOn from 'sort-on'

import work from './work'
import education from './education'
import projects from './projects'

export default sortOn([...work, ...education, ...projects], '-dateFrom')
