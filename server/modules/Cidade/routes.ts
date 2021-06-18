import { Request, Response } from 'express';
import CidadeController from './controller';

class CidadeRoutes {

    constructor() { }

    index(req: Request, res: Response) {
        return CidadeController.getAll(req, res);
    }

    create(req: Request, res: Response) {
        return CidadeController.createCidade(req, res);
    }

    findOne(req: Request, res: Response) {
        return CidadeController.getById(req, res);
    }


}

export default new CidadeRoutes();
