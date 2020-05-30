const express = require('express');

const OngControllers = require('./controllers/OngControllers');
const IncidentControllers = require('./controllers/IncidentControllers');
const ProfileControllers = require('./controllers/ProfileControllers');
const SessionControllers = require('./controllers/SessionControllers');

const routes = express.Router();
/*
    Métodos HTTP:
    GET: Buscar/Listar uma informação do back-end
    POST: Criar uma informação no back-end
    PUT: Alterar uma informação no back-end
    DELETE: Deletar uma informação no back-end
*/

/**
 * Tipos de parâmetros:
 * 
 * Query Params: ParÂmetros nomeados enviados na rota após "?" (Filtros, paginação) -> request.query
 * Route Params: Parâmetros utilizados para identificar recursos -> request.params
 * Request Body: Corpo da requisição, utilizado para criar ou alterar o usuario -> request.body
 * 
 */

 /**
  * BANCO DE DADOS
  * SQL: MySQL, SQLite (o que a gente vai usar), PostgreSQL
  * NoSQL: MongoDB, CouuchDB
  */

  routes.post('/sessions', SessionControllers.create);

 routes.get('/ongs', OngControllers.index);
 routes.post('/ongs', OngControllers.create); //pq create n fica create()??

 routes.get('/profile', ProfileControllers.index);

 routes.get('/incidents', IncidentControllers.index);
 routes.post('/incidents', IncidentControllers.create);
 routes.delete('/incidents/:id', IncidentControllers.delete);


module.exports = routes;