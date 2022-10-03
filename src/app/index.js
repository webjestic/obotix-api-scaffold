
import * as engine from '../engine/index.js'

export default (router) => {
    let log = engine.logger.getLogger('app:index')


    // Microservice App Code GOES HERE

    // router.use( myMiddleware )
    // router.use( '/myroute', myRoute )

    // engine.addRequestMiddleware( customMiddleware )
    // engine.addResponseMiddleware( moreMiddleware )

    // engine.db.mongoose
    // engine.redis.cmd
    // engine.redis.pub
    // engine.config.doc



    log.debug('App Module Loaded')
    return router
}
