import React from 'react';
import Image from 'next/image';
import { Box } from '@mui/material';
import Masonry from '@mui/lab/Masonry';
import MasonryItem from '@mui/lab/MasonryItem';
import Millie from '../../public/images/millie.png';
import Penny from '../../public/images/penny.png';
import MillieBaby from '../../public/images/millie-baby.jpg';
import PennyTongue from '../../public/images/penny-tongue.jpg';
import Me from '../../public/images/about-me.jpg';

const itemData = [
  {
    img: Me,
    title: 'Robert',
  },
  {
    img: Millie,
    title: 'Millie',
  },
  {
    img: Penny,
    title: 'Millie',
  },
  {
    img: PennyTongue,
    title: 'Millie',
  },
  {
    img: MillieBaby,
    title: 'Millie',
  },
];

const ImageMasonry: React.FC = () => {
  return (
    <>
      <Box sx={{ width: 500, minHeight: 500 }}>
        <Masonry columns={2} spacing={2}>
          {itemData.map((item, index) => (
            <MasonryItem key={index}>
              <Image src={item.img} alt={item.title} loading='lazy' />
            </MasonryItem>
          ))}
        </Masonry>
      </Box>
    </>
  );
};

export default ImageMasonry;
