export default function (sequelize, DataTypes) {

    const PerguntaOpcaoResposta = sequelize.define('PerguntaOpcaoResposta', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        userId: {
            type: DataTypes.STRING,
            allowNull:false,
            validate: {
                notEmpty: true
            }
        },
        questionarioPerguntaOpcaoId:{
            type: DataTypes.STRING,
            allowNull:false,
            validate:{
                notEmpty:true
            }
        },
        resposta: {
            type: DataTypes.STRING,
            allowNull:false,
            validate: {
                notEmpty:true,

            }
        }
    });


    return PerguntaOpcaoResposta;
}
