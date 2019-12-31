import Router from '@koa/router'
import * as handlers from './domain.js'

const router = new Router()

router.get('/', (ctx) => {
    ctx.status = 200
    ctx.body = { code: 0, message: 'API works!' }
})

router.get('/health', (ctx) => {
    ctx.status = 200
})

router.get('/v1/domains', handlers.listDomainValues)
router.get('/v1/domains/:id', handlers.findDomainById)
router.post('/v1/domains', handlers.addDomain)
router.put('/v1/domains/:id', handlers.updateDomain)
router.delete('/v1/domains/:id', handlers.removeDomain)

export default router
