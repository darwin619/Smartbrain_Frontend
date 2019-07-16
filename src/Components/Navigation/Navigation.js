import React from 'react';

const Navigation = ( {onRouteChange, isSignedIn} ) => {
		if(isSignedIn) {
		return (
			<nav style={{marginLeft: 'auto'}}>
				 <p onClick = {() => onRouteChange('signin')} className = "f4 dim shadow-5 no-underline black mr3 pa2 pointer">Sign Out</p> 
			</nav>
		);
	}
	else {
		return (
			<nav style={{marginLeft: 'auto'}}>
				 <p onClick = {() => onRouteChange('signin')} className = "f4 dib shadow-5 dim no-underline black mr3 pa2 pointer">Sign In</p>
				 <p onClick = {() => onRouteChange('register')} className = "f4 dib shadow-5 dim no-underline black mr3 pa2 pointer">Register</p>
			
			</nav>
			);

	}
	}

export default Navigation;