const { findAllNotes, findOneNote, createOneNote } = require('../models/notes');

const getAllNotes = async () => {
  const data = await findAllNotes();
  return data;
};

const getOneNote = async (noteId) => {
  const data = await findOneNote(noteId);
  return data;
};

const createOne = async (payload) => {
  const data = await createOneNote(payload);
  return data;
};

module.exports = {
  getAllNotes,
  getOneNote,
  createOneNote,
};
