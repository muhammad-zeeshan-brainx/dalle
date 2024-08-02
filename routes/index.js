const router = require('express').Router();

router.use('/generate_image', require('./imageGeneratorRoutes'));

module.exports = router;
