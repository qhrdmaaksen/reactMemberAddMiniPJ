import React from 'react';
import ReactDOM from 'react-dom';
import classes from './ErrorModal.module.css'
import Card from "./Card";
import Button from "./Button";

const Backdrop = (props) => {
	return (
			<div className={classes.backdrop} onClick={props.onClickCloseBTN}>
			</div>
	)
}
const ModalOverlay = (props) => {
	return (
			<Card className={classes.modal}>
				<header className={classes.header}>
					<h2>{props.title}</h2>
				</header>
				<div className={classes.content}>
					<p>{props.message}</p>
				</div>
				<footer className={classes.actions}>
					<Button onClickCloseBTN={props.onClickCloseBTN}>닫기</Button>
				</footer>
			</Card>
	)
}
const ErrorModal = (props) => {
	//어디에 렌더링할건지
	const backDropRoot = document.getElementById('backdrop_root');
	const modalOverlayRoot = document.getElementById('overlay_root');
	return (
			<React.Fragment>
				{ReactDOM.createPortal(<Backdrop onClickCloseBTN={props.onClickCloseBTN}/>, backDropRoot)}
				{ReactDOM.createPortal(<ModalOverlay title={props.title} message={props.message}
																						 onClickCloseBTN={props.onClickCloseBTN}/>, modalOverlayRoot)}
			</React.Fragment>
	)
}
export default ErrorModal;