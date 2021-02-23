const {
  getAllNotes,
  getOneNote,
  createOneNote,
} = require('../controllers/notes');

const Hapi = require('@hapi/hapi');

const routeNotes = [
  {
    method: 'GET',
    path: '/notes',
    handler: async (request, h) => {
      try {
        const note = await getAllNotes();
        return note;
      } catch (err) {
        console.log('Error' + err.message);
      }
    },
  },

  {
    method: 'GET',
    path: '/notes/{id}',
    handler: async (request, h) => {
      const noteId = request.params.id;

      try {
        const Onenote = await getOneNote(noteId);
        return Onenote;
      } catch (err) {
        console.log('Error' + err.message);
      }
    },
  },

  {
    method: 'POST',
    path: '/notes',
    handler: async (request, h) => {
      const payload = request.payload;

      try {
        const newNote = await createOneNote(payload);
        return newNote;
      } catch (err) {
        console.log('Error' + err.message);
      }
    },
  },
];

module.exports = {
  routeNotes,
};
