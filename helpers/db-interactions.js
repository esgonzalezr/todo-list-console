const fs = require('node:fs');

const archivo = './db/data.json';

const persistirDB = (data) => {
    fs.writeFileSync(archivo, JSON.stringify(data));
}

const leerDB = () => {
    if (!fs.existsSync(archivo)) {
        return;
    }

    const loadedFile = fs.readFileSync(archivo, { encoding: 'utf-8' });
    const parsedFile = JSON.parse(loadedFile);
    return parsedFile;
}

module.exports = {
    persistirDB,
    leerDB
}