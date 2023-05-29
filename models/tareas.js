const Tarea = require('./tarea');

class Tareas {

    _listadoTareas = {};

    constructor() {
        this._listadoTareas = {}
    }

    get listarTareas() {
        let listado = [];
        Object.keys(this._listadoTareas).forEach(key => {
            //console.log(key);
            //const tarea = this._listadoTareas[key];
            listado.push(this._listadoTareas[key]);
        });

        //console.log(listado);
        return listado;
    }

    crearTarea(desc = '') {
        const tarea = new Tarea(desc);
        this._listadoTareas[tarea.id] = tarea;
    }

    cargarTareas(tareas = []) {
        tareas.forEach(tarea => {
            //console.log(tarea.id);
            this._listadoTareas[tarea.id] = tarea;
        })
    }
}

module.exports = Tareas;