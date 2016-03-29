import { EventEmitter } from 'events'
import { CHANGE_EVENT } from '../actions/constants'

class SimpleStore extends EventEmitter {
    constructor(initialState) {
        super()
        this.__items = []
        if (initialState) initialState.forEach(this.__add)
    }

    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback)
    }

    emitChange() {
        this.emit(CHANGE_EVENT)
    }

    removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback)
    }

    getAll() {
        return this.__items.slice()
    }

    __add = (data) => {
        this.__items.push(data)
    }

    __delete = (id) => {
        this.__items = this.__items.filter(item => item.id != id)
    }
}

export default SimpleStore