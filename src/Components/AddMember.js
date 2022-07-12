import React from 'react';

const AddMember = () => {
	const nameChangeHandler = () => {

	}
	const submitHandler =() => {

	}
	return (
			<div>
				<form action="" onSubmit={submitHandler}>
					<div>
						<div>
							<label>회원 성함</label>
							<input type="text" onChange={nameChangeHandler}/>
						</div>
						<div>
							<label>나이</label>
							<input type="text" onChange={memberAgeHandler}/>
						</div>
						<button type="submit">회원 추가</button>
					</div>
				</form>
				<div>
					<input type='text'/>
					<br/>
					<input type='text'/>
				</div>
			</div>
	)
}
export default AddMember;