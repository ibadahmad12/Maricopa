module.exports = (Sequelize, DataTypes) => {
   const answer = Sequelize.define(
      "answer",
      {
         answerID: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
         },
         statement: {
            type: DataTypes.STRING(),
            allowNull: true,
            default: "",
            validate: {
               len: [0, 200]
            }
         },
         optionName: {
            type: DataTypes.STRING,
            allowNull: false
         },
         optionCount: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
            allowNull: true
         }
      },

      {
         tableName: "answers",
         timestamps: false
      }
   );

   return answer;
};
