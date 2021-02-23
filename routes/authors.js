const {
  getAllAuthors,
  getOneAuthor,
  createNewAuthor,
  updateNewAuthor,
  deleteNewAuthor,
} = require('../controllers/authors');

const routesAuthors = [
  {
    method: 'GET',
    path: '/authors',
    handler: async (request, h) => {
      try {
        const authors = await getAllAuthors();
        return authors;
      } catch (err) {
        console.log('Error' + err.message);
      }
    },
  },
  {
    method: 'GET',
    path: '/authors/{id}',
    handler: async (request, h) => {
      const authorId = request.params.id;

      try {
        const oneAuthor = await getOneAuthor(authorId);
        return oneAuthor;
      } catch (err) {
        console.log('Error' + err.message);
      }
    },
  },
  {
    method: 'POST',
    path: '/authors',
    handler: async (request, h) => {
      const payload = request.payload;

      try {
        const newAuthor = await createNewAuthor(payload);
        return newAuthor;
      } catch (err) {
        console.log('Error' + err.message);
      }
    },
  },
  {
    method: 'PUT',
    path: '/authors/{id}',
    handler: async (request, h) => {
      const payload = request.payload;
      const authorId = request.params.id;

      try {
        const modifyOne = await updateNewAuthor(payload, authorId);
        return modifyOne;
      } catch (err) {
        console.log('Error' + err.message);
      }
    },
  },
  {
    method: 'DELETE',
    path: '/authors/{id}',
    handler: async (request, h) => {
      const authorId = request.params.id;

      try {
        const deleteOne = await deleteNewAuthor(authorId);
        return deleteOne;
      } catch (err) {
        console.log('Error: ' + err.message);
      }
    },
  },
];
module.exports = {
  routesAuthors,
};
