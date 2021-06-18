import { Request, Response, ErrorRequestHandler, NextFunction } from 'express';
import * as HTTPStatus from 'http-status';
import * as jwt from 'jwt-simple';
import * as bcrypt from 'bcrypt';
const config = require('../../config/env/config')();


class Handlers {

  constructor(){}

  onSuccess(res: Response, data: any){
      return res.status(HTTPStatus.OK).json({ payload: data });
  }

  onError(res: Response, message: string, err: any) {
    console.log(`Error: ${err}`);
    return res.json({
      message: "Erro interno do servidor"
    });
  }

  authSuccess(res: Response, credentials: any, data: any) {
    const isMatch = bcrypt.compareSync(credentials.password, data.password);
    if(isMatch) {
      const payload = { id: data.id };
      return res.json({
                id: data.id,
                name: data.name,
                token: jwt.encode(payload, config.secret)
             });
    } else {
      return res.json({
        message: "Não autorizado"
      });
    }
  }

  authFail(req: Request, res: Response) {
    return res.json({
      message: "Autenticação Falhou"
    });
  }

  dbErrorHandler(res: Response, err: any){
    console.log(`Um erro aconteceu: ${err}`);
    return res.json({
      message: 'Erro ao criar usuário'
    });
  }

  errorHandlerApi(err: ErrorRequestHandler, req: Request, res: Response, next: NextFunction){
    console.error(`API error handler foi executada: ${err}`);
    return res.json({

      message: 'Erro Interno do Servidor'
    });
  }
}

export default new Handlers();
