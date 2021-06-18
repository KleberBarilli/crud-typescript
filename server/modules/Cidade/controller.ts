import { Request, Response } from 'express';
import * as _ from 'lodash';
import Handlers from '../../api/responses/handlers';
import Cidade from './service';


class CidadeController {
    private percentual;

    constructor() {
        this.percentual =[];
     }

    getAll(req: Request, res: Response) {
    
        Cidade
            .getAll()
            .then(_.partial(Handlers.onSuccess, res))
            .catch(_.partial(Handlers.onError, res, `Erro ao buscar todas as Cidades`))
    }

    createCidade(req: Request, res: Response) {

        
            // 2
        this.percentual.push(req.body)
    
        console.log(this.percentual)
        
    
        Cidade
            .create(this.percentual)
            .then(_.partial(Handlers.onSuccess, res))
            .catch(_.partial(Handlers.dbErrorHandler, res))
            .catch(_.partial(Handlers.onError, res, `Erro ao inserir nova Cidade`));
    }

    getById(req: Request, res: Response) {
        const userId = parseInt(req.params.id);
        Cidade.getById(userId)
            .then(_.partial(Handlers.onSuccess, res))
            .catch(_.partial(Handlers.onError, res, `Cidade não encontrada`))
    }

   
}

export default new CidadeController();
