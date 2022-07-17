import React, {useState} from 'react';
import AddMember from './AddMember'
import classes from './MemberList.module.css'
import Card from "../UI/Card";

const MemberList = (props) => {
	const [enteredMemberData, setEnteredMemberData] = useState('')
	const saveMemberDataHandler = (enteredMemberData) => {
		const memberData = {
			...enteredMemberData,
			id: Math.random().toString()
		}
	}
	return (
			<Card className={classes.users}>
				<ul>
					{
						props.members.map((member) =>
								(<li>
									{member.name} {member.age}
								</li>))
					}
				</ul>
			</Card>
	)
}
export default MemberList;