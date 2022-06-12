// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next'


type Data = {
    responseWord : string
}

export default function handler( req: NextApiRequest, res: NextApiResponse<Data>) {

    let s = translate('Dog', 'English', 'German');
    res.status(200).json({ responseWord: `${s}` })
}

function translate (word: string, fromLanguage: string, toLanguage: string) : string {

    const Reverso = require('reverso-api');
    const reverso = new Reverso();
    let responseWord = "";

    reverso.getContext(word, fromLanguage, toLanguage, (response : any) => {
        //console.log(response);
        responseWord = response.translation[0];
    }).catch((err : any) => {
        console.error(err);
    });

    return responseWord;
}

