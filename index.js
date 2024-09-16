import express from 'express';
import router  from './routes/index.js';
import db from './config/db.js';

const app = express();


//* Conectar la DB
db.authenticate()
    .then( () => console.log('DB conectada papi ;)!') )
    .catch( error => console.log(error));

//* Definir puerto
const port = process.env.PORT || 4000;

//* Habilitar PUG
app.set('view engine', 'pug');


//* Obtener el año actual (Middleware) el next es para que continue con la pila y siga el sig middleware
//! si no funciona el next se fuerza con el return next();
app.use( (req, res, next) => {
    const year = new Date();
    res.locals.actualYear = year.getFullYear();
    res.locals.nombresitio = "Agencia de Viajes";
    next();
});


//* AGREGAR BODY PARSER para leer los datos del formulario
app.use(express.urlencoded({extended: true}));


//? Definir la carpeta publica
app.use(express.static('public'));

//* Agregar Router
app.use('/', router);


app.listen(port, () => {
    console.log(`El Servidor esta funcionando en el puerto ${port}`)
})