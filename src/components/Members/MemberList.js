import React, {useState} from 'react';
import AddMember from './AddMember'

const MemberList = (props) => {
	const [enteredMemberData, setEnteredMemberData] = useState('')
	const saveMemberDataHandler = (enteredMemberData) => {
		const memberData = {
			...enteredMemberData,
			id: Math.random().toString()
		}
		porps.onAddMember(memberData);
	}
	return (
			<ul>
				<li>
					{props.members.map((member) => {

					})}
				</li>
			</ul>
	)
}
export default MemberList;