/* eslint-disable import/no-anonymous-default-export */
import type { NextApiRequest, NextApiResponse } from 'next';
import sgMail from '@sendgrid/mail';
import validator from 'validator';

let sendGrid: string;

if (process.env.SENDGRID_API_KEY) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  sendGrid = process.env.SENDGRID_API_KEY;
} else {
  throw new Error('SendGrid environment variable not set!!!');
}

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  const body = JSON.parse(req.body);

  const human = await validateHuman(body.token);

  if (!human) {
    res.status(400);
    res.json({ errors: "Please, you're not foolin' us...bot." });
    return;
  }

  //sanitizes req.body
  const cleanName = validator.escape(body.fullName).trim();
  const cleanEmail = validator.isEmail(body.email);
  const cleanSubject = validator.escape(body.subject).trim();
  const cleanMessage = validator.escape(body.message).trim();

  const message = `
    Name: ${cleanName}\r\n
    Email: ${cleanEmail}\r\n
    Subject: ${cleanSubject}\r\n
    Message: ${cleanMessage}
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

// Used to validate the sender is a human before anything is done with form data
const validateHuman = async (token: string): Promise<boolean> => {
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  const response = await fetch(
    `https://google.com/recaptcha/api/siteverify?secret=${secret}&response=${token}`,
    {
      method: 'POST',
    }
  );
  const data = await response.json();
  return data.success;
  // used to test failures in API call
  // return false;
};
