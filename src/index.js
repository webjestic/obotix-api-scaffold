
import os from 'os'

import * as setup from '././engine/setup.js'
import * as service from './engine/xpress.js'
import fnlib from 'fnlib'

import appRouter from './app/index.js'

console.log('Platform :', os.platform())
console.log('Hostname :', os.hostname())
console.log('CPUs     :', os.cpus().length)
console.log('Memory   :', fnlib.formatBytes(os.totalmem()))
console.log('Free     :', fnlib.formatBytes(os.freemem()))
os.hostname

await setup.run()
service.addRouter(appRouter(service.express.Router()))
service.run()
