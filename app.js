'use strict';

const Hapi = require('@hapi/hapi');
const { routesAuthors } = require('./routes/authors');
const { routeNotes } = require('./routes/notes');
const { routeNotesTypes } = require('./routes/notesTypes');

const server = Hapi.server({
  port: 5000,
  host: 'localhost',
});

const init = async () => {
  try {
    server.route([...routesAuthors]);
    server.route([...routeNotes]);
    server.route([...routeNotesTypes]);

    server.route({
      method: 'GET',
      path: '/{any*}',
      handler: function (request, h) {
        return h.redirect('/authors');
      },
    });

    await server.start();
    console.log(`Server starded at : ${server.info.uri}`);
  } catch (err) {
    console.log(err.message);

    process.exit(1);
  }
};
init();
