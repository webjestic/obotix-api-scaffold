
import express from 'express'
import 'express-async-errors'
import * as Logger from './logger.js'

import analtics from './middlware/request/analytics_middleware.js'
import send from './middlware/response/send_middleware.js'

import routeHome from './routes/home_route.js'

var app = undefined
var log = undefined

var appRouters = []
var reqMiddleware = []
var resMiddleware = []


function requestMiddleware() {
    app.use(express.json())
    app.use(express.urlencoded({ extended: false }))

    app.use(analtics)
}

function routes() {
    // eslint-disable-next-line no-useless-escape
    app.use('\/$', routeHome)
}

function responseMiddleware() {
    app.use(send)
}

function init() {
    app = express()
    log = Logger.getLogger('engine:service')
}

export function run() {
    init()

    requestMiddleware()
    routes()
    responseMiddleware()

    const port = process.env.OAPI_PORT || 3000
    app.listen(port, () => {
        log.info(`HTTP Server is listening on port ${port}.`)
    })
}

export function addRouter(router) {
    appRouters.push(router)
}

export function addRequestMiddleware(middlware) {
    reqMiddleware.push(middlware)
}

export function addResponseMiddleware(middlware) {
    resMiddleware.push(middlware)
}

export {
    app,
    express
}
