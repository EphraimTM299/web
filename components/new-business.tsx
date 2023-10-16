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

interface NewBusinessSignupProps {
  firstName: string;
  email:string
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : '';

export const NewBusinessSignup = ({
firstName,
}: NewBusinessSignupProps) => (
  <Html>
    <Head />
    <Preview>
      New Business SignUp
    </Preview>
    <Body style={main}>
      <Container style={container}>
        
        <Text style={paragraph}>Hi Admin,</Text>
        <Text style={paragraph}>
          {firstName} just signed their business up with [email]
        </Text>
        
        <Text style={paragraph}>
          Best,
          <br />
          The Teillo Team
        </Text>
        <Hr style={hr} />
        
      </Container>
    </Body>
  </Html>
);

export default NewBusinessSignup;

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
  borderRadius: '3px',
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
