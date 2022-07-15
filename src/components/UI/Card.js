import React from 'react';
import cssClasses from './Card.module.css'

const Card = (props) => {
	/*props.className 은 AddMembership.js 에 Card 속성에 className 과 동일해야함*/
	return (
			<div className={`${cssClasses.card} ${props.className}`}>
				{props.childeren}
			</div>
	)
}
export default Card;