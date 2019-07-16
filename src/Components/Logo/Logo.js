import React from 'react';
import Tilt from 'react-tilt';
import Brain from './logo.png';
import './Logo.css';

const Logo = () => {
		return (
			<div className="ma3 mt3">
			<Tilt className="Tilt br2 shadow-2" options={{ max : 75 }} style={{ height: 130, width: 130 }} >
 			<div className="Tilt-inner tc pa3"><img alt='logo' src = {Brain} /></div>
			</Tilt>
			</div>
			
		);
	}

export default Logo;