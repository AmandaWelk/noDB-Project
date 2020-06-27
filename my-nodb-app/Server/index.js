const express = require('express');
const app = express();
const SERVER_PORT = 5030;
const ctrl = require('./Controllers/plantCntrl');

app.use(express.json());

app.get('/plant/herb', ctrl.getHerbs)
app.get('/plant/veggies', ctrl.getVeggies)

app.listen(SERVER_PORT, () => console.log(`Server is running on ${SERVER_PORT}`));