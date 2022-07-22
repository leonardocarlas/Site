import type { NextApiRequest, NextApiResponse } from 'next'
import { useRouter } from 'next/router';
import nodemailer, {Transporter} from 'nodemailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';
import { Util } from '../../utils/util';


type Data = {
    sent : boolean
}

// body: {
//     form: { name: 'LEONARDO', email: 'lio.del.bronx@gmail.com', text: 't' },
//     locale: 'en'
//   },



export default async function handler(req : NextApiRequest, res: NextApiResponse<Data>) {

    console.log(req.body);
    console.log(process.env.EMAIL_SENDER)
    console.log(process.env.EMAIL_PASSWORD)

    let t = Util.getLocaleFromString(req.body.locale);

    if (req.method == "POST") {

        let transporter : Transporter =
            nodemailer.createTransport({
                host : 'smtpout.secureserver.net',
                port : 80,
                auth : {
                    user : process.env.EMAIL_SENDER,
                    pass : process.env.EMAIL_PASSWORD
                }
            });

        let options1 = {
            from : process.env.EMAIL_SENDER,
            to   : process.env.EMAIL_SENDER,
            subject: `${req.body.form.name} : a new message from ${req.body.form.email}`,
            text: req.body.form.text,
        };

        let result1 : SMTPTransport.SentMessageInfo = await transporter.sendMail(options1); // To me

        let options2 = {
            from : process.env.EMAIL_SENDER,
            to   : req.body.form.email,
            subject: t.contact.apiObjectMail,
            text: t.contact.apiBodyMail,
        };


        let result2 : SMTPTransport.SentMessageInfo = await transporter.sendMail(options2); // To client

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
//                 from : `${req.body.form.email}`,
//                 to   : 'lio.del.bronx@gmail.com',          // info@leonardocarlassare.com
//                 subject: `${req.body.form.subject}`,
//                 text: `${req.body.form.message}`,
//             };
        
//             let result1 : SMTPTransport.SentMessageInfo = await transporter.sendMail(options);
    
//             options.to = `${req.body.form.email}`;
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


