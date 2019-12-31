import DomainRepository from '../src/infra/repository.js'
import DomainService from '../src/service/domain.js'

jest.mock('../src/infra/repository.js') // DomainRepository is now a mock

let service = new DomainService()

describe('Repository unit test', () => {
    let domainId = ''

    test('Add a new domain value', () => {
        service.addDomain({ type: 'gender', key: 'M', value: 'male' })

        expect(DomainRepository).toHaveBeenCalledTimes(1)
    })

    test('Update a domain value', () => {
        service.updateDomain({ id: '', type: 'gender', key: 'M', value: 'MALE' })
        
        expect(DomainRepository).toHaveBeenCalledTimes(1)
    })

})
