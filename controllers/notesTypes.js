const { findAllNotesTypes } = require('../models/notesTypes');

const getAllNotesTypes = async () => {
  const data = await findAllNotesTypes();
  return data;
};

module.exports = {
  getAllNotesTypes,
};
