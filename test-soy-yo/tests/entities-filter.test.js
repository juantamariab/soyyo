const request = require('supertest');
const app = require('../src/app');


it('Debe responder con el  mensaje de datos basicos', done => {
    request(app)
        .get('/')
        .set('Accept','application/json')
        .expect('Content-Type', /json/)
        .expect(200,done);
});

it('Debe responder con la lista segun los parametros de entrada', done => {
    let startId = 1;
    let endId = 6;
    let totalResgistros = (endId - startId) + 1;
    request(app)
        .get('/entities/filter/test-soyyo/'+startId+'/'+endId)
        .set('Accept','application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .expect( (res) =>{
            res.body.object.length == totalResgistros;
        })
        .end((err,res) =>{
            if(err){
                console.log(err);
                done(err);
            }else{
                done();
            }
        });
});


it('Debe responder con error 101', done => {
    let startId = 6;
    let endId = 1;
    let totalResgistros = (endId - startId) + 1;
    request(app)
        .get('/entities/filter/test-soyyo/'+startId+'/'+endId)
        .set('Accept','application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .expect( (res) =>{
            res.body.mensaje == 'Parametro inicial no puede ser mayor que el inicial';
        })
        .end((err) =>{
            if(err){
                console.log(err);
                done(err);
            }else{
                done();
            }
        });
});

it('Debe responder con error 102', done => {
    let startId = 0;
    let endId = 8;
    let totalResgistros = (endId - startId) + 1;
    request(app)
        .get('/entities/filter/test-soyyo/'+startId+'/'+endId)
        .set('Accept','application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .expect( (res) =>{
            res.body.mensaje == 'Los parametros no pueden ser menores a 1';
        })
        .end((err) =>{
            if(err){
                console.log(err);
                done(err);
            }else{
                done();
            }
        });
});


it('Debe responder con error 103', done => {
    let startId = 0;
    let endId = 8;
    let totalResgistros = (endId - startId) + 1;
    request(app)
        .get('/entities/filter/test-soyyo/'+startId+'/'+endId)
        .set('Accept','application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .expect( (res) =>{
            res.body.mensaje == 'Error en el rango de busqueda';
        })
        .end((err) =>{
            if(err){
                console.log(err);
                done(err);
            }else{
                done();
            }
        });
});