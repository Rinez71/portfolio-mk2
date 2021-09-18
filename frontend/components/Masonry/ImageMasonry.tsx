import React from 'react';
import Image from 'next/image';
import { Box } from '@mui/material';
import Masonry from '@mui/lab/Masonry';
import MasonryItem from '@mui/lab/MasonryItem';
import Millie from '../../public/images/millie.png';
import Penny from '../../public/images/penny.png';
import Me from '../../public/images/about-me.jpg';

const itemData = [
  {
    img: Me,
    title: 'Millie',
  },
  {
    img: Millie,
    title: 'Millie',
    cols: 3,
  },
  {
    img: Penny,
    title: 'Millie',
  },
];

interface Props {}

const ImageMasonry: React.FC<Props> = () => {
  return (
    <>
      <Box sx={{ width: 500, minHeight: 300 }}>
        <Masonry columns={2} spacing={1}>
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
