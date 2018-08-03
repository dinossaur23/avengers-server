const connection = require('../database/mariadb');
const { INTEGER, STRING, DATE } = connection.Sequelize;

const schema = {
  id: {
    type: INTEGER,
    field: 'id',
    primaryKey: true,
    allowNull: false,
    autoIncrement: true
  },
  name: {
    type: STRING,
    field: 'name',
    allowNull: false
  },
  id_marvel: {
    type: STRING,
    field: 'id_marvel',
    allowNull: false
  }
};

const Avenger = connection.define('avengers', schema, { tableName: 'avengers' });
module.exports = exports = Avenger;
