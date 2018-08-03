const Avenger = require('./avenger');
const UsersHasAvenger = require('./user_has_avenger');
const Users = require('./users');

UserHasAvenger.hasMany(Avenger, { foreignKey: 'avengers_id'} )
Avenger.belongsToMany(UserHasAvenger, { foreignKey: 'avengers_id' })
UserHasAvenger.hasMany(User, { foreignKey: 'users_id'} )
User.belongsToMany(UserHasAvenger, { foreignKey: 'users_id' })

module.exports = exports = {
  Avenger,
  Users,
  UserHasAvenger
};
