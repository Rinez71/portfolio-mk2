/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import React from 'react';
import Link from 'next/link';
import styles from '../../styles/Nav.module.css';
import {
  Drawer,
  CssBaseline,
  Toolbar,
  List,
  ListItem,
  Divider,
  IconButton,
  ListItemIcon,
  ListItemText,
  Typography,
  FilledTextFieldProps,
} from '@mui/material';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import { useTheme, styled } from '@mui/material/styles';
import {
  Menu,
  ChevronLeft,
  ChevronRight,
  Home,
  Person,
  BusinessCenter,
  HourglassFull,
  Email,
} from '@mui/icons-material';
import ClickAwayListener from '@mui/material/ClickAwayListener';

const drawerWidth = 240;

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export const Navbar: React.FC = () => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const menuItems = [
    {
      text: 'Home',
      icon: <Home />,
      path: '/',
    },
    {
      text: 'About',
      icon: <Person />,
      path: '/about',
    },
    {
      text: 'Projects',
      icon: <BusinessCenter />,
      path: '/projects',
    },
    {
      text: 'Experience',
      icon: <HourglassFull />,
      path: '/experience',
    },
    {
      text: 'Contact',
      icon: <Email />,
      path: '/contact',
    },
  ];

  return (
    <>
      <CssBaseline />
      <ClickAwayListener onClickAway={handleDrawerClose}>
        <AppBar position='sticky' open={open} className={styles.navbar}>
          <Toolbar>
            <IconButton
              aria-label='open drawer'
              onClick={handleDrawerOpen}
              edge='start'
              sx={{ color: '#f8f8f2', mr: 2, ...(open && { display: 'none' }) }}
            >
              <Menu />
            </IconButton>
            <Typography variant='h6' noWrap component='div'>
              Robert Inez
            </Typography>
          </Toolbar>
        </AppBar>
      </ClickAwayListener>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            backgroundColor: '#44475a',
            color: '#f8f8f2',
          },
        }}
        variant='persistent'
        anchor='left'
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose} sx={{ color: '#f8f8f2' }}>
            {theme.direction === 'ltr' ? <ChevronLeft /> : <ChevronRight />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {menuItems.map((item) => (
            <Link key={item.text} href={item.path} passHref>
              <ListItem button>
                <ListItemIcon sx={{ color: '#f8f8f2' }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            </Link>
          ))}
        </List>
        <Divider />
      </Drawer>
    </>
  );
};
