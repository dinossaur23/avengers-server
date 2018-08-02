const router = require('express').Router();

router.get('/', (req, res) => {
  res.send('Welcome to CRUD');
});

router.use('/alunos', require('./aluno'));

module.exports = router;
