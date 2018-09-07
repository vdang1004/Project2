// Drink model

module.exports = function(sequelize, DataTypes) {
  var Drink = sequelize.define("Drink", {
    drink_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    alcohol: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ingredient_one: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ingredient_two: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ingredient_three: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ingredient_four: {
      type: DataTypes.STRING,
      allowNull: true
    },
    drink_flavor: {
      type: DataTypes.STRING,
      allowNull: true
    },
    drink_event: {
      type: DataTypes.STRING,
      allowNull: true
    },
    rating: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, 
    {
    classMethods: {
      associate: function(models) {
        Drink.hasMany(models.Snack);
      }
    },
    timestamps:false
    }
  );
  return Drink;
};
