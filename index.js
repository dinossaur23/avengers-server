const app = require('express')();
const bodyParser = require('body-parser');
const port = process.env.PORT || 3005;

app.listen(port, (req, res) => {
  console.log('Running');
});

app.use(bodyParser.json());
app.use('/', require('./routes/index'));
