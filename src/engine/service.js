
import express from 'express'
import 'express-async-errors'
import * as Logger from './logger.js'

var app = undefined
var log = undefined


function init() {
    app = express()
    log = Logger.getLogger()
    log.setNamespace('engine:service')
}

export function run() {
    init()

    app.use(express.json())
    app.use(express.urlencoded({ extended: false }))

    const port = process.env.OAPI_PORT || 3000
    app.listen(port, () => {
        log.info(`HTTP Server ${process.pid} is listening on port ${port}.`)
    })

}
