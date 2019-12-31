
import uuid from 'uuid'

const uuidv4 = uuid.v4

export default class DomainRepository {

    constructor() {
        this.data = new Set([])
    }

    add(domain) {
        let found = [...this.data].find(item => item.eq(domain))
        if (found) return

        const did = uuidv4().substr(0, 23).replace(/-/gi, '')
        this.data.add(domain.withId(did))
    }

    update(domain) {
        let found = [...this.data].find(item => item.id == domain.id)
        if (!found) return

        let tmp = [...this.data].map(item => {
            if (item.id == domain.id) {
                item.withKey(domain.key).withValue(domain.value)
            }
            return item
        })
        
        this.data = new Set(tmp)
    }

    fetchById(id) {
        return [...this.data].find(item => item.id == id)
    }

    fetchAll() {
        return [...this.data]
    }

    remove(id) {
        let tmp = [...this.data].filter(item => item.id != id)
        this.data = new Set([...tmp])
    }

}
