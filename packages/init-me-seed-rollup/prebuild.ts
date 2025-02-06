import { syncSeedsToProject } from 'init-me-helper'
syncSeedsToProject({
  dirPrefix: 'init-me-seed-rollup__',
  context: __dirname,
  fromDir: '../',
  toDir: './seeds'
})
