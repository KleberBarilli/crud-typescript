import { ICidade, ICidadeDetail, createCidade} from './interface';
import * as Bluebird from 'bluebird';
const model = require('../../models');
import pg from 'pg';





class Cidade implements ICidade {
    static query: any;
    public id: number;
    public descricao: string;
    public categoria: number;


    constructor() { 

    }

    create(Cidade: any) {
        return model.Cidade.create(Cidade);
    }

    getAll(): Bluebird<ICidade[]> {
        return model.Cidade.findAll({
            include: {
                model: model.Categoria
            
                
            }
        })

           
    }

    getById(id: number): Bluebird<ICidadeDetail> {
        return model.Cidade.findOne({
            where: { id }
        })
    }
    
  
   
        
    }



export default new Cidade();
