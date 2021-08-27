import type { NextPage } from 'next';
import Image from 'next/image';
import { Typography, CssBaseline, Grid, Button, Box } from '@material-ui/core';
import { Footer } from '../components/Footer/Footer';
import { Navbar } from '../components/Navigation/Navbar';
import styles from '../styles/Home.module.css';
import Forest from '../public/images/forest-1.jpg';
import Penny from '../public/images/penny.png';
import Me from '../public/images/about-me.jpg';
import Millie from '../public/images/millie.png';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
// import Swiper core and required modules
import SwiperCore, { Autoplay, Navigation } from 'swiper';

SwiperCore.use([Autoplay, Navigation]);

const about: NextPage = () => {
  return (
    <>
      <CssBaseline />
      <Navbar />
      <div className={styles.container}>
        <main className={styles.main}>
          <Grid
            container
            justifyContent='center'
            alignItems='center'
            spacing={6}
            direction='row'
          >
            <Grid item md={6}>
              <Typography variant='h4'>
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                Nice to meet you! I'm Robert Inez, a Fullstack Web Developer
              </Typography>
              <Typography variant='body1'>
                I love building beautiful and functional websites that allow
                people of all walks of life to connect. As someone with small
                business owning family members, building projects for small
                businesses makes my work feel even more worthwhile.
              </Typography>
              <Typography variant='body1' align='center' gutterBottom>
                {' '}
                Critical Thinking <span>&#8226;</span> Attention to Detail{' '}
                <span>&#8226;</span> Complex Problem Solving{' '}
                <span>&#8226;</span> Time Sharing{' '}
              </Typography>
              <Typography variant='body1' gutterBottom>
                Spending 4 years in the Marine Corps I have developed
                indispensable traits and a great work ethic. I strive to live
                with a growth mindset knowing that I can always learn something
                new and always improve my abilities.
              </Typography>
              <Typography variant='body1' align='center'>
                {' '}
                Leadership <span>&#8226;</span> Team Work <span>&#8226;</span>{' '}
                Communication <span>&#8226;</span> Reliability{' '}
                <span>&#8226;</span> Project Management{' '}
              </Typography>
            </Grid>
            <Grid item md={3}>
              <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                navigation={true}
                loop={true}
                slidesPerView={'auto'}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
              >
                <SwiperSlide>
                  <Image src={Me} alt='Photo of Robert' />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src={Penny}
                    alt="Photo of one of Robert's dogs Penny"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src={Millie}
                    alt="Photo of one of Robert's dogs Penny"
                  />
                </SwiperSlide>
              </Swiper>
            </Grid>
          </Grid>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default about;
