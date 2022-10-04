
import * as db from '../mongo.js' 

export function headers(res) {
    res.setHeader('X-Marker', 'Route/Control/Model')
}

export function body() {
    return { http: '1', db: `${db.readyState()}` }
}