import joi from "joi";

export const postSchema = joi.object({
    userId: joi.number().required(),
    link: joi.string().uri().required(),
    description: joi.string().min(3).allow(null).allow('')
})