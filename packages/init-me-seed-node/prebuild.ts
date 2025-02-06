import { projcetToSeed, cmdLogger } from 'init-me-helper'
import path from 'path'
const context = __dirname
const seedParams = ['../seed-node-base'].map((iPath) => {
  const dirname = path.basename(iPath).replace(/^seed-node-/, '')
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
