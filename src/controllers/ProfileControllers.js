const connections = require('../database/connections')

module.exports = {
    async index(request, response){
        const ong_id = request.headers.authorization; //não entendi esse passo

        const instances = await connections('incidents')
            .where('ong_id', ong_id)
            .select('*');
        return response.json(instances);
    }
}