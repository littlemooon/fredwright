// @flow

import { hotjar } from 'react-hotjar'

const id = process.env.HOTJAR_ID

export default {
  initialize() {
    id && hotjar.initialize(id, 6)
  },
}
