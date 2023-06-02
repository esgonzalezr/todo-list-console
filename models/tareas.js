const Tarea = require('./tarea');
const colors = require('colors');

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

    /*************************************************
    * Método para listar en pantalla todas las tareas
    *************************************************/

    // 1. Tarea 1 :: Completada
    // 2. Tarea 2 :: Pendiente
    listadoCompleto() {
        console.log();
        let listado = this.listarTareas;
        listado.forEach((tarea, index) => {
            //console.log(tarea);
            console.log(colors.green(index + 1) + `. ${tarea.descripcion} :: ${tarea.completadaEn ? 'Completada'.green : 'Pendiente'.red}`);
        });
    }

    /*************************************************
    * Método para listar en pantalla todas las tareas
    * por estado (completa / pendiente)
    *************************************************/
    listarPorEstado(estado = true) {
        let result = [];
        console.log();
        if (estado) {
            result = this.listarTareas.filter(tarea => tarea.completadaEn !== null).forEach((tareaCompleta, index) => {
                console.log(colors.green(index + 1) + `. ${tareaCompleta.descripcion} :: completada el ${tareaCompleta.completadaEn}`);
            });
        } else {
            result = this.listarTareas.filter(tarea => tarea.completadaEn === null).forEach((tareaCompleta, index) => {
                console.log(colors.green(index + 1) + `. ${tareaCompleta.descripcion} :: ${tareaCompleta.completadaEn ? 'Completada'.green : 'Pendiente'.red}`);
            });
        };
    }

    /*************************************************
    * Método para borrar un listado de tareas
    *************************************************/
    borrarTareas(tareasId = []) {
        
        if (tareasId.length > 0) {
            tareasId.forEach(id => {
                delete this._listadoTareas[id];
            })
        }
        
    }
}

/**********************************/
module.exports = Tareas;