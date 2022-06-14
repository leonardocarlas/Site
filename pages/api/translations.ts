// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    portuguese : string,
    spanish    : string,
    italian    : string,
    french     : string,
    english    : string,
    german     : string
}

const Reverso = require('reverso-api');
const reverso = new Reverso();

export default async function handler( req: NextApiRequest, res: NextApiResponse<Data>) {
    console.log(req.body);
    let languageIndex : number = parseInt(req.body.from);
    const languages : Array<string> = ['Portuguese','Spanish','Italian','French','English','German'];
    try {
        let responseWords : Array<string> = [];
        for(let i = 0; i < languages.length; i++) {
            if(i == languageIndex)
                responseWords.push(req.body.word);
            else {
                const {translation} = await reverso.getContext(req.body.word, languages[languageIndex], languages[i]);
                responseWords.push(translation[0]);
            }
        }
        res.status(200).json({
            portuguese : responseWords[0],
            spanish    : responseWords[1],
            italian    : responseWords[2],
            french     : responseWords[3],
            english    : responseWords[4],
            german     : responseWords[5],
        });
    } catch(e) {
        console.log(e)
    }
}










