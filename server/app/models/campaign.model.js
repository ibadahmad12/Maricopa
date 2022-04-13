module.exports = (Sequelize, DataTypes) => {
   const tutorial = Sequelize.define("campaign", {
      campaignID: {
         type: DataTypes.INTEGER,
         autoIncrement: true,
         primaryKey: true
      },
      title: {
         type: DataTypes.STRING,
         allowNull: false,
         unique: true
      },
      description: {
         type: DataTypes.STRING(1234),
         defaultValue: "",
         allowNull: false
      },
      scheduleDate: {
         type: DataTypes.DATE,
         allowNull: false
      },
      noOfQuestions: {
         type: DataTypes.INTEGER,
         defaultValue: 0
      }
   });

   return tutorial;
};
