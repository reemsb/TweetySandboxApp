const express = require('express');
const bodyParser = require('body-parser');
const routesHandler = require('./routes/handler.js');


const PORT = process.env.PORT || 3001;

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/api', routesHandler);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});