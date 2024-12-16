//=======[ Settings, Imports & Data ]==========================================

var PORT    = 3000;

const cors = require('cors');

var express = require('express');
var app = express();
var pool = require('./mysql-connector');
const routerDispositivo = require('./routes/dispositivo')

var corsOptions = {
    origin: '*',
    methods: ['GET','PUT','POST','DELETE','OPTIONS'],
    allowedHeaders: ['Content-Type'],
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}


// to parse application/json
app.use(express.json());
// to serve static files
app.use(express.static('/home/node/app/static/'));
// to enable cors
app.use(cors(corsOptions));

app.use('/dispositivo', routerDispositivo)

app.get('/', function(req, res, next) {
    res.send({'mensaje': 'Hola DAM'}).status(200);
});

// Manejo de errores global
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send({ message: 'Algo salió mal en el servidor' });
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`NodeJS API running correctly on port ${PORT}`);
});