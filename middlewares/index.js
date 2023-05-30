const validateBody = require('./validateBody');
const validateStatusBody = require('./validateStatusBody');
const isValidId = require('./isValidId');
const authentication = require('./authentication');
const upload = require('./upload');

module.exports = {
  validateBody,
  validateStatusBody,
  isValidId,
  authentication,
  upload,
};
