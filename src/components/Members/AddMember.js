import React, {useState} from 'react';
import Card from '../UI/Card'
import Button from '../UI/Button'
import classes from './AddMember.module.css'
import ErrorModal from "../UI/ErrorModal";

const AddMember = (props) => {
	const [enteredMemberName, setEnteredMemberName] = useState('')
	const [enteredMemberAge, setEnteredMemberAge] = useState('')
	const [errorModalPopup, setErrorModalPopup] = useState();

	const addMemberHandler = (event) => {
		event.preventDefault(); // 새로 고침됐을때 기본 값 초기화 방지
		if (enteredMemberName.trim().length === 0) {
			setErrorModalPopup({
				title: '오류 메세지',
				message: '이름을 입력해주세요.',
			})
			return;
		} else if (enteredMemberAge.trim().length === 0) {
			setErrorModalPopup({
				title: '오류 메세지',
				message: '나이를 입력해주세요.',
			})
			return ;
		}
		if (+enteredMemberAge < 1) {
			return setErrorModalPopup({
				title: '오류 메세지',
				message: '0 보다 큰 올바른 나이를 입력해주세요',
			})
		}
		console.log('회원 정보 로그 :: ' + enteredMemberName, enteredMemberAge);
		props.onAddMember(enteredMemberName, enteredMemberAge);
		setEnteredMemberName('');
		setEnteredMemberAge('');
	}
	const onClickCloseBTN = () => {
		setErrorModalPopup(null);
	}
	const memberNameChangeHandler = (event) => {
		setEnteredMemberName(event.target.value);
	}
	const memberAgeChangeHandler = (event) => {
		setEnteredMemberAge(event.target.value);
	}
	return (
			<React.Fragment>
					{errorModalPopup && <ErrorModal onClickCloseBTN={onClickCloseBTN}
											 title={errorModalPopup.title}
											 message={errorModalPopup.message}
					/>}
					<Card className={classes.input}>
						<form action="" onSubmit={addMemberHandler}>
							<label htmlFor="memberName">회원 성함</label>
							<input id="memberName" type="text" value={enteredMemberName} onChange={memberNameChangeHandler}/>
							<label htmlFor="memberAge">나이</label>
							<input id="memberAge" type="text" value={enteredMemberAge} onChange={memberAgeChangeHandler}/>
							<Button type="submit">회원 추가</Button>
						</form>
					</Card>
			</React.Fragment>
	)
}
export default AddMember;