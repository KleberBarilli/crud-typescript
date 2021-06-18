import { Application, Request, Response } from 'express';
import UserRoutes from '../../modules/User/routes';
import TokenRoutes from '../../modules/auth/auth';

import CidadeRoutes from '../../modules/Cidade/routes';
import QuestionarioRoutes from '../../modules/QuestionarioPergunta/routes';
import UserCategoriaRoutes from '../../modules/CategoriaUser/routes';

class Routes {

  private tokenRoute;

  constructor() {
    this.tokenRoute = TokenRoutes;
  }

  initRoutes(app: Application, auth: any): void {
    app.route('/api/users/all').all(auth.config().authenticate()).get(UserRoutes.index);
    app.route('/api/users/create').post(UserRoutes.create);
    app.route('/api/users/:id').all(auth.config().authenticate()).get(UserRoutes.findOne);
    app.route('/api/users/:id/update').all(auth.config().authenticate()).put(UserRoutes.update);
    app.route('/api/users/:id/destroy').all(auth.config().authenticate()).delete(UserRoutes.destroy);
    app.route('/api/token').post(this.tokenRoute.auth);


    //app.route('/api/cidade/all').get(CidadeRoutes.index);
    //app.route('/api/cidade/create').post(CidadeRoutes.create);
    
    app.route('/api/questionario/all').all(auth.config().authenticate()).get(QuestionarioRoutes.index);
    
    app.route('/api/user_categoria/all').all(auth.config().authenticate()).get(UserCategoriaRoutes.index);
    app.route('/api/user_categoria/create').all(auth.config().authenticate()).post(UserCategoriaRoutes.create);
    app.route('/api/user_categoria/:id').all(auth.config().authenticate()).get(UserCategoriaRoutes.findOne);
  }
}

export default new Routes();
