import React from 'react';
import {ParticleBackground} from "./ParticleBackground";
import {CenterTitle} from './CenterTitle';
import HeroImg from './images/hero-bg-1.jpg'
import './Hero.css'


export const Hero = () => {
	return (
		<>
			<div className='hero'>
				<img src = {HeroImg} alt = 'HeroImage' />
				{/*<ParticleBackground />*/}
				<CenterTitle />
			</div>
		</>
	);
};

