
const db = require('../config/database');

const Mascota = {};

Mascota.create = (nombre, familia, raza, dueñoId, callback) => {
  db.query(
    'INSERT INTO mascotas (nombre, familia, raza, dueño_id) VALUES (?, ?, ?, ?)',
    [nombre, familia, raza, dueñoId],
    (error, results) => {
      if (error) throw error;
      callback(results.insertId);
    }
  );
};

Mascota.getAllByDueño = (dueñoId, callback) => {
  db.query(
    'SELECT * FROM mascotas WHERE dueño_id = ?',
    [dueñoId],
    (error, results) => {
      if (error) throw error;
      callback(results);
    }
  );
};

module.exports = Mascota;
