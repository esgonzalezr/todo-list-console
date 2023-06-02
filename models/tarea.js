const { v4: uuidv4 } = require('uuid');

class Tarea {

    id = '';
    descripcion = '';
    completadaEn = null;

    constructor(desc) {
        this.id = uuidv4();
        this.descripcion = desc;
        this.completadaEn = null;
    }
}

module.exports = Tarea;