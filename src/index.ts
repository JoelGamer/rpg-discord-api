import express from 'express';

const app = express();
const port = 4000;

app.get('/', (_req, res) => {
  res.send('The app is up and running!');
});

app.get('/users', (_req, res) => {
  res.send({
    name: 'Hello!!!!!!!'
  });
});

app.listen(port, () => {
  return console.log(`Server is listening on ${port}`);
});
