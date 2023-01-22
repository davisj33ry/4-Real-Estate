const User = require('./User');
const Project = require('./Project');

app.use("/Assets", express.static(path.join(__dirname, "/public/Assets")));

User.hasMany(Project, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Project.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Project };


