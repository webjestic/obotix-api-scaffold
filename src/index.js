/**
 * 
 * 
*/

import os from 'os'

import * as setup from '././engine/setup.js'
import * as service from './engine/service.js'
import {formatBytes} from './lib/format_bytes.js'

console.log('Platform :', os.platform())
console.log('Hostname :', os.hostname())
console.log('CPUs     :', os.cpus().length)
console.log('Memory   :', formatBytes(os.totalmem()))
console.log('Free     :', formatBytes(os.freemem()))
os.hostname

await setup.run()
service.run()
