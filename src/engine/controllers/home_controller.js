


export function headers(res) {
    res.setHeader('X-Marker', 'Route/Control/Model')
}

export function body() {
    return { message: 'message' }
}