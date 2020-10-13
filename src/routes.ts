import express from 'express';

const routes = express.Router();

routes.get('/', (_req, res) => {
  res.send('<h1>The server is up and running!</h1><h3>Running server on port 4000</h3>');
});

export default routes;
