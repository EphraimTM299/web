import type { NextApiRequest, NextApiResponse } from 'next';
import { TeilloWelcomeEmail } from '../../components/email-template';
import { Resend } from 'resend';

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const data = await resend.emails.send({
      from: 'Teillo Business Team <info@teillo.com>',
      to: "teillo365@gmail.com",
      subject: 'Welcome to Teillo. Business',
      react: TeilloWelcomeEmail({ userFirstname: 'Ephraim' }),
    });

    res.status(200).json(data);
  } catch (error) {
    res.status(400).json(error);
  }
};

