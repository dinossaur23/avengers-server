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
  birthday: {
    type: DATE,
    field: 'birthday',
    allowNull: false
  }
};

const Avenger = connection.define('avenger', schema, { tableName: 'avenger' });
module.exports = exports = Avenger;
