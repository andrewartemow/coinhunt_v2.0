import { FC, useEffect, useRef } from 'react';
import { Box, Container, styled } from '@mui/material';
import BannerSection from '../components/BannerSection';
import CryptoListSection from '../components/CryptoListSection';
import { ContentWrapper } from '../components/ContentWrapper';

const Home: FC = () => {
  const ref: any = useRef(null);
  const scrollToSection = () => {
    window.scrollTo({
      top: ref?.current?.offsetTop,
      behavior: 'smooth',
    });
  };
  return (
    <Container>
      <ContentWrapper>
        <BannerSection
          styles={{ height: '70vh' }}
          scrollToSection={scrollToSection}
        />
        <CryptoListSection sectionRef={ref} />
      </ContentWrapper>
    </Container>
  );
};

export default Home;
