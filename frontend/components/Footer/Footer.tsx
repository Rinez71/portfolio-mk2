/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/react';
import { LinkedIn, GitHub } from '@mui/icons-material';

const footer = css({
  width: '100%',
  height: '100px',
  backgroundColor: '#162635',
  padding: '1rem 0',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const footerLink = css({
  color: '#fff',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexGrow: 1,
});

const Footer: React.FC = () => {
  return (
    <>
      <footer css={footer}>
        <a
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
          css={footerLink}
        >
          <LinkedIn fontSize='large' />
        </a>
        <a
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
          css={footerLink}
        >
          <GitHub fontSize='large' />
        </a>
      </footer>
    </>
  );
};

export default Footer;
