import { EventEmitter } from 'events'

class Emitter extends EventEmitter {}
const NodeEmitter = new Emitter()

class Lifecycle<Options> {
	public identifier: string

	constructor(lifecycle: 'messageReceived' | 'commandReceived' | 'createDiscordClient' | 'starting' | 'commandLoaded' | 'eventLoaded' | 'middlewareLoaded', options?: Options) {
		this.identifier = lifecycle
		NodeEmitter.emit(this.identifier.toString(), options)
	}
}

export { Lifecycle, NodeEmitter }
