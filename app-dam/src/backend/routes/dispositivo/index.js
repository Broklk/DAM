const express = require('express')

const routerDispositivo = express.Router()

var pool = require('../../mysql-connector');

routerDispositivo.get('/', function(req, res) {
    pool.query('Select * from Dispositivos', function(err, result, fields) {
        if (err) {
            res.send(err).status(400);
            return;
        }
        res.send(result);
    });
})

routerDispositivo.get('/:id', function(req, res) {
    pool.query('Select * from Dispositivos where dispositivoId = ?', [req.params.id], function(err, result, fields) {
        if (err) {
            res.send(err).status(400);
            return;
        }
        res.send(result);
    });
})

routerDispositivo.post('/:id/registrar-riego', function(req, res) {
    const { apertura, humedad } = req.body;
    const dispositivoId = req.params.id;

    pool.query(`
        INSERT INTO Log_Riegos (electrovalvulaId, fecha, apertura)
        VALUES ((SELECT electrovalvulaId FROM Dispositivos WHERE dispositivoId = ?), NOW(), ?)
    `, [dispositivoId, apertura], function(err) {
        if (err) return res.status(400).send(err);

        pool.query(`
            INSERT INTO Mediciones (fecha, valor, dispositivoId)
            VALUES (NOW(), ?, ?)
        `, [humedad, dispositivoId], function(err2) {
            if (err2) return res.status(400).send(err2);
            res.send({ message: 'Registro exitoso' });
        });
    });
});

routerDispositivo.get('/mediciones/:id', function (req, res) {
    const dispositivoId = req.params.id;
    pool.query(
        'SELECT * FROM Mediciones WHERE dispositivoId = ? ORDER BY fecha DESC',
        [dispositivoId],
        function (err, result) {
            if (err) {
                return res.status(400).send({ error: 'Error al obtener mediciones' });
            }
            res.send(result);
        }
    );
});

routerDispositivo.post('/:id/registrar-medicion', function(req, res) {
    const dispositivoId = req.params.id;
    const humedad = req.body.humedad;

    pool.query(
        `INSERT INTO Mediciones (fecha, valor, dispositivoId) VALUES (NOW(), ?, ?)`,
        [humedad, dispositivoId],
        function(err, result) {
            if (err) return res.status(400).send({ error: 'Error al registrar la medición' });
            res.send({ message: 'Medición registrada correctamente' });
        }
    );
});

module.exports = routerDispositivo