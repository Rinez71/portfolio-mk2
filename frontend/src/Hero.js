import React from 'react';
import {ParticleBackground} from "./ParticleBackground";
import {CenterTitle} from './CenterTitle';
import './Hero.css'


export const Hero = () => {
	return (
		<>
			<div className='hero'>
				{/*<ParticleBackground />*/}
				<CenterTitle />
			</div>
		</>
	);
};

