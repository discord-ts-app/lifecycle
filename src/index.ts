import { EventEmitter } from 'events'
import Lifecycles from './Enums/Lifecycle'

class Emitter extends EventEmitter {}
const NodeEmitter = new Emitter()

class Lifecycle<O> {
	public identifier: string

	constructor(identifier: string, options?: O) {
		this.identifier = identifier
		NodeEmitter.emit(this.identifier, options)
	}
}

export { Lifecycle, Lifecycles, NodeEmitter }
