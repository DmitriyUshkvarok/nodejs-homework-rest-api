const express = require('express');

const { validateBody, authentication } = require('../../middlewares');

const ctrl = require('../../controllers/auth');

const { schemas } = require('../../models/user');

const router = express.Router();

router.post('/register', validateBody(schemas.registerSchema), ctrl.register);
router.post('/login', validateBody(schemas.loginSchema), ctrl.login);
router.get('/current', authentication, ctrl.getCurrent);
router.post('/logout', authentication, ctrl.logout);

module.exports = router;
