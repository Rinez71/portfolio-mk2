import React from 'react';
import type { NextPage } from 'next';
import { Typography, CssBaseline, Grid, Container } from '@material-ui/core';
import Layout from '../components/Layout/Layout';
import Timeline from '../components/Timeline/Timeline';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: '10rem 0',
    height: 'auto',
  },
  background: {
    backgroundColor: '#E3E3E3'
  }
}));

const Experience: NextPage = () => {
  const classes = useStyles();
  return (
    <>
      <CssBaseline/>
      <Layout header='Experience'>
        <main className={classes.background}>
          <Container className={classes.container}>
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
      </Layout>
    </>
  );
};

export default Experience;
