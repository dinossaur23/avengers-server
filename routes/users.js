const router = require('express').Router();
const ctrl  = require('../controllers/users');

router.post('/authenticate', ctrl.authenticate);
router.post('/', ctrl.newUser);

module.exports = router;
