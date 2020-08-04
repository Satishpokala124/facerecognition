import React from 'react';

const Navigation = ({ onRouteChange, isSignedin }) => {
	if (isSignedin){
		return(
			<nav style={{height:'150px', display: 'flex', justifyContent: 'flex-end', alignItems:'center'}}>
				<p onClick={() => {onRouteChange('signin')}} className = 'f3 link dim underline pa3 pointer'>Sign Out</p>
			</nav>
		);
	} else {
	 	return(
			<nav style={{height:'150px', display: 'flex', justifyContent: 'flex-end', alignItems:'center'}}>
				<p onClick={() => {onRouteChange('signin')}} className = 'f3 link dim underline pa3 pointer'>Sign In</p>
				<p onClick={() => {onRouteChange('register')}} className = 'f3 link dim underline pa3 pointer'>Register</p>
			</nav>
	);
	}
}

export default Navigation;