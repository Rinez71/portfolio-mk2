import { CssBaseline, Grid, Typography, Container } from '@material-ui/core';
import { NextPage } from 'next';
import Image from 'next/image';
import { Navbar } from '../components/Navigation/Navbar';
import { Footer } from '../components/Footer/Footer';
import styles from '../styles/Background.module.css';
import ProjectCard from '../components/Cards/ProjectCard';
import Alien from '../public/images/AlienGram.png';
import Ultuh from '../public/images/ultuh.png';

const cards = [
  {
    image: Alien,
    title: 'AlienGram',
    description: `AlienGram is an interactive social media web application for
    users to post, chat, like, and submit transmissions to other
    users posts. With this application we have enabled people of
    all walks of life to share their extraterrestrial experiences
    and see the most recent ET sightings on a map.`,
    alt: 'Thumbnail of AlienGram',
  },
  {
    image: Ultuh,
    title: 'Ul-tuh',
    description: `Ul-tuh is a fake e-commerce application that allows users to
    add, remove, increment, and decrement items from their cart.
    The checkout process allows users to select shipping country
    and loads separate subdivisions based on country. Payments are
    handled by Stripe JS which is enabled through CommerceJS.`,
    alt: 'Thumbnail of Ul-tuh',
  },
];

const Projects: NextPage = () => {
  return (
    <>
      <CssBaseline />
      <Navbar />
      <div className={styles.container}>
        <main className={styles.main}>
          <Container maxWidth='lg'>
            <Typography variant='h3' gutterBottom>
              Projects
            </Typography>
            <Grid
              container
              justifyContent='center'
              // alignItems='center'
              spacing={6}
              direction='row'
            >
              {cards.map((card, index) => {
                return (
                  <Grid key={index} item xs={12} md={6}>
                    <ProjectCard
                      image={card.image}
                      title={card.title}
                      description={card.description}
                      alt={card.alt}
                    />
                  </Grid>
                );
              })}
            </Grid>
          </Container>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Projects;
