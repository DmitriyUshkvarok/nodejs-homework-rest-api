const { Schema, model } = require('mongoose');
const { HandleMongooseError } = require('../helpers');

const Joi = require('joi');

const userSchema = new Schema(
  {
    password: {
      type: String,
      required: [true, 'Set password for user'],
      minLength: 6,
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
    },
    subscription: {
      type: String,
      enum: ['starter', 'pro', 'business'],
      default: 'starter',
    },
    token: {
      type: String,
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
