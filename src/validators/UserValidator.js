const { celebrate, Segments, Joi } = require("celebrate");

module.exports = {
    create: celebrate({
        [Segments.BODY]: Joi.object().keys({
            nome: Joi.string().required(),
            email: Joi.string().email().required(),
            senha: Joi.string().min(6).required(),
            nascimento: Joi.date().required(), 
            endereco: Joi.string().required(),
        })
    }),
    getById: celebrate({
        [Segments.BODY]: Joi.object().keys({
                     
        })
    }),
    update: celebrate({
        [Segments.PARAMS]: Joi.object().keys({
            user_id: Joi.string().required(),
        }),
        [Segments.BODY]: Joi.object().keys({
            nome: Joi.string().optional(),
            email: Joi.string().email().optional(),
            senha: Joi.string().min(6).optional(),
            nascimento: Joi.date().optional(),
            endereco: Joi.string().optional(),
        }).min(1),
    }),
    delete: celebrate({
        [Segments.PARAMS]: Joi.object().keys({
            user_id: Joi.string().required(),
        }),
    }),
}