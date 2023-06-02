const inquirer = require('inquirer');

require("colors");

/*
    Nota: La librería inquirer trabaja con base en promesas,
    por lo tanto, la implementación de todas las funciones se
    usen para que desplieguen menús deben ser async.
*/

/*****************************************
 * Inquirer que despliega el menú principal
 * y sus opciones
 *****************************************/
const options = [
    {
        type: 'list',
        name: 'opcion',
        message: '¿Qué desea hacer?',
        choices: [
            {
                value: '1',
                name: `${'1.'.green} Crear una tarea`
            },
            {
                value: '2',
                name: `${'2.'.green} Listar tareas`
            },
            {
                value: '3',
                name: `${'3.'.green} Listar tareas completadas`
            },
            {
                value: '4',
                name: `${'4.'.green} Listar tareas pendientes`
            },
            {
                value: '5',
                name: `${'5.'.green} Completar tareas`
            },
            {
                value: '6',
                name: `${'6.'.green} Borrar una tarea`
            },
            {
                value: '0',
                name: `${'0.'.red} Salir`
            }
        ]
    }
];

const inquirerMenu = async () => {
    console.clear();
    console.log("========================".green);
    console.log("    TO-DO List App")
    console.log("========================\n".green);

    const { opcion } = await inquirer.prompt(options);
    return opcion;
}

/***************************************
 * Inquirer para pausar los prompts de
 * la aplicación
 ***************************************/
const pausa = async () => {

    const question = [
        {
            type: 'input',
            name: 'pausa',
            message: `Presione ${'ENTER'.green} para continuar\n`
        }
    ];
    await inquirer.prompt(question);
    return;
}

/*************************************************
 * Inquirer para el prompt dinámico de leer datos
**************************************************/
const leerInput = async (desc) => {
    const question = [
        {
            type: 'input',
            name: 'descripcion',
            message: desc,
            validate(value) {
                if (value.length === 0) {
                    throw `${'La descripción es oblitaria!'.red}`
                } else {
                    return true;
                }
            }
        }
    ];

    const description = await inquirer.prompt(question);
    return description;

}

/*************************************************
 * Submenú para eliminar una tarea
**************************************************/
const listadoTareasBorrar = async (tareas = []) => {

    // Se modifica el array (map) para que tenga la estructura de las choices
    const choices = tareas.map((tarea, index) => {
        return { value: tarea.id, name: `${index + 1}. `.green + `${tarea.descripcion}`.white }
    });

    //Se arma el listado de opciones
    const lista = [
        {
            type: 'checkbox',
            name: 'selecciones',
            message: 'Seleccione las tareas que desea borrar\n',
            choices: choices
        }
    ];

    console.log();
    const { selecciones } = await inquirer.prompt(lista);
    return selecciones;
}

/**********************************/
module.exports = {
    inquirerMenu,
    pausa,
    leerInput,
    listadoTareasBorrar
}