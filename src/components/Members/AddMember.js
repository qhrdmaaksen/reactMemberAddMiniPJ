import React, {useState} from 'react';
import Card from '../UI/Card'
import Button from '../UI/Button'
import classes from './AddMember.module.css'

const AddMember = (props) => {
	const [enteredMemberName, setEnteredMemberName] = useState('')
	const [enteredMemberAge, setEnteredMemberAge] = useState('')

	const addMemberHandler =(event) => {
		event.preventDefault(); // 새로 고침됐을때 기본 값 초기화 방지
		console.log('회원 정보 로그 :: ' + enteredMemberName, enteredMemberAge);
	props.onAddMember(enteredMemberName, enteredMemberAge);
		setEnteredMemberName('');
		setEnteredMemberAge('');
	}
	const memberNameChangeHandler = (event) => {
		setEnteredMemberName(event.target.value);
	}
	const memberAgeChangeHandler = (event) => {
		setEnteredMemberAge(event.target.value);
	}
	return (
			<Card className={classes.input}>
				<form action="" onSubmit={addMemberHandler}>
							<label htmlFor="memberName">회원 성함</label>
							<input id="memberName" type="text" value={enteredMemberName} onChange={memberNameChangeHandler}/>
							<label htmlFor="memberAge">나이</label>
							<input id="memberAge" type="text" value={enteredMemberAge} onChange={memberAgeChangeHandler}/>
						<Button type="submit">회원 추가</Button>
				</form>
			</Card>
	)
}
export default AddMember;