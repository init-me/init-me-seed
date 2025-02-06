import { InitMeSeed } from 'init-me-seed-types'
import { initSeedConfig } from 'init-me-helper'
import path from 'path'

const SEED_PATH = path.join(__dirname, '../seeds')

const seed: InitMeSeed.Config = initSeedConfig({
  path: SEED_PATH
})

if (typeof module !== 'undefined' && module.exports) {
  module.exports = seed
}
export default seed
