module.exports = (Sequelize, DataTypes) => {
   const question = Sequelize.define(
      "question",
      {
         questionID: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
         },
         statement: {
            type: DataTypes.STRING(1234),
            allowNull: false,
            default: "",
            validate: {
               len: [0, 300]
            }
         }
      },
      {
         tableName: "questions",
         timestamps: false
      }
   );

   return question;
};
