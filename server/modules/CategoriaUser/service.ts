import { IUser_Categoria, IUser_CategoriaDetail, createUser_Categoria } from './interface';
import * as Bluebird from 'bluebird';
const model = require('../../models');
import pg from 'pg';





class User_Categoria implements IUser_Categoria {
    static query: any;
    public id: number;
    public percentualCategoria: number;
    public UserId: number;
    public categoriaId: number


    constructor() {

    }

    create(User_Categoria: any) {
        return model.User_Categoria.create(User_Categoria);
    }

    getAll(): Bluebird<IUser_Categoria[]> {
        return model.User.findAll({
            attributes:{
                exclude:['createdAt','updatedAt','password']
            },
            include: {
                model: model.Categoria,
                attributes:{
                    exclude:['createdAt','updatedAt']
                }

            }
        })


    }

    getById(id: number): Bluebird<IUser_CategoriaDetail> {
        return model.User.findOne({
            where: { id },
            attributes:{
                exclude:['password','createdAt','updatedAt']
            },
            include:{
                model:model.Categoria
            }
        })
    }




}



export default new User_Categoria();
