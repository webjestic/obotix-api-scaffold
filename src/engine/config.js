
import { Config } from './config_model.js'

export var doc = undefined

export async function pull() {
    try {
        doc = await Config.findOne({ 'name': process.env.NODE_ENV }).exec()
        console.log('Sucessfully pulled remote config.')
    } catch (ex) {
        console.error('Failed to pull remote data.')
        doc = undefined
    }
    return doc
}

export async function load() {
    return await pull()
}
