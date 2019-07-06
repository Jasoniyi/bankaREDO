import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import Users from './usingJsObject/controllers/Users';

dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  return res.status(200).send({ message: 'Welcome to Banka Api' });
});

app.post('/api/v1/signup', Users.signup);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Banka API running on port ${port}`);
});
