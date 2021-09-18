/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';

import React from 'react';
import {
  CssBaseline,
  Grid,
  Typography,
  Container,
  Button,
} from '@mui/material';

const container = css({
  backgroundColor: '#fff',
  padding: '3rem 0',
});

interface HeaderProps {
  header: string;
}

const Header: React.FC<HeaderProps> = ({ header }) => {
  return (
    <>
      <div css={container}>
        <Container maxWidth='sm'>
          <Typography
            variant='h2'
            align='center'
            color='textPrimary'
            gutterBottom
          >
            {header}
          </Typography>
        </Container>
      </div>
    </>
  );
};

export default Header;
