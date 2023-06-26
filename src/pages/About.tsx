import { FC } from 'react';
import { Container, Typography, Link } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { ContentWrapper } from '../components/ContentWrapper';

const About: FC = () => {
  return (
    <Container>
      <ContentWrapper>
        <Typography variant="h2">About Me</Typography>
        <Typography variant="body1" sx={{ marginBottom: '20px' }}>
          My name is Andrei Artemov, I'm Frontend Developer, and this is my
          portfolio project. To code this project, I used: HTML / CSS /
          JAVASCRIPT / TYPESCRIPT / REACT.JS / REACT Router / MATERIAL UI.
        </Typography>
        <Link
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            marginBottom: '10px',
          }}
          href="https://github.com/andrewartemow/"
          color="inherit"
        >
          <GitHubIcon /> GitHub
        </Link>
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

export default About;
