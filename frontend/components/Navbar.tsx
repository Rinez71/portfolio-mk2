import styles from '../styles/Nav.module.css';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';

import { Business } from '@material-ui/icons';

export const Navbar = () => {
  return (
    <>
      <AppBar position='relative' className={styles.navbar}>
        <Toolbar>
          <Business />
          <Typography
            className={styles.navtitle}
            variant='h6'
            color='textPrimary'
          >
            Robert Inez
          </Typography>
          <div className={styles.navlinks}>
            <Button>About Me</Button>
            <Button>Portfolio</Button>
            <Button>Experience</Button>
            <Button>Contact Me</Button>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};
