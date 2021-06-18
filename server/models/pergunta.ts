export default function (sequelize, DataTypes) {

    const Pergunta = sequelize.define('Pergunta', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        descricao: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        categoriaFk:{
            type:DataTypes.INTEGER,
   
        },
        questionarioFk:{
            type:DataTypes.INTEGER
        }


       

        
        
    });


    return Pergunta;
}
