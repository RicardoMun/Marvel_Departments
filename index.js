const express = require('express');
const { default: mongoose } = require('mongoose');
const app = express();
const port = 3000;
const routerApi = require('./src/routes')

routerApi(app);

app.listen(port, () => console.log('Active port ', port));
app.use(express.json());
require('dotenv').config();

mongoose
    .connect(process.env.MONGODB_CONNECTION)
    .then(() => console.log("Succes connection with mongo"))
    .catch(() => console.error("Connection could not be established"));

app.get('/', (req, res) => {
  res.send('API V1');
});