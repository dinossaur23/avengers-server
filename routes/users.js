const router = require('express').Router();
const ctrl  = require('../controllers/users');

router.post('/authenticate', ctrl.authenticate);
router.post('/', ctrl.newUser);
router.get('/relationship/:id', ctrl.getUserAvenger);
router.delete('/:id', ctrl.del);
router.put('/:id', ctrl.update);

module.exports = router;
