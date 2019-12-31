import DomainValue from '../domain/index.js'
import DomainRepository from '../infra/repository.js'

export default class DomainService {

    constructor() {
        this.repository = new DomainRepository()
    }

    addDomain(domain) {
        if (domain.type == '') return
        if (domain.key == '') return
        if (domain.value == '') return

        let entity = new DomainValue(domain.type, domain.key, domain.value)
        this.repository.add(entity)
        console.log('Domain value created with', entity.id)
    }

    updateDomain(domain) {
        if (domain.id == '') return

        let entity = new DomainValue(domain.type, domain.key, domain.value)
        entity.withId(domain.id)

        this.repository.update(domain)
    }

    listDomains() {
        return this.repository.fetchAll()
    }

    findById(id) {
        return this.repository.fetchById(id)
    }

    removeDomain(id) {
        this.repository.remove(id)
    }
}
