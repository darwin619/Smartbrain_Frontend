import React from 'react';

const Navigation = ( {onRouteChange, isSignedIn, toggle} ) => {
		if(isSignedIn) {
		return (
			<nav style={{marginLeft: 'auto'}}>
			{ toggle
			  ? (<p onClick = {() => onRouteChange('homes')} className = "f4 dib shadow-5 dim no-underline black mr3 pa2 pointer">Home</p>)
			  : (<p onClick = {() => onRouteChange('history')} className = "f4 dib shadow-5 dim no-underline black mr3 pa2 pointer">History</p>)}
				 <p onClick = {() => onRouteChange('signin')} className = "f4 dib shadow-5 dim no-underline black mr3 pa2 pointer">Sign Out</p>  
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