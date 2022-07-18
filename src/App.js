import React, {useState} from 'react';
import AddMember from './components/Members/AddMember'
import MemberList from "./components/Members/MemberList";

function App() {
	const [memberList, setMemberList] = useState([])
	const addMemberHandler = (memberName, memberAge) => {
		setMemberList((prevMemberList) => {
			return [
				...prevMemberList, // 요소 복사, 배열의 모든 요소들을 불러오는 스프레드 연산자 회원 정보들 출력
				{name: memberName, age: memberAge, id: Math.random().toString()}, //새로운 회원 정보 출력
			]
		})
	}

	return (
			<div>
				<AddMember onAddMember={addMemberHandler}/>
				<MemberList members={memberList}/>
			</div>
	);
}

export default App;
