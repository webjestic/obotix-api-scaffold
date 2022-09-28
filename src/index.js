/**
 * 
 * 
*/

import os from 'os'
import cluster from 'cluster'

import * as primary from './engine/primary.js'
import * as worker from './engine/worker.js'

// Limit CPU workers to minimum out of respect for memory
let cpus = os.cpus().length
let workers = 0
if (cpus > 4 && cpus <= 8) 
    workers = 1
else if (cpus > 8) 
    workers = 2


if (workers > 0) {
    // multi CPU, running as clustered node 
    // Primary is used for database and long running processes
    if (cluster.isPrimary) {

        console.log (`Clustering CPUs: Primary: ${process.pid}`)
        await primary.run()

        // create the worker "threads"
        for (let i = 0; i < workers; i++) 
            cluster.fork()
        

    // Workers are used for fast running (http requests)
    } else {
        console.log (`Worker ${cluster.worker.id} ${process.pid}`)
        worker.run()

    }
} else {

    // one CPU run as standard single threaded node
    await primary.run()
    worker.run()
}
