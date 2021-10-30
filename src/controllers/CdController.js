const CdModel = require("../models/CdModel");

module.exports = {
    async create (request, response){
        try{
            const newCd = request.body;
            const result = await CdModel.create(newCd);
 
            return response.status(200).json({cd_id: result});

        }catch(error){
            console.warn("Erro no cadastro de cd:", error);

            return response
            .status(500)
            .json({
                notification: "Erro ao tentar cadastrar CD"
            });
        }
    },

    async getById(request, response){
        try{

        } catch(error){
            
        }
    },

    async update(request, response){
        try{
            const {cd_id} = request.params;
            const newCd = request.body;
            const result = await CdModel.updateById(cd_id, newCd);
            if (result === 0) return response.satus(400).json({notification: "Id não encontrado"});
            return response.status(200).json({notification: "Cd atualizado!"});

        }catch(error){
            console.warn("Erro ao editar cd:", error);

            return response
            .status(500)
            .json({
                notification: "Erro ao editar CD"
            });          
        }
    },

    async delete (request, response){
        try{
            const {cd_id} = request.params;
            const result = await CdModel.deleteById(cd_id);
            if (result === 0) return response.satus(400).json({notification: "Id não encontrado"});
            return response.status(200).json({notification: "Cd Excluído!"});

        }catch(error){
            console.warn("Erro ao tentar deletar cd:", error);

            return response
            .status(500)
            .json({
                notification: "Erro ao tentar deletar CD"
            });
        }
    },
};