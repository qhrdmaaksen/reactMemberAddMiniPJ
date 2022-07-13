import React from 'react';
import cssClasses from './Card.module.css'

const Card = (props) => {
	return (
			<div className={`${cssClasses.card} ${props.className}`}>
				{props.childeren}
			</div>
	)
}
export default Card;