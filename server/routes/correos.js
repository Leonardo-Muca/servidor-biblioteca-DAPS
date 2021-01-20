const express = require('express');
const bcrypt = require('bcrypt');
const _ = require('underscore');
const Correo = require('../models/correos');
const app = express();

app.get('/correo', function (req, res) {
  let desde = req.query.desde || 0;
  let hasta = req.query.hasta || 5;

  Correo.find({ estado: true })
    .skip(Number(desde))
    .limit(Number(hasta))
    .exec((err, correos) => {
      if (err) {
        return res.status(400).json({
          ok: false,
          msg: 'Ocurrio un error al moento de consultar',
          err
        });
      }

      res.json({
        ok: true,
        msg: 'Lista de correos obtenida con exito',
        conteo: correos.length,
        correos
      });
    });
});

module.exports = app;