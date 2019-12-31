
import request from 'supertest'
import server from '../src/server.js'

// beforeAll(() => {
//     console.log('Running unit tests')
// })

afterAll(() => server.close())

describe('Default tests', () => {

    test('Health endpoint', async () => {
        const response = await request(server).get('/health')
        expect(response.status).toEqual(200)
    })

    test('Default endpoint', async () => {
        const response = await request(server).get('/')

        expect(response.status).toEqual(200)
        expect(response.text).toBeDefined()
        expect(JSON.parse(response.text)).toEqual({ code: 0, message: 'API works!' })
    })

})