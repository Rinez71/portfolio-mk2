import type { NextPage } from 'next';
import Image from 'next/image';
import { Typography, CssBaseline, Grid, Button, Box } from '@material-ui/core';
import { Footer } from '../components/Footer/Footer';
import { Navbar } from '../components/Navigation/Navbar';
import styles from '../styles/Home.module.css';
import Forest from '../public/images/forest-1.jpg';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
// Import Swiper styles
import 'swiper/css';

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
              modules={[Autoplay]}
              autoplay={{
                "delay": 2500,
                "disableOnInteraction": false
              }}
                loop={true}
                spaceBetween={30}
                slidesPerView={'auto'}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
              >
                <SwiperSlide>
                slide 1{/* <Image src={Forest} alt='logo' /> */}
                </SwiperSlide>
                <SwiperSlide>
                  slide 2{/* <Image src={Forest} alt='logo' /> */}
                </SwiperSlide>
                <SwiperSlide>
                  slide 3{/* <Image src={Forest} alt='logo' /> */}
                </SwiperSlide>
                <SwiperSlide>
                  slide 4{/* <Image src={Forest} alt='logo' /> */}
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
