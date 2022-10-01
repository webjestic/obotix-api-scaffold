
import Redis from 'ioredis'
import * as Logger from './logger.js'

var log = undefined

var redis = undefined
var pub = undefined

export async function connect() {
    log = Logger.getLogger('engine:redis')
    try {
        redis = new Redis()
        pub = new Redis()
        log.info('Redis connected and publisher channel open.')
    } catch(err) {
        log.error(err)
    }
}

export {
    redis,
    pub
}


