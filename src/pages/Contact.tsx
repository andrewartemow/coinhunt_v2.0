import { FC } from 'react';
import { Container, Typography, Link } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { ContentWrapper } from '../components/ContentWrapper';

const Contact: FC = () => {
  return (
    <Container>
      <ContentWrapper>
        <Typography variant="h2">Contact Me</Typography>
        <Typography>email: andrewartemow@gmail.com</Typography>
        <Typography>phone: +40 730 673 780</Typography>
        <Link
          sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
          href="https://github.com/andrewartemow/"
          color="inherit"
        >
          <LinkedInIcon /> LinkedIn
        </Link>
      </ContentWrapper>
    </Container>
  );
};

export default Contact;
