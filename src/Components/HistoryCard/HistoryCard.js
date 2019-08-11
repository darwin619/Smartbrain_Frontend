import React from 'react';
import './HistoryCard.scss';

const HistoryCard = ({imageurl, celebname}) =>  {
		return (
			<div className="history-card shadow-2">
			<div className="inner">
			<div className="celeb-image"><img src={imageurl} alt="celebimage" className="image"/></div>
			<h1 className="celeb-name">{celebname} </h1>
			</div>
			</div>
			);
	}

export default HistoryCard;


 