import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import { makeStyles } from '@material-ui/core/styles';

// import useStyles from './footerStyles';

const useStyles = makeStyles((theme) => ({
  footer: {
    width: '100%',
    height: '100px',
    backgroundColor: '#C0C4C8',
    padding: '2rem 0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: '20px',
  },
  footerLink: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 1,
  },
}));

export const Footer: React.FC = () => {
  const classes = useStyles();
  return (
    <>
      <footer className={classes.footer}>
        <a
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
          className={classes.footerLink}
        >
          <LinkedInIcon fontSize='large' />
        </a>
        <a
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
          className={classes.footerLink}
        >
          <GitHubIcon fontSize='large' />
        </a>
      </footer>
    </>
  );
};
