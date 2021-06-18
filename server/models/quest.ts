export default function (sequelize, DataTypes) {

    const Questionario = sequelize.define('Questionario', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        titulo: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        data: {
            type: DataTypes.DATE,
            allowNull: false,
            validate: {
                notEmpty: true,
                isDate:true

            }
        }
    });


    return Questionario;
}
