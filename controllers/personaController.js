const Persona = require('../models/persona');

exports.create = (req, res) => {
  const { nombre, apellido, rut, nombreMascota, familiaMascota, razaMascota } = req.body;

  Persona.create(nombre, apellido, rut, nombreMascota, familiaMascota, razaMascota, () => {
    res.redirect('/personas');
  });
};

exports.getAll = (req, res) => {
  Persona.getAll((personas) => {
    res.render('personas', { personas });
  });
};

exports.getOne = (req, res) => {
  const id = req.params.id;
  Persona.getOne(id, (result) => {
    res.render('persona', { personas: result.personas });
  });
};

exports.update = (req, res) => {
  const id = req.params.id;
  const { nombre, apellido, rut } = req.body;

  Persona.update(id, nombre, apellido, rut, () => {
    res.redirect('/personas/' + id);
  });
};

exports.delete = (req, res) => {
  const id = req.params.id;
  Persona.delete(id, () => {
    res.redirect('/personas');
  });
};
