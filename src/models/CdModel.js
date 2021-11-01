const { v4: uuidv4 } = require('uuid');
const connection = require("../database/connection");

module.exports = {
    async create(cd) {
        const cd_id = uuidv4();
        cd.cd_id = cd_id;
        await connection("cd").insert(cd);
        return cd_id; 
    },

    async getById({cd_id}){
        const result = await connection("cd").where({cd_id}).select("*");
        return result;
    },

    async getByIdWithFilters(artista_id,{cdName}){
        const result = await connection("cd")
        .innerJoin("artista", "artista_id", "artista.artista_id")
        .where({artista_id})
        .select("*");

        return result;
    },

    async updateById(cd_id, cd){
        const result = await connection("cd").where({cd_id}).update(cd);
        return result;
    },

    async deleteById(cd_id){
        const result = await connection("cd").where({cd_id}).delete();
        return result;
    }
}
