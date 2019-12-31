/**
 * This file declares all functions that will handle requests for domain values
 */
import DomainService from '../service/domain.js'

const service = new DomainService()

export function addDomain(context) {
    service.addDomain(context.request.body)
    context.status = 201
    context.body = { code: 0, message: 'Domain value created successfuly.' }
}

export function updateDomain(context) {
    let data = context.request.body
    data.id = context.params.id

    service.updateDomain(data)

    context.status = 200
    context.body = { code: 0, message: 'Domain value updated successfuly.' }
}

export function findDomainById(context) {
    let entity = service.findById(context.params.id)
    
    if (entity) {
        context.status = 200
        context.body = entity
        return
    }

    context.status = 404
    context.body = { code: 1, message: 'Domain value not found.' }
}

export function listDomainValues(context) {
    context.status = 200
    context.body = service.listDomains()
}

export function removeDomain(context) {
    service.removeDomain(context.params.id)
    context.status = 200
    context.body = { code: 0, message: 'Domain value has been removed.' }
}
