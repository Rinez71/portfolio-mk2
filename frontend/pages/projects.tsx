import {
  CssBaseline,
  Grid,
  Typography,
  Container,
  Button,
} from '@material-ui/core';
import { NextPage } from 'next';
import Image from 'next/image';
import Layout from '../components/Layout/Layout';
import ProjectCard from '../components/Cards/ProjectCard';
import Alien from '../public/images/AlienGram.png';
import Ultuh from '../public/images/ultuh.png';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    padding: '10rem 0',
    height: 'auto',
  },
  container: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  button: {
    marginTop: '4rem',
  },
  background: {
    backgroundColor: '#E3E3E3'
  }
}));

const cards = [
  {
    image: Alien,
    title: 'AlienGram',
    description: `AlienGram is an interactive social media web application for
    users to post, chat, like, and submit transmissions to other
    users posts.`,
    alt: 'Thumbnail of AlienGram',
    demoLink: 'https://bit.ly/alien-gram',
    githubLink: 'https://github.com/now-in-orbit/alien-gram',
  },
  {
    image: Ultuh,
    title: 'Ul-tuh',
    description: `Ul-tuh is a fake e-commerce application that allows users to
    add, remove, increment, decrement items from their cart, and of course make a 'purchase'.`,
    alt: 'Thumbnail of Ul-tuh',
    demoLink: 'https://ult-uh.netlify.app/',
    githubLink: 'https://github.com/Rinez71/ult-uh',
  },
];

const Projects: NextPage = () => {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <Layout header='Projects'>
        <main className={classes.background}>
          <Container className={classes.cardGrid} maxWidth='md'>
            <Grid container spacing={2}>
              {cards.map((card, index) => {
                return (
                  <Grid item key={index} xs={12} sm={6} md={4}>
                    <ProjectCard
                      image={card.image}
                      title={card.title}
                      description={card.description}
                      alt={card.alt}
                      demoLink={card.demoLink}
                      githubLink={card.githubLink}
                    />
                  </Grid>
                );
              })}
            </Grid>
          </Container>
        </main>
      </Layout>
    </>
  );
};

export default Projects;
