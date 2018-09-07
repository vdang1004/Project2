// Snack Model

module.exports = function(sequelize, DataTypes) {
  var Snack = sequelize.define("Snack", {
    snack_name: {
      type: DataTypes.STRING,
      allowNull: true
    }, 
    snack_flavor: {
      type: DataTypes.STRING,
      allowNull: true
    }
  },
  {timestamps:false}
  );
  return Snack;
};
