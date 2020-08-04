import React from 'react';
import Tilt from 'react-tilt';
import logo from './Logo1.png';
import './Logo.css';

const Logo = () => {
	return(
		<div className='ml4 mr4' style={{display: 'flex', alignItems:'flex-end'}}>
			<Tilt className='Tilt br2 shadow-2 ' options={{ max : 50 }} style={{ height: 150, width: 150 }} >
	 			<div className='Tilt-inner pa3'> 
	 				<img style={{paddingTop:'10px'}}src={logo} alt="logo"></img>
	 			 </div>
			</Tilt>
		</div>
	);
}

export default Logo;