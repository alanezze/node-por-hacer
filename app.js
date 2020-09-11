//requires
const yargs = require('./config/yargs');
const colors = require('colors');
const porHacer = require('./por-hacer/por-hacer');

//optimizacion
const argv = yargs.argv;
//console.log(argv);
//para crear una lista de tareas se le pasa una --descrption/-d despues del argumentp
//ej:   node app crear -d "Pasear al Perro"
let comando = argv._[0]

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break
    case 'listar':
        let listado = porHacer.getListado();
        console.log('===========Por Hacer============'.green);
        for (let tarea of listado) {
            //console.log('============================'.bgGreen);
            console.log(tarea.descripcion);
            console.log(tarea.completado);
            console.log('============================='.bgGreen);
        }
        console.log('==============================='.green);
        break
    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado)
        console.log(actualizado);
        break
    case 'borrar':
        let borrar = porHacer.borrar(argv.descripcion);
        console.log(borrar);
        break
    case 'consultar':
        let consultar = porHacer.consultar(argv.descripcion);
        console.log(consultar);
        break
    default:
        console.log(`Comando ${comando} no es reconocido`.underline.red);
}