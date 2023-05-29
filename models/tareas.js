const Tarea = require('./tarea');

class Tareas {
    _listadoTareas = {};

    constructor() {
        this._listadoTareas = {}
    }

    crearTarea(desc = '') {

        const tarea = new Tarea(desc);
        this._listadoTareas[tarea.id] = tarea;
        
    }
}

module.exports = Tareas;