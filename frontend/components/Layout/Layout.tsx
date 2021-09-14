import React from 'react';
import { Navbar } from '../Navigation/Navbar';
import { Footer } from '../Footer/Footer';
import { Header } from '../Layout/Header';
import { Container } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  gridContainer: {
    padding: '10rem 0',
    height: 'auto',
  },
  container: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
}));

interface LayoutProps {
  children: React.ReactNode;
  header: string;
}

const Layout: React.FC<LayoutProps> = ({ children, header }) => {
  const classes = useStyles();
  return (
    <>
      <Navbar />
      <Header header={header} />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
