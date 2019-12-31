import http from 'http'
import Koa from 'koa'
import koaBody from 'koa-body'
import logger from 'koa-logger'
import router from './routes/index.js'

const PORT = process.env.SERVER_PORT || 8000
const app = new Koa()
const env = process.env.NODE_ENV || 'development'

app.use(koaBody())
if (!'test' === env) {
    app.use(logger())
}
app.use(router.routes())

const server = http.createServer(app.callback())
    .listen(PORT, () => {
        console.log('Server has been started at localhost:' + PORT)
    })

export default server
