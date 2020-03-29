const connection = require('../database/connection');


module.exports = { 

    async index(request, response) {
        const { page = 1 } = request.query;

        const [count] = await connection('incidents')
            .count();

        console.log(count);

        const incidents = await connection('incidents')
        .join('users', 'users.id', '=', "incidents.user_id")
        .limit(5)
        .offset((page - 1 ) * 5)
        .select([
            'incidents.*', 
        'users.name', 
        'users.email', 
        'users.whatsapp', 
        'users.city', 
        'users.uf'
        ]);         

        response.header('X-Total-Count', count['count(*)']);
        return response.json(incidents);
    },

    async create(request, response) {
        const { title, description, value } = request.body;
        const user_id = request.headers.authorization;

        const [id] = await connection('incidents').insert({
            title,
            description,
            value,
            user_id
        })

    return response.json({ id });
    },

    async delete(request,response){
        const { id } = request.params;
        const user_id = request.headers.authorization;

        const incidents = await connection('incidents')
            .where('id', id)
            .select('user_id')
            .first();

        if (incidents.user_id !== user_id) {
            return response.status(401).json({ error: 'Operation not permitted.'})
        }

        await connection('incidents').where('id', id).delete();
        return response.status(204).send();
    }
};