const fs = require('fs');
const colors = require('colors');
const _ = require('lodash');

let listadoPorHacer = [];

const gaurdarDB = () => {
        let data = JSON.stringify(listadoPorHacer); //comvierte un objeto a un formato JSON
        fs.writeFile('db/data.json', data, (err) => {
            if (err) return err
            else
                return ('creado')
        })

    }
    //lee el archivo para hacer un append despues
const cargarDB = () => {
    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        //        if (listadoPorHacer == null) {
        listadoPorHacer = [];
        //      }
    }




}

const getListado = () => {
    //let listadoPorHacer = require('../db/data.json')
    cargarDB();
    return listadoPorHacer
}

const crear = (descripcion) => {
    //se carga el db para luego ahacer un append
    cargarDB();
    let porHacer = {
        descripcion, //:descripcion, en etmascript 6 es redundante 
        completado: false
    };

    listadoPorHacer.push(porHacer);
    gaurdarDB();
    return listadoPorHacer;
}


const consultar = (descripcion) => {
    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    if (index >= 0) {
        return listadoPorHacer[index];
    } else {
        return false;
    }
}

const actualizar = (descripcion, completado = true) => {
    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    /*  {
        return tarea.descripcion === descripcion;
    }) */
    // si no encuentra la descipcion devuelte un -1 , sino devuelve el indice del arreglo donde se encuentra la descp
    console.log(index);
    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        gaurdarDB();
        return true;
    } else {
        return false;
    }
}

const borrar = (descripcion) => {


    cargarDB();
    let remov = _.remove(listadoPorHacer, (listadoPorHacer) => {
        return listadoPorHacer.descripcion == descripcion
    });
    gaurdarDB();
    let consult = consultar(descripcion);
    if (consult == descripcion) {
        return false;
    } else {
        return true;
    }

    /*  if (index >= 0) {
         gaurdarDB();
         return true;
     } else {
         return false;
     } */
}


module.exports = {
    crear,
    getListado,
    actualizar,
    borrar,
    consultar
}