const { celebrate, Segments, Joi } = require("celebrate");

module.exports = {
    create: celebrate({
        [Segments.BODY]: Joi.object().keys({
            nome: Joi.string().required(),
            cd_id: Joi.string().optional(),
        })
    }),
    getById: celebrate({
        [Segments.BODY]: Joi.object().keys({
                     
        })
    }),
    update: celebrate({
        [Segments.PARAMS]: Joi.object().keys({
            artista_id: Joi.string().required(),
        }),
        [Segments.BODY]: Joi.object().keys({
            nome: Joi.string().optional(),
            cd_id: Joi.string().optional(),
        }).min(1),
    }),
    delete: celebrate({
        [Segments.PARAMS]: Joi.object().keys({
            artista_id: Joi.string().required(),
        }),
    }),
}