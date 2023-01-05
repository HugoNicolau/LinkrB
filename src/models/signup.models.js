import joi from "joi";

export const newUserSchema = joi.object({
  name: joi.string().min(3).required(),
  email: joi.string().email().required(),
  password: joi.string().required(),
  confirmPassword: joi.ref('password'),
  url: joi.string().uri().trim().required()
});