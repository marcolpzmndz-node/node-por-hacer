const opts = {
    descripcion: {
        alias: 'd',
        demand: true,
        desc: 'Descripcion de la tarea por hacer'
    },
    completado: {
        alias: 'c',
        default: true,
        demand: true,
        desc: 'Marca como completado o pendiente la tarea'
    },
    borrar: {
        demand: true,
        alias: 'd',
        desc: 'Borra una tarea'
    }
}


const argv = require('yargs')
    .command('crear', 'crear un elemento por hacer', opts)
    .command('actualizar', 'actualiza el estado completado de una tarea', opts)
    .command('borrar', 'borra una tarea de la bd', opts)
    .argv;

module.exports = {
    argv
}