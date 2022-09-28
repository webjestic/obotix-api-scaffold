
import { Logish } from 'logish'
import * as config from './config.js'

export function getLogger() {
    return new Logish(config.doc.env.logish)
}
