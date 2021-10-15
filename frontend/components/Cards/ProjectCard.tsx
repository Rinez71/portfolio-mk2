/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx, CSSObject } from '@emotion/react';
import React from 'react';
import Image from 'next/image';
import {
  Typography,
  Card,
  CardActions,
  CardContent,
  Button,
} from '@mui/material';

const card:CSSObject = {
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '#44475a',
};

const text = {
  color: '#f8f8f2',
};

const cardMedia: CSSObject = {
  paddingTop: '56.25%',
};

const cardContent:CSSObject = {
  flexGrow: 1,
};

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
          <Typography gutterBottom variant='h5' css={text}>
            {title}
          </Typography>
          <Typography css={text}>{description}</Typography>
        </CardContent>
        <CardActions>
          <a href={demoLink} target='_blank' rel='noreferrer'>
            <Button size='small' color='secondary' variant='contained'>
              Live Demo
            </Button>
          </a>
          <a href={githubLink} target='_blank' rel='noreferrer'>
            <Button size='small' color='secondary'>
              Github
            </Button>
          </a>
        </CardActions>
      </Card>
    </>
  );
};

export default ProjectCard;
