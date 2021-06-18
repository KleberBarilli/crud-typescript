import { Request, Response } from 'express';
import UserCategoriaController from './controller';

class UserCategoriaRoutes {

    constructor() { }

    index(req: Request, res: Response) {
        return UserCategoriaController.getAll(req, res);
    }

    create(req: Request, res: Response) {
        return UserCategoriaController.createPergunta(req, res);
    }

    findOne(req: Request, res: Response) {
        return UserCategoriaController.getById(req, res);
    }


}

export default new UserCategoriaRoutes();
