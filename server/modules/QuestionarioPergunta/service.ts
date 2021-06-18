import { IQuestionarioPergunta, IQuestionarioPerguntaDetail, createQuestionarioPergunta} from './interface';
import * as Bluebird from 'bluebird';
const model = require('../../models');

class QuestionarioPergunta implements IQuestionarioPergunta {
    public QuestionarioPerguntaId: number;
    public titulo: string;
    public data: string;


    constructor() {

    }

    create(QuestionarioPergunta: any) {
        return model.QuestionarioPergunta.create(QuestionarioPergunta);
    }

    getAll(): Bluebird<IQuestionarioPergunta[]> {
        return model.QuestionarioPergunta.findAll({
        attributes:{
            exclude:['createdAt','updatedAt']
        },
          include: [{
            model: model.Questionario,
            attributes:{
                exclude:['createdAt','updatedAt']
            },
            include: [{
              model: model.Pergunta,
              attributes:{
                  exclude:['createdAt','updatedAt']
              },
               include: [{
                model: model.PerguntaOpcao,
                attributes:{
                    exclude:['createdAt','updatedAt']
                }
              },
              {
               model: model.Categoria,
               attributes:{
                   exclude:['createdAt','updatedAt']
               }
             }
            ]
          }]
          }]
        })
    }

    getById(id: number): Bluebird<IQuestionarioPerguntaDetail> {
        return model.QuestionarioPergunta.findOne({
            where: { id }
        })
    }




    }



export default new QuestionarioPergunta();
