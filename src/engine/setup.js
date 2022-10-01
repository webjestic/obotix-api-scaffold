
import { loadEnvironment } from './env.js'
import  * as mongo from './mongo.js'
import * as config from './config.js'
import * as redis from './redis.js'

export async function run() {
    loadEnvironment()
    await mongo.connect()
    await config.load()
    redis.connect()
}
