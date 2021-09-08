import React from 'react';
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
  cardGrid: {
    padding: '20px 0',
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    height: 0,
    paddingTop: '56.25%',
  },
  cardContent: {
    flexGrow: 1,
  },
}));

interface Props {
  image: string;
  title: string;
  description: string;
}

const ProjectCard = ({ image, title, description }: Props) => {
  const classes = useStyles();
  return (
    <>
      <Card className={classes.card}>
        <CardMedia
          // component='img'
          className={classes.cardMedia}
          image={image}
        />
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant='h5'>
            {title}
          </Typography>
          <Typography>{description}</Typography>
        </CardContent>
        <CardActions>
          <Button size='small' color='primary'>
            Action1
          </Button>
          <Button size='small' color='primary'>
            Action2
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default ProjectCard;
