import React, {useState} from 'react';
import AddMember from './components/Members/AddMember'
import MemberList from "./components/Members/MemberList";

const DUMMY_MEMBERS = [{
	id: 'member01',
	name: 'vitamin01',
	age: 1,
}, {
	id: 'member02',
	name: 'vitamin02',
	age: 2,
}, {
	id: 'member03',
	name: 'vitamin03',
	age: 3,
}]

function App() {
	const [memberInfo, setMemberInfo] = useState(DUMMY_MEMBERS)
	const addMemberHandler = (memberInfo) => {
		setMemberInfo((prevMembers) => {
			return [memberInfo, ...prevMembers]
		})
	}
	return (
			<div>
				<AddMember onAddMember={addMemberHandler}/>
				<MemberList members={memberInfo}/>
			</div>
	);
}

export default App;
