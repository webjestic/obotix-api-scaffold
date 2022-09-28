
import { loadEnvironment } from './env.js'
import  * as mongo from './mongo.js'
import * as config from './config.js'

export async function run() {
    loadEnvironment()
    await mongo.connect()
    await config.load()

    console.log(`OAPI_DOMAIN=${process.env.OAPI_DOMAIN}`)
}