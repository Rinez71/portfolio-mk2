import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { Navbar } from '../components/Navbar';

import {
  Typography,
  AppBar,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Toolbar,
  Container,
  Drawer,
  Button,
  Box,
  Paper,
} from '@material-ui/core';
import { Business } from '@material-ui/icons';
import WorkIcon from '@material-ui/icons/Work';
import Typewriter from 'typewriter-effect';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <CssBaseline />
      <Navbar />
      <div className={styles.container}>
        <main className={styles.main}>
          <Grid
            container
            justify='center'
            alignItems='center'
            spacing={6}
            md={12}
            direction='column'
          >
            <Grid item md={6}>
              <Typography
                variant='h1'
                align='center'
                className={styles.title}
                gutterBottom
              >
                Robert Inez
              </Typography>
              <Typography variant='h4' align='center' gutterBottom>
                Fullstack Web Developer skilled in: <Typewriter
                options={{
                  strings: ['ReactJS', 'ExpressJS', 'MySQL', 'NodeJS', 'and much more!'  ],
                  autoStart: true,
                  loop: true,
                }}
              />
              </Typography>
            </Grid>
            <Grid item md={6}>
              <Box display='flex' justifyContent='center' alignItems='center'>
                <Button variant='contained' size='large' color='primary'>
                  <WorkIcon className={styles.icon} />
                  See my work
                </Button>
              </Box>
            </Grid>
          </Grid>
        </main>

        <footer className={styles.footer}>
          <a
            href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
            target='_blank'
            rel='noopener noreferrer'
          >
            Powered by{' '}
            <span className={styles.logo}>
              <Image
                src='/vercel.svg'
                alt='Vercel Logo'
                width={72}
                height={16}
              />
            </span>
          </a>
        </footer>
      </div>
    </>
  );
};

export default Home;
