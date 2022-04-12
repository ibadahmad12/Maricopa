module.exports = (Sequelize, DataTypes) => {
    const tutorial = Sequelize.define(
        "campaign",
        {
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
                type: DataTypes.STRING(1234)
            },
            noOfQuestions: {
                type: DataTypes.INTEGER,
                defaultValue: 0
            }
        },
        {
            tableName: "campaigns"
        }
    );

    return tutorial;
};
