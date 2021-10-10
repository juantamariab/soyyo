const { Router} = require('express');
const router = Router();

router.get('/',(req,res) =>{
    res.json(
         {
             "title":"Test SOYYO",
             "version":"1.0",
             "descripcion":"Test Ingreso soyyo",
             "Autor":"Ing Juan Santamaría Borja"
         }
     );
 });

 module.exports = router;