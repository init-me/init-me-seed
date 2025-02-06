import { projcetToSeed, cmdLogger } from 'init-me-helper'
import path from 'path'
import fs from 'fs'
import chalk from 'chalk'
const context = __dirname

const seedPrefix = 'init-me-seed-rollup__'
const seedParams = fs
  .readdirSync(path.join(context, '../'))
  .filter((dirname) => {
    return dirname.startsWith(seedPrefix)
  })
  .map((dirname) => {
    const nextDirname = dirname.replace(seedPrefix, '')
    const from = path.join(context, '../', dirname)
    return {
      context,
      from,
      to: `./seeds/${nextDirname}`
    }
  })

cmdLogger.log('info', [
  `开始初始化项目中 ${chalk.cyan('seed')} 文件, 共 ${chalk.green(seedParams.length)} 个种子文件.`
])
const pms: Promise<string[]>[] = []
seedParams.forEach((params) => {
  pms.push(
    projcetToSeed({
      ...params,
      logger: cmdLogger
    })
  )
})
Promise.all(pms).then(() => {
  cmdLogger.log('success', ['初始化项目中 seed 文件完成'])
})
