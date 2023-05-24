const express = require('express');

const router = express.Router();

const ctrl = require('../../controllers/contacts');

const {
  validateBody,
  isValidId,
  validateStatusBody,
  authentication,
} = require('../../middlewares');

const { schemas } = require('../../models/contact');

router.get('/', authentication, ctrl.getAll);

router.get('/:contactId', authentication, isValidId, ctrl.getById);

router.post('/', authentication, validateBody(schemas.addSchema), ctrl.add);

router.delete('/:contactId', authentication, isValidId, ctrl.deleteById);

router.put(
  '/:contactId',
  authentication,
  isValidId,
  validateBody(schemas.addSchema),
  ctrl.updateById
);

router.patch(
  '/:contactId/favorite',
  authentication,
  isValidId,
  validateStatusBody(schemas.updateFavoriteSchema),
  ctrl.updateStatusContact
);

module.exports = router;

// test
