import * as express from 'express';
import axios from 'axios';

const app = express();
const port = 3000;

axios.defaults.baseURL = 'http://177.44.248.30/v1/'

app.get('/users', async (req, res) => {
  const { data } = await axios.get(
    '/users',
  );
  res.send(JSON.stringify(data, null, 4));
});
app.get('/pix', async (req, res) => {
  const { data } = await axios.get(
    '/pix',
  );
  res.send(JSON.stringify(data, null, 4));
});

app.listen(port, () => {
  console.log(`[server]: Server is running at https://localhost:${port}`);
});