const express = require('express');
const morgan = require('morgan');
const app = express();

//configuraciones
app.set('port', process.env.PORT || 3000);
app.set('json',2);

//middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//Rutas
app.use(require('./routes/index'));
app.use('/entities/filter',require('./routes/test-soyyo'));

// inicializando el servidor
app.listen(app.get('port'), () =>{
    console.log(`Server iniciando en el puero: ${app.get('port')}`);
});

module.exports = app;