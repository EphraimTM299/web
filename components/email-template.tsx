import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from '@react-email/components';
import * as React from 'react';

import Image from 'next/image';

interface TeilloWelcomeEmailProps {
  firstName: string;
  email:string
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : '';

export const TeilloWelcomeEmail = ({
  firstName ,
}: TeilloWelcomeEmailProps) => (
  <Html>
    <Head />
    <Preview>
      Your first step to a data driven approach to run your business. Your business will never be the same.
    </Preview>
    <Body style={main}>
      <Container style={container}>
        
        <Text style={paragraph}>Hi {firstName},</Text>
        <Text style={paragraph}>
        
            We're thrilled to welcome you to Teillo Business! 
            
         <br/> <br/>Thank you for choosing us as your trusted partner for your business operations and order management.

          <br/> Here at Teillo, we are committed to empowering your business and helping you achieve your goals. 
          
          <br/>Our mission is to make your work easier, more efficient, and ultimately more successful.

           <br/> What You Can Expect from Us:

            <ul className='text-sm'>
              <li>User-Friendly Interface: Our platform is designed with simplicity and efficiency in mind. You'll find that Teillo Business is intuitive and easy to use, allowing you to get started quickly.</li> <br/>
              <li>24/7 Customer Support: Our dedicated support team is here to assist you around the clock. Whether you have questions, need guidance, or encounter any issues, we're just a message away.</li><br/>
              <li> Continuous Updates: We're constantly improving our platform to meet your evolving needs. Expect regular updates and new features to enhance your experience.</li><br/>
              <li> Resourceful Knowledge Base: Visit our Knowledge Base for comprehensive guides, tutorials, and helpful tips. It's a valuable resource for maximizing your Teillo Business experience.</li><br/>
            </ul>

            
          <Text style={paragraph}>
           What's Next:
,
          <br /><br />
           Onboarding Assistance: We will send you a video tutorial on how the platform works. It is an intuitive platform, so don't worry.
           <br/><br />
            We're excited to embark on this journey with you and can't wait to see the amazing things you'll achieve with Teillo Business. 
            
            
            <br /><br />If you have any questions, concerns, or feedback, please don't hesitate to reach out to our support team.
        </Text>
           
           
           <br/>

           <Text style={paragraph}> Once again, welcome to the Teillo Business community. We're here to help you succeed.</Text>

           

        </Text>
        {/* <Section style={btnContainer}>
          <Button pX={12} pY={12} style={button} href="https://teillo.com">
            Explore Dashboard
          </Button>
        </Section> */}
        <Text style={paragraph}>
          Best,
          <br />
          The Teillo Business team
        </Text>
        <Hr style={hr} />
        <Text style={footer}>27 Main Rd Rondebosch - Cape Town, SA 7700</Text>
      </Container>
    </Body>
  </Html>
);

export default TeilloWelcomeEmail;

const main = {
  backgroundColor: '#ffffff',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: '0 auto',
  padding: '20px 0 48px',
};

const logo = {
  margin: '0 auto',
};

const paragraph = {
  fontSize: '16px',
  lineHeight: '26px',
};

const btnContainer = {
  textAlign: 'center' as const,
};

const button = {
  backgroundColor: '#5F51E8',
  borderRadius: '8px',
  color: '#fff',
  fontSize: '16px',
  textDecoration: 'none',
  textAlign: 'center' as const,
  display: 'block',
};

const hr = {
  borderColor: '#cccccc',
  margin: '20px 0',
};

const footer = {
  color: '#8898aa',
  fontSize: '12px',
};
