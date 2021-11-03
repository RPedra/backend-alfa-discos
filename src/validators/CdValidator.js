const { celebrate, Segments, Joi } = require("celebrate");

module.exports = {
    create: celebrate({
        [Segments.BODY]: Joi.object().keys({
            nome: Joi.string().required(),
            artista_id: Joi.string().required(),
            categoria: Joi.string().required(),
            valor: Joi.number().required(), 
            data: Joi.date().required(),
            popularidade: Joi.number().required(),
            imagem: Joi.string().required(),
        })
    }),
    getById: celebrate({
        [Segments.BODY]: Joi.object().keys({
                     
        })
    }),
    update: celebrate({
        [Segments.PARAMS]: Joi.object().keys({
            cd_id: Joi.string().required(),
        }),
        [Segments.BODY]: Joi.object().keys({
            nome: Joi.string().optional(),
            artista_id: Joi.string().optional(),
            categoria: Joi.string().optional(),
            valor: Joi.number().optional(), 
            data: Joi.date().optional(),
            popularidade: Joi.number().optional(),
            imagem: Joi.string().optional(),
        }).min(1),
    }),
    delete: celebrate({
        [Segments.PARAMS]: Joi.object().keys({
            cd_id: Joi.string().required(),
        }),
    }),
}