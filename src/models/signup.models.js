import joi from "joi";

export const newUserSchema = joi.object({
  name: joi.string().min(3).required(),
  email: joi.string().email().required(),
  password: joi.string().required(),
  url: joi.string().uri().trim().required()
});