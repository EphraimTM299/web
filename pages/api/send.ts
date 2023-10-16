import type { NextApiRequest, NextApiResponse } from 'next';
import { TeilloWelcomeEmail } from '../../components/email-template';
import { Resend } from 'resend';
import NewBusinessSignup from '../../components/new-business';

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if(req.method === 'POST'){
      const {email, firstName} = JSON.parse( await req.body);
    try {
    const data = await resend.emails.send({
      from: 'Teillo Business Team <info@teillo.com>',
      to: [email],
      subject: 'Welcome to Teillo. Business',
      react: TeilloWelcomeEmail({ firstName, email  }),
    });

    const data2 = await resend.emails.send({
      from: 'Teillo Business Team <info@teillo.com>',
      to: [ 'info@teillo.com'],
      subject: 'New Business SignUp',
      react: NewBusinessSignup({ firstName, email  }),
    });
   

   return res.status(200).json(data);
  } catch (error) {
   return res.status(400).json(error);
  
  }

    }else{
       return res.status(405).json("Method not allowed");
    }
    
 
};

