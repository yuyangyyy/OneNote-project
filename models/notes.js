const mysql = require('../db');

function findAllNotes() {
  return new Promise((resolve, reject) => {
    mysql.query(`SELECT * FROM notes`, (err, results) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(results);
    });
  });
}

function findOneNote(noteId) {
  return new Promise((resolve, reject) => {
    mysql.query(`SELECT * FROM notes WHERE id=?`, [noteId], (err, results) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(results);
    });
  });
}

function createOneNote(payload) {
  return new Promise((resolve, reject) => {
    mysql.query(`INSERT INTO notes SET ?`, [payload], (err) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(payload);
    });
  });
}

module.exports = {
  findAllNotes,
  findOneNote,
  createOneNote,
};
