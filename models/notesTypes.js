const mysql = require('../db');

function findAllNotesTypes() {
  return new Promise((resolve, reject) => {
    mysql.query(`SELECT * FROM notes_types`, (err, results) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(results);
    });
  });
}

module.exports = {
  findAllNotesTypes,
};
