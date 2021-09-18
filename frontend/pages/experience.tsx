/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import React from 'react';
import type { NextPage } from 'next';
import { CssBaseline, Grid, Container } from '@mui/material';
import Header from '../components/Layout/Header';
import Timeline from '../components/Timeline/Timeline';
import { container, background } from './about';

const Experience: NextPage = () => {
  return (
    <>
      <CssBaseline />
      <Header header='Experience'/>
      <main css={background}>
        <Container css={container}>
          <Grid
            container
            justifyContent='center'
            alignItems='center'
            spacing={6}
            direction='row'
          >
            <Grid item md={12}>
              <Timeline />
            </Grid>
          </Grid>
        </Container>
      </main>
    </>
  );
};

export default Experience;
