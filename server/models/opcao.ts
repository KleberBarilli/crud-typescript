export default function (sequelize, DataTypes) {

    const Opcao = sequelize.define('Opcao', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        descricao: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        }

    });


    return Opcao;
}