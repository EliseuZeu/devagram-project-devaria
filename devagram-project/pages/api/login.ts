import type { NextApiRequest, NextApiResponse } from "next"; // Importando Request e Response
import {conectarMongoDB} from '../../middlewares/conectarMongoDB'
import type { respostasPadraoMsg } from "@/types/respostasPadraoMsg";

// eslint-disable-next-line import/no-anonymous-default-export
const endpointLogin = (
    req : NextApiRequest, 
    res : NextApiResponse<respostasPadraoMsg>
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

export default conectarMongoDB(endpointLogin);



