import type { NextPage } from 'next';
import { Typography, CssBaseline, Grid, Container } from '@material-ui/core';
import Layout from '../components/Layout/Layout';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: '10rem 0',
    height: 'auto',
  },
}));

const About: NextPage = () => {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <Layout header='About'>
        <main>
          <Container className={classes.container}>
            <Grid
              container
              justifyContent='center'
              alignItems='center'
              spacing={6}
              direction='row'
            >
              <Grid item md={6}>
                <Typography variant='h4'>
                  {/* eslint-disable-next-line react/no-unescaped-entities */}
                  Nice to meet you! I'm Robert Inez, a Fullstack Web Developer
                </Typography>
                <Typography variant='body1'>
                  I love building beautiful and functional websites that allow
                  people of all walks of life to connect. As someone with small
                  business owning family members, building projects for small
                  businesses makes my work feel even more worthwhile.
                </Typography>
                <Typography variant='body1' align='center' gutterBottom>
                  {' '}
                  Critical Thinking <span>&#8226;</span> Attention to Detail{' '}
                  <span>&#8226;</span> Complex Problem Solving{' '}
                  <span>&#8226;</span> Time Sharing{' '}
                </Typography>
                <Typography variant='body1' gutterBottom>
                  Spending 4 years in the Marine Corps I have developed
                  indispensable traits and a great work ethic. I strive to live
                  with a growth mindset knowing that I can always learn
                  something new and always improve my abilities.
                </Typography>
                <Typography variant='body1' align='center'>
                  {' '}
                  Leadership <span>&#8226;</span> Team Work <span>&#8226;</span>{' '}
                  Communication <span>&#8226;</span> Reliability{' '}
                  <span>&#8226;</span> Project Management{' '}
                </Typography>
              </Grid>
              <Grid item md={6}></Grid>
            </Grid>
          </Container>
        </main>
      </Layout>
    </>
  );
};

export default About;
