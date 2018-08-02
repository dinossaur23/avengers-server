const Sequelize = require('sequelize');
const sequelize = new Sequelize('nodeangular', 'nodeangular', 'IBMjul18@', {
  host: 'nodeangular.mysql.dbaas.com.br',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 1,
    acquire: 30000,
    idle: 10000
  },
  operatorAliases: false,
  define: { timestamps: false }
});

sequelize.query("SELECT * FROM avengers")
  .then(myTableRows => {
    console.log(myTableRows);
  });

module.exports = exports = sequelize;
