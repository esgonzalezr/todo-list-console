const fs = require('node:fs');

const archivo = './db/data.json';


/*****************************************
 * Método para escribir en db.json
 *****************************************/
const persistirDB = (data) => {
    fs.writeFileSync(archivo, JSON.stringify(data));
}

/*****************************************
 * Método para leer de db.json
 *****************************************/
const leerDB = () => {
    if (!fs.existsSync(archivo)) {
        return;
    }

    const loadedFile = fs.readFileSync(archivo, { encoding: 'utf-8' });
    const parsedFile = JSON.parse(loadedFile);
    return parsedFile;
}

/************************/
module.exports = {
    persistirDB,
    leerDB
}