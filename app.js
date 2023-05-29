
//const { mostrarMenu, pausa } = require("./helpers/messages");

const { persistirDB, leerDB } = require('./helpers/db-interactions');
const { inquirerMenu, pausa, leerInput } = require('./helpers/inquirer');
const Tareas = require('./models/tareas');

require("colors");

const main = async () => {

  let option = '';
  const tareas = new Tareas();

  //Se lee la bd para ver si existen tareas
  const tareasLeidas = leerDB();
  if (tareasLeidas) {
    tareas.cargarTareas(tareasLeidas);
  }

  do {

    option = await inquirerMenu(); // Imprime el menú y captura la opción seleccionada por el usuario

    switch (option) {

      case '1':
        const desc = await leerInput('Por favor ingrese la descripción de la tarea:'); //Pide al usuario ingresar descripción de la tarea y crea la tarea.
        tareas.crearTarea(desc);
        break;

      case '2':
        console.log(tareas.listarTareas);
        break;
    }

    persistirDB(tareas.listarTareas);

    console.log('\n');
    if (option !== '0') await pausa();

  } while (option !== '0');
  console.clear(); //Limpia la consola al salir de la aplicación

};

main();
