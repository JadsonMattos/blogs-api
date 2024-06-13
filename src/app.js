const express = require('express');
const routes = require('./routes');
const validateUser = require('./middleware/validateUser');
const validatePost = require('./middleware/validatePost');
const authenticate = require('./auth/validateJWT');

// ....

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

// ...

const apiRoutes = express.Router();

apiRoutes.post('/login', routes.login);
apiRoutes.post('/user', validateUser, routes.createUser);
apiRoutes.get('/user', authenticate, routes.getUsers);
apiRoutes.get('/user/:id', authenticate, routes.getByUserId);
apiRoutes.post('/categories', authenticate, routes.createCategory);
apiRoutes.get('/categories', authenticate, routes.getCategories);
apiRoutes.post('/post', validatePost, authenticate, routes.createBlogPost);

app.use(apiRoutes);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
