import  type { NextApiRequest, NextApiResponse } from "next";
import type { respostasPadraoMsg } from "@/types/respostasPadraoMsg";
import type { CadastroRequisicao } from "@/types/CadastroRequisicao";

const endpointCadastro = 
(req : NextApiRequest, res : NextApiResponse<respostasPadraoMsg>) => {

    if(req.method === "POST") {
        const usuario = req.body as CadastroRequisicao;

        if(!usuario.nome || usuario.nome.length < 2){
            return res.status(400).json({error : "Nome invalido"});
        }

        if(!usuario.email 
            || usuario.email.length < 5 
            || !usuario.email.includes("@")
            || !usuario.email.includes(".")){
            return res.status(400).json({error : "Email invalido"});
        }

        if(!usuario.senha || usuario.senha.length < 4 ){
            return res.status(400).json({error : "senha invalido"});
        }

        return res.status(200).json({msg : "Dados correto"});
    }
    return res.status(405).json({error : "Metodo informado não e valido"});
}

export default endpointCadastro;