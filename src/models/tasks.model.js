"use strict";
const Tasks = (sequelize, DataTypes) =>
  sequelize.define("tasks", {
    Text: { type: DataTypes.TEXT },
    assignedto: { type: DataTypes.STRING },
    difficulty: { type: DataTypes.TEXT },
    complete: { type: DataTypes.BOOLEAN },
  });

module.exports = Tasks;
