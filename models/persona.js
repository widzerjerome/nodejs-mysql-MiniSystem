const db = require('../config/database');

const Persona = {};

Persona.create = (nombre, apellido, rut, nombreMascota, familiaMascota, razaMascota, callback) => {
  db.beginTransaction((err) => {
    if (err) throw err;

    db.query(
      'INSERT INTO personas (Nombre_persona, Apellido, rut) VALUES (?, ?, ?)',
      [nombre, apellido, rut],
      (err, personaResult) => {
        if (err) {
          db.rollback(() => {
            throw err;
          });
        }

        db.query(
          'INSERT INTO mascotas (Nombre, Familia, Raza, id_persona) VALUES (?, ?, ?, ?)',
          [nombreMascota, familiaMascota, razaMascota, personaResult.insertId],
          (err, mascotaResult) => {
            if (err) {
              db.rollback(() => {
                throw err;
              });
            }

            db.commit((err) => {
              if (err) {
                db.rollback(() => {
                  throw err;
                });
              }

              callback(personaResult.insertId);
            });
          }
        );
      }
    );
  });
};

Persona.getAll = (callback) => {
  db.query('SELECT * FROM mascotas JOIN personas ON mascotas.id_persona = personas.id', (error, personasResults) => {
    if (error) throw error;

    callback(personasResults);
  });
};

Persona.getOne = (rut, callback) => {
  db.query('SELECT * FROM mascotas JOIN personas ON mascotas.id_persona = personas.id WHERE personas.rut = ?', [rut], (error, personaResult) => {
    if (error) throw error;

    const result = {
      personas: personaResult,
    };

    callback(result);
  });
};

Persona.update = (id, nombre, apellido, rut, callback) => {
  db.query('UPDATE personas SET Nombre_persona = ?, Apellido = ?, rut = ? WHERE id = ?', [nombre, apellido, rut, id], (error) => {
    if (error) throw error;

    callback();
  });
};

Persona.delete = (id, callback) => {
  db.query('DELETE FROM personas WHERE id = ?', [id], (error) => {
    if (error) throw error;

    callback();
  });
};

module.exports = Persona;
