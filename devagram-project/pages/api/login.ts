import type { NextApiRequest, NextApiResponse } from "next"; // Importando Request e Response

// eslint-disable-next-line import/no-anonymous-default-export
export default (
    req : NextApiRequest, 
    res : NextApiResponse
) => {
    if(req.method === "POST") {
        const {login, senha} = req.body;

        if(login === 'admin')
    }
    return res.status(405).json({error : 'Metodod informado nao e valido'});
}



