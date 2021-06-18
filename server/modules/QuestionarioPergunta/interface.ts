export interface IQuestionarioPergunta {
    QuestionarioPerguntaId: number,
    titulo: string,
    data: string
}

export interface IQuestionarioPerguntaDetail extends IQuestionarioPergunta {
    id: number,
    descricao: string,
    categoria: number,
}

export function createQuestionarioPergunta({ QuestionarioPerguntaId, titulo, data }: any): IQuestionarioPergunta {
    return {
        QuestionarioPerguntaId, titulo, data
    }
}



