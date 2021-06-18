export default function (sequelize, DataTypes) {
    const QuestionarioPergunta = sequelize.define('QuestionarioPergunta', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        questionarioFk: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        perguntaFk: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: true

            }
        }
        
        
    });


    return QuestionarioPergunta;
}
