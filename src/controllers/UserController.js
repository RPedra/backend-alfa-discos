const UserModel = require("../models/UserModel");
const CarrinhoModel = require("../models/CarrinhoModel");

module.exports = {
    async create (request, response){
        try{
            const newUser = request.body;
            const result = await UserModel.create(newUser);
 
            return response.status(200).json({user_id: result});

        }catch(error){
            console.warn("Erro no cadastro de usuário:", error);

            return response
            .status(500)
            .json({ 
                notification: "Erro ao tentar cadastrar usuário"
            });
            
        }
    },

    async getById(user_id){
            const result = await connection("User").where({user_id}).select("*").first();
        return result;
    },

    async update(request, response){
        try{
            const {user_id} = request.params;
            const newUser = request.body;
            const result = await UserModel.updateById(user_id, newUser);
            if (result === 0) return response.satus(400).json({notification: "Id de usuário não encontrado"});
            return response.status(200).json({notification: "Usuário atualizado!"});

        }catch(error){
            console.warn("Erro ao editar informações de usuário:", error);

            return response
            .status(500)
            .json({
                notification: "Erro ao editar informações de usuário"
            });          
        }
    },

    async delete (request, response){
        try{
            const {user_id} = request.params;
            const result = await UserModel.deleteById(user_id);
            if (result === 0) return response.satus(400).json({notification: "Id de usuário não encontrado"});
            return response.status(200).json({notification: "Usuário Excluído!"});

        }catch(error){
            console.warn("Erro ao tentar deletar usuário:", error);

            return response
            .status(500)
            .json({
                notification: "Erro ao tentar deletar usuário"
            });
        }
    },
};