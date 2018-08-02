const router = require('express').Router();

router.get('/', (req, res) => {
  res.send('Welcome to CRUD');
});

router.use('/avengers', require('./avenger'));

module.exports = router;
