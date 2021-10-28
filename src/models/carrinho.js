const { v4: uuidv4 } = require('uuid');
const connection = require("../database/connection");

module.exports = {
    async create(carrinho) {
        const carrinho_id = uuidv4();
        carrinho.carrinho_id = carrinho_id;
        const result = await connection("carrinho").insert(carrinho);
        return result;
    },

    async getById({carrinho_id, user_id}){
        const result = await connection("carrinho").where({carrinho_id, user_id}).select("*");
        return result;
    },

    async updateById(carrinho_id, carrinho){
        const result = await connection("carrinho").where(carrinho_id).update(carrinho);
        return result;
    },

    async deleteById(carrinho_id){
        const result = await connection("carrinho").where({carrinho_id}).delete();
        return result;
    }
}