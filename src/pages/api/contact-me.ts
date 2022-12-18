import type { NextApiRequest, NextApiResponse } from 'next'
import mail from '@sendgrid/mail'

import { ContactFormFields } from '../../components/views/Contact'

interface ExtendedNextApiRequest extends NextApiRequest {
    body: ContactFormFields
}

type ResponseData = {
    message: string
    error: boolean
}
  
const SENDGRID_KEY = process.env.SENDGRID_KEY
const MY_EMAIL = process.env.MY_EMAIL
const EMAIL_SENDER = process.env.EMAIL_SENDER

export default function handler(
  req: ExtendedNextApiRequest,
  res: NextApiResponse<ResponseData>
) {
    const {
        email,
        message: emailMessage,
        name,
        subject
    } = req.body
    mail.setApiKey(SENDGRID_KEY)

    const message = `
        Name: ${name}rn
        Email: ${email}rn
        Message: ${emailMessage}
    `

    mail.send({
        to: MY_EMAIL,
        from: EMAIL_SENDER,
        subject,
        text: message,
        html: message.replace(/rn/g, '<br>')
    })
    .then(() => {
        res.status(200).json({ message: 'Email send with sucess!', error: false });
    })
    .catch(error => {
        console.log(error)
        res.status(400).json({ message: error.message, error: true });
    });
}
