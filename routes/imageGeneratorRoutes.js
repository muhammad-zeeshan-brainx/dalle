const router = require('express').Router();
const { imageGeneratorController } = require('./../controllers');

router.get('/', (req, res) => {
  return res.status(200).json({ message: 'server running' });
});
router.post('/', imageGeneratorController.generateImage);

module.exports = router;
