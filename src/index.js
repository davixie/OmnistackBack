const express = require('express'); /*variavel express pega as informações de express*/
const routes = require('./routes');
const cors = require('cors')

const app = express();

app.use(cors()) ///cors({ origin: 'http://meuapp.com' })
app.use(express.json());
app.use(routes);

app.listen(3333);