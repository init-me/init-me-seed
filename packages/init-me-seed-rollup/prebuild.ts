import { syncSeedsToProject } from 'init-me-helper'
syncSeedsToProject({
  dirPrefix: 'init-me-seed-rollup__',
  clear: true,
  context: __dirname,
  fromDir: '../',
  toDir: './seeds'
})
