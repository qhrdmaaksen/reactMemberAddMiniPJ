import React, {useState} from 'react';
import classes from './AddMember.module.css'
import Card from '../UI/Card'
import Button from '../UI/Button'

const AddMember = (props) => {
	const [enteredName, setEnteredName] = useState('')
	const [enteredAge, setEnteredAge] = useState('')

	const nameChangeHandler = (event) => {
		setEnteredName(event.target.value);
	}
	const memberAgeHandler = (event) => {
		setEnteredAge(event.target.value);
	}
	const addMemberHandler =(event) => {
		event.preventDefault(); // 새로 고침됐을때 기본 값 초기화 방지
	props.onAddMember(enteredName, enteredAge);
		setEnteredName('');
		setEnteredAge('');
	}
	return (
			<Card className={classes.input}>
				<form action="" onSubmit={addMemberHandler}>
							<label htmlFor="memberName">회원 성함</label>
							<input id="memberName" type="text" value={enteredName} onChange={nameChangeHandler}/>
							<label htmlFor="memberAge">나이</label>
							<input id="memberAge" type="text" value={enteredAge} onChange={memberAgeHandler}/>
						<Button type="submit">회원 추가</Button>
				</form>
			</Card>
	)
}
export default AddMember;