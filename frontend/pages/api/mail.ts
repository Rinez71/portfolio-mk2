/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import type { NextApiRequest, NextApiResponse } from 'next';
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default (req: NextApiRequest, res: NextApiResponse) => {
  const body = JSON.parse(req.body);

  const message = `
    Name: ${body.fullName}\r\n
    Email: ${body.email}\r\n
    Subject: ${body.subject}\r\n
    Message: ${body.message}
  `;

  const data = {
    to: 'rinez_fs@outlook.com',
    from: 'hello@robertinez.xyz',
    subject: 'New Contact Form Message',
    text: message,
    html: message.replace(/\r\n/g, '<br>'),
  };

  sgMail.send(data);

  res.status(200).json({ status: 'Ok' });
};
