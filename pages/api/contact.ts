import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer, {Transporter} from 'nodemailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';
import * as http from 'http'; 

type Data = {
    name: string
}

export default async function handler(
    req : NextApiRequest,
    res: NextApiResponse<Data>
) {

    try {
        let transporter : Transporter =
        nodemailer.createTransport({
            host : 'smtp.gmail.com',
            port : 465,
            auth : {
                user : 'collectionsight@gmail.com',
                pass : 'Dragalge3'
            }
        });
    
        let options = {
            from : `${req.body.email}`,
            to   : 'lio.del.bronx@gmail.com',
            subject: `${req.body.subject}`,
            text: `${req.body.message}`,
        };
    
        let result : SMTPTransport.SentMessageInfo = await transporter.sendMail(options)
        res.status(200).json({ name: 'The email has been sent' });
    }
    catch(error) {
        res.status(400);
    }


 }



