export default function (sequelize, DataTypes) {

    const Categoria = sequelize.define('Categoria', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true



        },
        nome: {
            type: DataTypes.STRING
        },

        descricao: {
            type:DataTypes.TEXT
        },

        VideoUrl: {
            type:DataTypes.TEXT
        }

    });


    return Categoria;
}
