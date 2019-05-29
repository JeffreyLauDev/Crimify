'use strict';
module.exports = (sequelize, DataTypes) => {
  const area = sequelize.define('area', {
    area: DataTypes.STRING,
    lat: DataTypes.FLOAT,
    lng: DataTypes.FLOAT
  }, {
      underscored: true,
      timestamps: false,
    });
  area.associate = function (models) {
    // associations can be defined here
  };
  area.removeAttribute('id');
  return area;
};