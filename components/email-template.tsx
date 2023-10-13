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

interface TeilloWelcomeEmailProps {
  userFirstname: string;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : '';

export const TeilloWelcomeEmail = ({
  userFirstname = 'Zeno',
}: TeilloWelcomeEmailProps) => (
  <Html>
    <Head />
    <Preview>
      Your first step to a data driven approach to run your business. Your business will never be the same.
    </Preview>
    <Body style={main}>
      <Container style={container}>
        <Img
          src={`${baseUrl}/static/koala-logo.png`}
          width="170"
          height="50"
          alt="Koala"
          style={logo}
        />
        <Text style={paragraph}>Hi {userFirstname},</Text>
        <Text style={paragraph}>
          Welcome to Teillo Business, the order management platform that helps you
          uncover what's hiding in your business's data.<br/>

          The platform is designed to give your a data driven approach to business.
        </Text>
        <Section style={btnContainer}>
          <Button pX={12} pY={12} style={button} href="https://teillo.com">
            Explore Dashboard
          </Button>
        </Section>
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
