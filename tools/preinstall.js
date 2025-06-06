/* eslint-disable no-console */
const fs = require('fs')
const path = require('path')

/**
 * Do NOT allow using `npm` as package manager.
 */
const isNpm = process.env.npm_execpath && process.env.npm_execpath.includes('npm')
const isYarn = process.env.npm_execpath && process.env.npm_execpath.includes('yarn')

console.log(process.env.npm_execpath)
if (isNpm && !isYarn) {
  console.error('You must use Yarn to install dependencies:')
  console.error('  $ yarn install')

  const lockFile = path.join(process.cwd(), 'package-lock.json')
  if (fs.existsSync(lockFile)) {
    fs.unlinkSync(lockFile)
    console.log('🧹 package-lock.json removed to enforce yarn-only usage')
  }
  process.exit(1)
}
