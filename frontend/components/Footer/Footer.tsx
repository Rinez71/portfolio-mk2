/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import { makeStyles } from '@material-ui/core/styles';

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
          <LinkedInIcon fontSize='large' />
        </a>
        <a
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
          css={footerLink}
        >
          <GitHubIcon fontSize='large' />
        </a>
      </footer>
    </>
  );
};

export default Footer;
