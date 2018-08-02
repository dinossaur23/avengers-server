const router = require('express').Router();
const ctrl  = require('../controllers/aluno');

router.get('/', ctrl.get);
router.get('/:id', ctrl.getById);
router.post('/', ctrl.post);

module.exports = router;
