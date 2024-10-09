import type { NextApiRequest, NextApiResponse, NextApiHandler } from "next";
import mongoose from "mongoose";
import type { respostasPadraoMsg } from "@/types/respostasPadraoMsg";



export const conectarMongoDB = (handler : NextApiHandler) =>
    async (req: NextApiRequest, res : NextApiResponse<respostasPadraoMsg>) => {


        //verificar se o banco ja esta conectaod, se estiver 
        //seguir para o endpoinst ou proximo middleware
        if(mongoose.connections[0].readyState) {
            return handler(req, res);
        }

        //ja que nao esta conectado vamos conectar 
        //obeter a variavel de anbienten prenchida do env
        const {MONGODB_CONEXAO_STRING} = process.env;

        //SE A ENV ESTIVER VAZIA ABORTA O USO DO SISTEMA E AVISAR O PROGRAMADOR
        if(!MONGODB_CONEXAO_STRING){
            return res.status(500).json({error : "ENV de configuracao do banco, nao informada"});
        }

        mongoose.connection.on("connected", () => console.log(" Banco de dados conectado"))
        mongoose.connection.on("error", error => console.log(`Ocorreu erro ao conectar no banco: ${error}`));
        await mongoose.connect(MONGODB_CONEXAO_STRING);

        //agora posso seguir para o endpoins por que estou conectaod no banco
        return handler(req, res);
        
    }