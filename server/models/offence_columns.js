'use strict';
module.exports = (sequelize, DataTypes) => {
  const offence_columns = sequelize.define('offence_columns', {
    column: DataTypes.STRING,
    pretty: DataTypes.STRING
  }, {
      underscored: true,
      timestamps: false,
    });
  offence_columns.associate = function (models) {
    // associations can be defined here
  };
  offence_columns.removeAttribute('id');
  return offence_columns;
};

