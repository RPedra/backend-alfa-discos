const { v4: uuidv4 } = require('uuid');
const connection = require("../database/connection");

module.exports = {
    async create(artista) {
        const artista_id = uuidv4();
        artista.artista_id = artista_id;
        const result = await connection("artista").insert(artista);
        return result;
    },

    async getById({artista_id, nome}){
        const result = await connection("artista").where({artista_id, nome}).select("*");
        return result;
    },

    async updateById(artista_id, artista){
        const result = await connection("artista").where(artista_id).update(artista);
        return result;
    },

    async deleteById(artista_id){
        const result = await connection("artista").where({artista_id}).delete();
        return result;
    }
}
