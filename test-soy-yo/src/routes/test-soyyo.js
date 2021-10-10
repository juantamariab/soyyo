const { Router} = require('express');
const router = Router();
const errorList = require('../../error.json');
const data = require('../../info.json');
const respuesta = require('../models/respuesta');
const entidad = require('../models/entidad');



 router.get('/test-soyyo/:startId/:endId',(req,res) =>{
 
     let startId = req.params.startId;
     let endId = req.params.endId;
     let rango = (endId - startId) + 1;
     console.log("Rango"+rango);
     if(startId > endId){
        respuesta.status = res.statusCode;
        respuesta.mensaje = errorList[0];
        respuesta.object = null; 
        res.json(respuesta);
     }else if(startId < 1 || endId < 1){
        respuesta.status = res.statusCode;
        respuesta.mensaje = errorList[1];
        respuesta.object = null; 
        res.json(respuesta);
     }else if(rango < 1 || rango > 20){
        respuesta.status = res.statusCode;
        respuesta.mensaje = errorList[2];
        respuesta.object = null; 
        res.json(respuesta);
     }else{
     entidad.getRango(startId,endId).then( (respons) => {
        respuesta.status = res.statusCode;
        respuesta.mensaje = "OK";
        respuesta.object = respons.sort((a,b)=> (a.contactName > b.contactName)?1:-1);
        console.log("Total: "+respuesta.object.length);
        res.status(200).json(respuesta);
     });
    }
 });
 
 module.exports = router;