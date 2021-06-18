export default function (sequelize, DataTypes) {

    const User_Categoria = sequelize.define('User_Categoria', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
    },

        percentualCategoria: {
            type: DataTypes.REAL
        }




    });


    return User_Categoria;
}
