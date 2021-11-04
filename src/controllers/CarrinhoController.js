const CarrinhoModel = require("../models/CarrinhoModel");

module.exports = {
    async create (request, response){
        try{
            const newCarrinho = request.body;
            const result = await CarrinhoModel.create(newCarrinho); 
 
            return response.status(200).json({carrinho_id: result});

        }catch(error){
            console.warn("Erro no cadastro de carrinho:", error);

            return response
            .status(500)
            .json({
                notification: "Erro ao tentar cadastrar carrinho"
            });
        }
    },

    async getById(request, response){
        const result = await connection("Carrinho").where({carrinho_id}).select("*").first();
        return result;
    },

    async update(request, response){
        try{
            const {carrinho_id} = request.params;
            const newCarrinho = request.body;
            const result = await CarrinhoModel.updateById(carrinho_id, newCarrinho);
            if (result === 0) return response.satus(400).json({notification: "Id não encontrado"});
            return response.status(200).json({notification: "Carrinho atualizado!"});

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
            const {carrinho_id} = request.params;
            const result = await CarrinhoModel.deleteById(carrinho_id);
            if (result === 0) return response.satus(400).json({notification: "Id não encontrado"});
            return response.status(200).json({notification: "Carrinho Excluído!"});

        }catch(error){
            console.warn("Erro ao tentar deletar carrinho:", error);

            return response
            .status(500)
            .json({
                notification: "Erro ao tentar deletar Carrinho"
            });
        }
    },
};