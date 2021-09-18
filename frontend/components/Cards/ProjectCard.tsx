/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import React from 'react';
import Image from 'next/image';
import {
  Typography,
  Card,
  CardActions,
  CardContent,
  Button,
} from '@mui/material';


const card = css({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
});

const cardMedia = css({
  paddingTop: '56.25%',
});

const cardContent = css({
  flexGrow: 1,
});

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
  return (
    <>
      <Card css={card}>
        <Image css={cardMedia} src={image} alt={alt} layout='responsive' />
        <CardContent css={cardContent}>
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
