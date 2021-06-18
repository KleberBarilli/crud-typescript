import { Request, Response } from 'express';
import QuestionarioPerguntaController from './controller';

class QuestionarioPerguntaRoutes {

    constructor() { }

    index(req: Request, res: Response) {
        return QuestionarioPerguntaController.getAll(req, res);
    }

    create(req: Request, res: Response) {
        return QuestionarioPerguntaController.createQuestionarioPergunta(req, res);
    }

    findOne(req: Request, res: Response) {
        return QuestionarioPerguntaController.getById(req, res);
    }


}

export default new QuestionarioPerguntaRoutes();
