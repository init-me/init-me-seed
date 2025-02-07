import { syncSeedsToProject } from 'init-me-helper'
syncSeedsToProject({
  dirPrefix: 'init-me-seed-node__',
  clear: true,
  context: __dirname,
  fromDir: '../',
  toDir: './seeds'
})
