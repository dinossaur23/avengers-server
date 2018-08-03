const Avenger = require('./avenger');
const UserHasAvenger = require('./user_has_avenger');
const Users = require('./users');

UserHasAvenger.hasMany(Avenger, { foreignKey: 'id'} )
Avenger.belongsTo(UserHasAvenger, { foreignKey: 'id' })
UserHasAvenger.hasMany(Users, { foreignKey: 'id'} )
Users.belongsTo(UserHasAvenger, { foreignKey: 'id' })

Users.belongsToMany(Avenger, { through: UserHasAvenger, foreignKey: 'users_id'});
Avenger.belongsToMany(Users, { through: UserHasAvenger, foreignKey: 'avengers_id'});

module.exports = exports = {
  Avenger,
  UserHasAvenger,
  Users
};
