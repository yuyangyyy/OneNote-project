const {
  findAllAuthors,
  findOneAuthor,
  createOneAuthor,
  updateOneAuthor,
  deleteOneAuthor,
} = require('../models/authors');

const getAllAuthors = async () => {
  const data = await findAllAuthors();
  return data;
};

const getOneAuthor = async (authorId) => {
  const data = await findOneAuthor(authorId);
  return data;
};

const createNewAuthor = async (payload) => {
  const data = await createOneAuthor(payload);
  return data;
};

const updateNewAuthor = async (payload, authorId) => {
  const data = await updateOneAuthor(payload, authorId);
  return data;
};

const deleteNewAuthor = async (authorId) => {
  const data = await deleteOneAuthor(authorId);
  return data;
};

module.exports = {
  getAllAuthors,
  getOneAuthor,
  createNewAuthor,
  updateNewAuthor,
  deleteNewAuthor,
};
