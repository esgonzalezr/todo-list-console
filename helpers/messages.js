require("colors");

const mostrarMenu = () => {

  return new Promise((resolve) => {

    console.clear();
    console.log("========================".green);
    console.log(" Seleccione una opción".green)
    console.log("========================\n".green);

    console.log(` ${'1.'.green} Crear una tarea`);
    console.log(` ${'2.'.green} Listar tareas`);
    console.log(` ${'3.'.green} Listar tareas completadas`);
    console.log(` ${'4.'.green} Listar tareas pendientes`);
    console.log(` ${'5.'.green} Completar tareas`);
    console.log(` ${'6.'.green} Borrar una tarea`);
    console.log(` ${'0.'.green} Salir\n`);

    // Se crea prepara la consola para catpurar un dato ingresado por el usuario
    const readline = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout
    });

    //Se le pregunta al usuario para que digite una opción
    readline.question("Selecciona una opción: ", (option) => {
      readline.close();
      resolve(option); //Acá se resuelve la promesa y retorna la opción digitada
    });

  });

};

const pausa = () => {

  return new Promise((resolve) => {

    const readline = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout
    });

    readline.question(`\nPresione ${'ENTER'.green} para continuar\n`, () => {
      readline.close();
      resolve();
    });

  });

}


module.exports = {
  mostrarMenu,
  pausa
}