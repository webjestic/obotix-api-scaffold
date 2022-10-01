
import os from 'os'

import * as setup from '././engine/setup.js'
import * as service from './engine/service.js'
import fnlib from 'fnlib'

console.log('Platform :', os.platform())
console.log('Hostname :', os.hostname())
console.log('CPUs     :', os.cpus().length)
console.log('Memory   :', fnlib.formatBytes(os.totalmem()))
console.log('Free     :', fnlib.formatBytes(os.freemem()))
os.hostname

await setup.run()
service.run()
