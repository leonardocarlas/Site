// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'


type Data = {
    responseWord : string
}

const Reverso = require('reverso-api');
const reverso = new Reverso();

export default async function handler( req: NextApiRequest, res: NextApiResponse<Data>) {
    try {
        const { text } = await reverso.getContext('Dog', 'English', 'German');
        res.status(200).json({ responseWord : `${text}` });
    } catch(e){
        console.log(e)
    }
}



    // getContext method example
    // reverso
    //    .getContext('meet me half way', 'English', 'Russian', (response : any) => {
    //        console.log(response);
    //    })
    //    .catch((err : any) => {
    //        console.error(err);
    //    });





