const Tarea = require('./tarea');

class Tareas {

    _listadoTareas = {};

    constructor() {
        this._listadoTareas = {}
    }

    /*****************
    * Getter de tareas
    ******************/

    get listarTareas() {
        let listado = [];
        Object.keys(this._listadoTareas).forEach(key => { //Se accede al objeto por índice
            //console.log(key);
            //const tarea = this._listadoTareas[key];
            listado.push(this._listadoTareas[key]);
        });
        //console.log(listado);
        return listado;
    }

    /*************************************************
    * Método para agregar tareas al listado de tareas
    *************************************************/
    crearTarea(desc = '') {
        const tarea = new Tarea(desc);
        this._listadoTareas[tarea.id] = tarea;
    }

    /*************************************************
    * Método para cargar el listado de tareas
    *************************************************/
    cargarTareas(tareas = []) {
        tareas.forEach(tarea => {
            //console.log(tarea.id);
            this._listadoTareas[tarea.id] = tarea;
        })
    }
}

module.exports = Tareas;