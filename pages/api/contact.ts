import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer, {Transporter} from 'nodemailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';

type Data = {
    sent : boolean
}

export default async function handler(req : NextApiRequest, res: NextApiResponse<Data>) {

    if (req.method == "POST") {

        console.log(process.env.customKey)

        let transporter : Transporter =
            nodemailer.createTransport({
                host : 'smtpout.secureserver.net',
                port : 80,
                auth : {
                    user : process.env.EMAIL_SENDER,
                    pass : process.env.EMAIL_PASSWORD
                }
            });

        let options = {
            from : `${req.body.email}`,
            to   : process.env.EMAIL_SENDER,
            subject: `${req.body.subject}`,
            text: `${req.body.message}`,
        };

        let result1 : SMTPTransport.SentMessageInfo = await transporter.sendMail(options);

        res.status(200).json({ sent : true })
    }
 }














// import type { NextApiRequest, NextApiResponse } from 'next'
// import { useRouter } from 'next/router';
// import nodemailer, {Transporter} from 'nodemailer';
// import SMTPTransport from 'nodemailer/lib/smtp-transport';
// import { Util } from '../../utils/util';

// type Data = {
//     name: string
// }

// export default async function(req: NextApiRequest, res: NextApiResponse<Data>) {
//     return new Promise<void>(async resolve => {
    
//         try {
//             // the gmail account that should send me the mail
//             let transporter : Transporter =
//             nodemailer.createTransport({
//                 host : 'smtp.gmail.com',
//                 port : 465,
//                 auth : {
//                     user : 'collectionsight@gmail.com',
//                     pass : 'Dragalge3'
//                 }
//             });
            
//             let options = {
//                 from : `${req.body.email}`,
//                 to   : 'lio.del.bronx@gmail.com',          // info@leonardocarlassare.com
//                 subject: `${req.body.subject}`,
//                 text: `${req.body.message}`,
//             };
        
//             let result1 : SMTPTransport.SentMessageInfo = await transporter.sendMail(options);
    
//             options.to = `${req.body.email}`;
//             options.subject = 'Your message has been sent';
//             options.text = 'Thank you for contacting us. We will reply you as soon as possible';
    
//             let result2 : SMTPTransport.SentMessageInfo = await transporter.sendMail(options);
    
//             res.status(200).json({ name: 'The email has been sent' });
            
//         }
//         catch (error) {
//             res.status(400);
//         }
     
//     })
// }


