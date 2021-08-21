import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

export const Footer = () => {
  return(
    <>
    <footer>
    <a
      href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
      target='_blank'
      rel='noopener noreferrer'
    >
      <LinkedInIcon fontSize='large'/>
    </a>
    <a
      href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
      target='_blank'
      rel='noopener noreferrer'
    >
      <GitHubIcon fontSize='large'/>
    </a>
  </footer>
    </>
  )
  }
