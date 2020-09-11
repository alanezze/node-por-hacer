const obligatorio = {
    descripcion: {
        demand: true, //obligatorio
        alias: 'd'
    }
}

const completado = {
    descripcion: {
        demand: true, //obligatorio
        alias: 'd'
    },
    completado: {
        alias: 'c',
        default: true
    }
}
const argv = require('yargs')
    .command('crear', 'Crea una lista de tareas por hacer', obligatorio)
    .command('actualizar', 'marca una tarea completada', completado)
    .command('borrar', 'borra un registro de la DB', obligatorio)
    .help()
    .argv;

module.exports = {
    argv
}