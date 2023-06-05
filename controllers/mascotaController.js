
const Persona = require('../models/persona');
const Mascota = require('../models/mascota');

exports.create = (req, res) => {
  const { nombre, familia, raza, dueñoId } = req.body;

  Mascota.create(nombre, familia, raza, dueñoId, (id) => {
    res.redirect('/personas/' + dueñoId);
  });
};

exports.getAllByDueño = (req, res) => {
  const dueñoId = req.params.dueñoId;

  Persona.getOne(dueñoId, (persona) => {
    Mascota.getAllByDueño(dueñoId, (mascotas) => {
      res.render('mascotas', { persona, mascotas });
    });
  });
};
