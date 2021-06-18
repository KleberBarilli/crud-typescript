export default function (sequelize, DataTypes) {

    const PerguntaOpcao = sequelize.define('PerguntaOpcao', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        descricao: {
            type: DataTypes.TEXT
        },

       opcao: {
           type: DataTypes.INTEGER
       }
        




    });


    return PerguntaOpcao;
}
