import { Request, Response } from 'express';
import * as _ from 'lodash';
import Handlers from '../../api/responses/handlers';
import QuestionarioPergunta from './service';


class QuestionarioPerguntaController {

    constructor() { }

    getAll(req: Request, res: Response) {
        QuestionarioPergunta
            .getAll()
            .then(_.partial(Handlers.onSuccess, res))
            .catch(_.partial(Handlers.onError, res, `Erro ao buscar todas os QuestionarioPerguntas`))
    }

    createQuestionarioPergunta(req: Request, res: Response) {
        QuestionarioPergunta
            .create(req.body)
            .then(_.partial(Handlers.onSuccess, res))
            .catch(_.partial(Handlers.dbErrorHandler, res))
            .catch(_.partial(Handlers.onError, res, `Erro ao inserir novo QuestionarioPergunta`));
    }

    getById(req: Request, res: Response) {
        const userId = parseInt(req.params.id);
        QuestionarioPergunta.getById(userId)
            .then(_.partial(Handlers.onSuccess, res))
            .catch(_.partial(Handlers.onError, res, `QuestionarioPergunta não encontrado`))
    }

   
}

export default new QuestionarioPerguntaController();
