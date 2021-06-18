export interface IUser_Categoria {
    id: number,
    percentualCategoria: number,
    UserId: number,
    categoriaId: number
}

export interface IUser_CategoriaDetail extends IUser_Categoria {
    id: number,
    percentualCategoria: number,
    UserId: number,
    categoriaId: number
}

export function createUser_Categoria({ id,percentualCategoria,UserId,categoriaId }: any): IUser_Categoria {
    return {
        id,percentualCategoria,UserId,categoriaId
    }
}



