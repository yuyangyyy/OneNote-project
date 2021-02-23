const mysql2 = require('../db');

function findAllAuthors() {
  return new Promise((resolve, reject) => {
    mysql2.query(`SELECT * FROM authors`, (err, results) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(results);
    });
  });
}

function findOneAuthor(authorId) {
  return new Promise((resolve, reject) => {
    mysql2.query(
      `SELECT * FROM authors WHERE id = ?`,
      [authorId],
      (err, results) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(results);
      }
    );
  });
}

function createOneAuthor(payload) {
  return new Promise((resolve, reject) => {
    mysql2.query(`INSERT INTO authors SET ?`, [payload], (err) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(payload);
    });
  });
}

function updateOneAuthor(payload, authorId) {
  return new Promise((resolve, reject) => {
    mysql2.query(
      `UPDATE authors SET ? WHERE id = ?`,
      [payload, authorId],
      (err, results) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(results);
      }
    );
  });
}

function deleteOneAuthor(authorId) {
  return new Promise((resolve, reject) => {
    mysql2.query(
      'DELETE from authors WHERE id = ?',
      [authorId],
      (err, results) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(results);
      }
    );
  });
}

module.exports = {
  findAllAuthors,
  findOneAuthor,
  createOneAuthor,
  updateOneAuthor,
  deleteOneAuthor,
};
