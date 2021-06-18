export interface ICidade {
    id: number,
    descricao: string,
    categoria: number,
}

export interface ICidadeDetail extends ICidade {
    id: number,
    descricao: string,
    categoria: number,
}

export function createCidade({ id, descricao, categoria }: any): ICidade {
    return {
        id, descricao, categoria
    }


}



