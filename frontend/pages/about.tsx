import type { NextPage } from 'next';
import {CssBaseline} from '@material-ui/core'
import {Footer} from '../components/Footer/Footer'
import {Navbar} from '../components/Navigation/Navbar'
import styles from '../styles/Home.module.css';




const about: NextPage = () => {
  return (
    <>
      <CssBaseline />
      <Navbar />
      <div className={styles.container}>
        <main className={styles.main}>
          <h1>About Page</h1>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default about;
