import React from 'react';
import {
  CssBaseline,
  Grid,
  Typography,
  Container,
  Button,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
}));

interface HeaderProps {
  header: string;
}

export const Header: React.FC<HeaderProps> = ({ header }) => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.container}>
        <Container maxWidth='sm'>
          <Typography
            variant='h2'
            align='center'
            color='textPrimary'
            gutterBottom
          >
            {header}
          </Typography>
        </Container>
      </div>
    </>
  );
};
