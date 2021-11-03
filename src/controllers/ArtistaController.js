const ArtistaModel = require("../models/ArtistaModel");

module.exports = {
    async create (request, response){
        try{
            const newArtista = request.body;
            const result = await ArtistaModel.create(newArtista);
 
            return response.status(200).json(result);

        }catch(error){
            console.warn("Erro no cadastro de artista:", error);

            return response
            .status(500)
            .json({
                notification: "Erro ao tentar cadastrar artista"
            });
        }
    },

    async getById(request, response){
        const result = await connection("Artista").where({artista_id}).select("*").first();
        return result;
    },

    async update(request, response){
        try{
            const {artista_id} = request.params;
            const newArtista = request.body;
            await ArtistaModel.updateById(artista_id, newArtista);
 
            return response.status(200).json({notification: "Artista atualizado!"});

        }catch(error){
            console.warn("Erro ao editar artista:", error);

            return response
            .status(500)
            .json({
                notification: "Erro ao editar artista"
            });          
        }
    },

    async delete (request, response){
        try{
            const {artista_id} = request.params;
            const result = await ArtistaModel.deleteById(artista_id);
            if (result === 0) return response.satus(400).json({notification: "Id não encontrado"});
            return response.status(200).json({notification: "Artista Excluído!"});

        }catch(error){
            console.warn("Erro ao tentar deletar artista:", error);

            return response
            .status(500)
            .json({
                notification: "Erro ao tentar deletar artista"
            });
        }
    },
};