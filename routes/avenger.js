const router = require('express').Router();
const ctrl  = require('../controllers/avenger');

router.get('/', ctrl.get);
router.get('/:id', ctrl.getById);
router.post('/', ctrl.post);
router.delete('/:id', ctrl.del);

module.exports = router;
