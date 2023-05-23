const { Schema, model } = require('mongoose');
const { HandleMongooseError } = require('../helpers');

const Joi = require('joi');

const userSchema = new Schema(
  {
    name: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },

    password: {
      type: String,
      minLength: 6,
      require: true,
    },
  },
  { versionKey: false, timestamps: true }
);

const registerSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  password: Joi.string().min(6).required(),
});

const loginSchema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().min(6).required(),
});

const schemas = {
  registerSchema,
  loginSchema,
};

const User = model('user', userSchema);

userSchema.post('save', HandleMongooseError);

module.exports = {
  User,
  schemas,
};
