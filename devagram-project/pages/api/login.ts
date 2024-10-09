import type { NextApiRequest, NextApiResponse } from "next"; // Importando Request e Response

// eslint-disable-next-line import/no-anonymous-default-export
export default (
    req : NextApiRequest, 
    res : NextApiResponse
) => {
    if(req.method === "POST") {  // Chamando meu metodo post 
        const {login, senha} = req.body; // recebendo meu body da req

        if(login === 'admin@admin.com' && senha === 'admin@admin'){ //verificando se o login esta correto
            res.status(200).json({msg : 'Usuario autenticado com sucesso'}); //retornando que esta tudo ok
        }
        return res.status(400).json({error : 'Usuario ou senha nao encontrado'}); // retornando que nao foi encontrado usuario
    }
    return res.status(405).json({error : 'Metodod informado nao e valido'}); // rotornando erro caso a pagina nao seja encontrada
}



