import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';
import {
  Typography,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
} from '@material-ui/core';

import Alien from '../../public/images/AlienGram.png';

const useStyles = makeStyles(() => ({
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%',
  },
  cardContent: {
    flexGrow: 1,
  },
}));

interface CardProps {
  image: any;
  title: string;
  description: string;
  alt: string;
  demoLink: string;
  githubLink: string;
}

const ProjectCard: React.FC<CardProps> = ({
  image,
  title,
  description,
  alt,
  demoLink,
  githubLink,
}) => {
  const classes = useStyles();
  return (
    <>
      <Card className={classes.card}>
        <Image
          className={classes.cardMedia}
          src={image}
          alt={alt}
          layout='responsive'
        />
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant='h5'>
            {title}
          </Typography>
          <Typography>{description}</Typography>
        </CardContent>
        <CardActions>
          <a href={demoLink} target='_blank' rel='noreferrer'>
            <Button size='small' color='primary'>
              Live Demo
            </Button>
          </a>
          <a href={githubLink} target='_blank' rel='noreferrer'>
            <Button size='small' color='primary'>
              Github
            </Button>
          </a>
        </CardActions>
      </Card>
    </>
  );
};

export default ProjectCard;
