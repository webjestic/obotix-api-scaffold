
import express from 'express'
import * as controller from '../controllers/home_controller.js'

var router = express.Router()

// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line no-useless-escape
router.get('\/$', (req, res, next) => {

    res.body = controller.body()
    res.status(200)
    next()
})

export default router
