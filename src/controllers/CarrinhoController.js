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
        try{

        }catch(error){
            
        }
    },

    async update(request, response){
        try{

        }catch(error){
            
        }
    },

    async delete (request, response){
        try{

        }catch(error){
            
        }
    },
};