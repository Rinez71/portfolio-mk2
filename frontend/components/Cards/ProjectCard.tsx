import React from 'react';
import Image from 'next/image';
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
    border: '1px solid black',
    borderRadius: '10px',
    fontSize: '1.25rem',
    '&:hover': {
      // color: '#F64C72',
      borderColor: ' #A4B0FF',
    },
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
  image: any;
  title: string;
  description: string;
  alt: string;
}

const ProjectCard = ({ image, title, description, alt }: Props) => {
  const classes = useStyles();
  return (
    <>
      <Card className={classes.card}>
        <Image src={image} alt={alt} layout='responsive' />
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
