import { projcetToSeed, cmdLogger } from 'init-me-helper'
import path from 'path'
import fs from 'fs'
const context = __dirname

const seedPrefix = 'init-me-seed-node__'

const seedParams = fs
  .readdirSync(path.join(context, '../'))
  .filter((dirname) => {
    return dirname.startsWith(seedPrefix)
  })
  .map((iPath) => {
    const dirname = path.basename(iPath).replace(seedPrefix, '')
    return {
      context,
      from: iPath,
      to: `./seeds/${dirname}`
    }
  })

cmdLogger.log('info', ['开始初始化项目中 seed 文件'])
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
