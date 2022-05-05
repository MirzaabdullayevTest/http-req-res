const EventEmitter = require('events');

class Emit extends EventEmitter {
    eventEmit(event) {
        this.emit(event)
    }
}

const eventObj = new Emit()

eventObj.on('click', function () {
    console.log('Event listened');
})

eventObj.eventEmit('click')