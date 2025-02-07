import { syncSeedsToProject } from 'init-me-helper'
syncSeedsToProject({
  dirPrefix: 'init-me-seed-vite__base',
  context: __dirname,
  fromDir: '../',
  toDir: './seeds'
})
