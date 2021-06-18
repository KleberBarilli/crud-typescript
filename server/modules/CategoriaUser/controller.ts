import { Request, Response } from 'express';
import * as _ from 'lodash';
import Handlers from '../../api/responses/handlers';
import User_Categoria from './service';


class User_CategoriaController {

    constructor() { }

    getAll(req: Request, res: Response) {
        User_Categoria
            .getAll()
            .then(_.partial(Handlers.onSuccess, res))
            .catch(_.partial(Handlers.onError, res, `Erro ao buscar todas as Perguntas`))
    }

    createPergunta(req: Request, res: Response) {
        User_Categoria  
            .create(req.body)
            .then(_.partial(Handlers.onSuccess, res))
            .catch(_.partial(Handlers.dbErrorHandler, res))
            .catch(_.partial(Handlers.onError, res, `Erro ao inserir nova Pergunta`));
    }

    getById(req: Request, res: Response) {
        const userId = parseInt(req.params.id);
        User_Categoria.getById(userId)
            .then(_.partial(Handlers.onSuccess, res))
            .catch(_.partial(Handlers.onError, res, `Pergunta não encontrada`))
    }


}

export default new User_CategoriaController();
