const { getAllNotesTypes } = require('../controllers/notesTypes');

const Hapi = require('@hapi/hapi');

const routeNotesTypes = [
  {
    method: 'GET',
    path: '/notesTypes',
    handler: async (request, h) => {
      try {
        const noteType = await getAllNotesTypes();
        return noteType;
      } catch (err) {
        console.log('Error' + err.message);
      }
    },
  },
];

module.exports = {
  routeNotesTypes,
};
