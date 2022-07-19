import React, {useState} from 'react';
import AddMember from './AddMember'
import classes from './MemberList.module.css'
import Card from "../UI/Card";

const MemberList = (props) => {
	return (
			<Card className={classes.users}>
				<ul>
					{
						props.members.map((member) =>
								(<li key={member.id}>
									{member.name} {member.age}
								</li>))
					}
				</ul>
			</Card>
	)
}
export default MemberList;