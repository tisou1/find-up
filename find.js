import { findUp } from 'find-up'
import path from 'path'

// console.log(await findUp(['ccc.txt', 'index.md', 'package.json']))

console.log(path.dirname(process.cwd()))
