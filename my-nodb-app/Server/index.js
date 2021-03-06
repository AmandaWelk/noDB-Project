const express = require('express');
const app = express();
const SERVER_PORT = 5030;
const ctrl = require('./Controllers/plantCntrl');

app.use(express.json());

app.get('/plant/herb', ctrl.getHerbs)
app.get('/plant/veggies', ctrl.getVeggies)
app.delete('/myGarden/planted/:id', ctrl.removeHerbs, ctrl.removeVeggies)
app.post('/myGarden/planted', ctrl.addToGarden)

app.listen(SERVER_PORT, () => console.log(`Server is running on ${SERVER_PORT}`));