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
                type: DataTypes.STRING,
                allowNull: false,
                default: "",
                validate: {
                    is: /^.{1,300}$/i
                }
            }
        },
        {
            tableName: "questions"
        }
    );

    return question;
};
