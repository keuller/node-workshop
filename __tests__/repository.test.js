
import DomainValue from '../src/domain/index.js'
import DomainRepository from '../src/infra/repository.js'

let domainId = ''
let repository = null

beforeAll(() => {
    repository = new DomainRepository()
})

describe('Repository unit test', () => {

    test('Add new domain value', () => {
        let d1 = new DomainValue('test', 'ABC', '123')
        repository.add(d1)

        expect(repository.fetchAll()).toBeDefined()
        expect(repository.fetchAll().length).toEqual(1)
        domainId = d1.id
    })

    test('Find by Id', () => {
        let record = repository.fetchById(domainId)

        expect(record).toBeDefined()
        expect(record.type).toEqual('test')
        expect(record.value).toEqual('123')
    })

    test('update domain value', () => {
        let d2 = new DomainValue('test', 'XYZ', '321')
        repository.update(d2.withId(domainId))

        let record = repository.fetchById(domainId)
        expect(record).toBeDefined()
        expect(record.type).toEqual('test')
        expect(record.key).toEqual('XYZ')
        expect(record.value).toEqual('321')
    })

    test('Remove an item', () => {
        repository.remove(domainId)

        expect(repository.fetchAll()).toBeDefined()
        expect(repository.fetchAll().length).toEqual(0)

        domainId = ''
    })

})