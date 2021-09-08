import { CssBaseline, Grid, Typography, Container } from '@material-ui/core';
import { NextPage } from 'next';
import Image from 'next/image';
import { Navbar } from '../components/Navigation/Navbar';
import { Footer } from '../components/Footer/Footer';
import { makeStyles } from '@material-ui/core/styles';
import styles from '../styles/Projects.module.css';
import ProjectCard from '../components/Cards/ProjectCard';
import Alien from '../public/images/AlienGram.png';
import Ultuh from '../public/images/ultuh.png';

const Projects: NextPage = () => {
  // const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <Navbar />
      <div className={styles.container}>
        <main>
          <Container maxWidth='md'>
            <Typography variant='h3' gutterBottom>
              Projects
            </Typography>
            <Grid
              container
              justifyContent='center'
              // alignItems='center'
              spacing={2}
              direction='row'
            >
              <Grid item xs={12} md={6}>
                <Typography
                  className={styles.projectHeader}
                  variant='h4'
                  gutterBottom
                >
                  AlienGram
                </Typography>
                <Typography variant='subtitle1' gutterBottom>
                  AlienGram is an interactive social media web application for
                  users to post, chat, like, and submit transmissions to other
                  users posts. With this application we have enabled people of
                  all walks of life to share their extraterrestrial experiences
                  and see the most recent ET sightings on a map.
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Image
                  src={Alien}
                  alt='Thumbnail of AlienGram'
                  layout='responsive'
                />
              </Grid>
            </Grid>
            <Grid
              container
              justifyContent='center'
              // alignItems='center'
              spacing={2}
              direction='row'
            >
              <Grid item xs={12} md={6}>
                <ProjectCard
                  image='/images/AlienGram.png'
                  title='AlienGram'
                  description='AlienGram is an interactive social media web application for
                  users to post, chat, like, and submit transmissions to other
                  users posts. With this application we have enabled people of
                  all walks of life to share their extraterrestrial experiences
                  and see the most recent ET sightings on a map.'
                />
                {/* <Typography
                  variant='h4'
                  gutterBottom
                  className={styles.projectHeader}
                >
                  Ult-uh
                </Typography>
                <Typography variant='subtitle2' gutterBottom>
                  Ul-tuh is a fake ecommerce application that allows users to
                  add, remove, increment, and decrement items from their cart.
                  The checkout process allows users to select shipping country
                  and loads separate subdivisions based on country. Payments are
                  handled by Stripe JS which is enabled through CommerceJS.
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Image
                  src={Ultuh}
                  alt='Thumbnail of Ultuh'
                  layout='responsive'
                />
              </Grid> */}
              </Grid>
            </Grid>
          </Container>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Projects;
