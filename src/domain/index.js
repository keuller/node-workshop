
export default class DomainValue {

    constructor(type, key, value) {
        this._id = ''
        this._type = type
        this._key  = key
        this._value = value
    }

    get id() { return this._id }

    withId(value) {
        if (value) this._id = value
        return this
    }

    get type() { return this._type }

    withType(value) {
        if (value) this._type = value
        return this
    }

    get key() { return this._key }

    withKey(value) {
        if (value) this._key = value
        return this
    }

    get value() { return this._value }

    withValue(value) {
        if(value) this._value = value
        return this
    }

    eq(obj) {
        return (obj.type == this.type && obj.key == this.key)
    }
    
}
