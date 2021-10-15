/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx, CSSObject } from '@emotion/react';

import React from 'react';
import {
  Typography,
  Container,
  Button,
} from '@mui/material';

const container: CSSObject = {
  backgroundColor: '#282a36',
  padding: '.5rem 0',
};

const text: CSSObject = {
  color: '#f8f8f2',
};

interface HeaderProps {
  header: string;
}

const Header: React.FC<HeaderProps> = ({ header }) => {
  return (
    <>
      <div css={container}>
        <Container maxWidth='lg'>
          <Typography css={text} variant='h2' align='center'>
            {header}
          </Typography>
        </Container>
      </div>
    </>
  );
};

export default Header;
