const express = require('express');

const { validateBody, authentication, upload } = require('../../middlewares');

const ctrl = require('../../controllers/auth');

const { schemas } = require('../../models/user');

const router = express.Router();

router.post('/register', validateBody(schemas.registerSchema), ctrl.register);
router.post('/login', validateBody(schemas.loginSchema), ctrl.login);
router.get('/current', authentication, ctrl.getCurrent);
router.post('/logout', authentication, ctrl.logout);

router.get('/verify/:verificationCode', ctrl.verify);

router.post(
  '/verify',
  validateBody(schemas.emailSchema),
  ctrl.resendVerifyEmail
);

router.patch(
  '/avatars',
  authentication,
  upload.single('avatar'),
  ctrl.updateAvatar
);

module.exports = router;
