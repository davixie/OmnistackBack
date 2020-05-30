const knex = require('knex');
const configuration = require('../../knexfile');

const connection = knex(configuration.development)

module.exports = connection;

/**
 * Connection serve para pegar os dados do insomnia (do cliente)
 * e jogar na tabela
 */