import { FC, ReactNode } from 'react';
import { Box } from '@mui/material';

interface SectionProps {
  children: ReactNode;
  styles?: any;
  sectionRef?: any;
}

const Section: FC<SectionProps> = ({ children, styles, sectionRef }) => {
  const sectionStyles = {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    ...styles,
  };

  return (
    <Box component="section" sx={sectionStyles} ref={sectionRef}>
      {children}
    </Box>
  );
};

export default Section;
