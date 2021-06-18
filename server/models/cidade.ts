export default function (sequelize, DataTypes) {

    const Cidade = sequelize.define('Cidade', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        name: {
            type: DataTypes.STRING,
            allowNull:false,
            validate: {
                notEmpty:true
            }
        },
        uf: {
            type: DataTypes.STRING(2),
            allowNull: false,
            validate: {
                notEmpty:true,
                max:2,
                min:2

            }
        }
    });


    return Cidade;
}
