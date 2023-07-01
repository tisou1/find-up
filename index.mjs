import path, { resolve, basename, dirname, parse } from 'node:path'
import fs from 'node:fs'

function findUP(path, options = {}) {
  let paths = [path].flat() // 统一成数组

  let directory = options.cwd || process.cwd()
  const { root } = parse(directory)

  let res = []
  while (true) {
    let foundPath = localePath(paths, directory)
    if (foundPath && Array.isArray(foundPath)) {
      res.push(...foundPath)
      let foundArr = foundPath.map(item => basename(item))
      paths = paths.filter(path => !foundArr.includes(path))
    }
    if (directory === root) {
      return res
    }
    directory = dirname(directory)
  }
}

function localePath(paths, cwd) {
  const ans = []

  for (let path of paths) {
    let filepath = resolve(cwd, path)
    let flag = findFile(filepath)
    flag && ans.push(filepath)
  }

  return ans
}

function findFile(filepath) {
  // 检测目录文件
  // 判断文件存不存在
  try {
    // 第二个参数, 制定访问模式
    fs.accessSync(filepath)
    return true
  } catch (err) {
    return false
  }
}

export default findUP

/**
 * 判断文件存不存在
 * 1. fs.stat
 * 2. fs.existsSync
 * 3. fs.access
 */
