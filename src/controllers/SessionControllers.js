const connections = require('../database/connections')

module.exports = {
    async create(request, response){
        const { id } = request.body;
        const ong = await connections('ongs')
            .where('id', id)
            .select('nome')
            .first();
        if(!ong){
            return response.status(400).json({ error: 'ONG not found with this ID' });
        }
        return response.json(ong);
    }
}