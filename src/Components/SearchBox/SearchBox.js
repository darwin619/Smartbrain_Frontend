import React from 'react';
import './SearchBox.css';

const SearchBox = ({ SearchChange }) => {
	return (
		<div className = " tc mb4">
		<input className = "pa2 input ba b--green bg-lightest-blue" 
		type="search" 
		placeholder = "Search Your History" 
		onChange = {SearchChange} />
		</div>
		);
}

export default SearchBox;